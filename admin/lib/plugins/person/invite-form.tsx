import { dict } from '@app/lib/dict'
import { FormContainerUI, FormLabelUI, FormLabelWrapperUI } from '@app/lib/form'
import { MembershipsControl, useIntrospectionRolesConfig } from '@app/lib/tenant'
import { ToastContent, useShowToast } from '@app/lib/toast'
import { Input } from '@app/lib/ui/input'
import { MembershipInput } from '@contember/graphql-client-tenant'
import {
	Component,
	EntityAccessor,
	Field,
	useEntityBeforePersist,
	useField,
	useInviteMutation,
} from '@contember/interface'
import { useProjectSlug } from '@contember/react-client'
import { useReferentiallyStableCallback } from '@contember/react-utils'
import { useCallback, useState } from 'react'

type FormValues = { email: string; name: string; memberships: MembershipInput[] }

const useInvitePerson = () => {
	const invite = useInviteMutation()
	const projectSlug = useProjectSlug()
	const showToast = useShowToast()

	return useReferentiallyStableCallback(async (getAccessor: EntityAccessor.GetEntityAccessor, values: FormValues) => {
		const response = await invite({
			email: values.email,
			name: values.name,
			projectSlug: projectSlug!,
			memberships: values.memberships,
		})

		return () => {
			if (!response.ok) {
				showToast(<ToastContent>{dict.tenant.invite.errorMessages[response.error] ?? dict.tenant.invite.errorMessages.UNKNOWN_ERROR}</ToastContent>, {
					type: 'error',
				})
				throw new Error(dict.tenant.invite.errorMessages[response.error] ?? dict.tenant.invite.errorMessages.UNKNOWN_ERROR)
			}

			getAccessor().getField('personId').updateValue(response.result.person.id)
		}
	})
}

export const PersonInviteForm = Component(
	() => {
		const projectSlug = useProjectSlug()
		const rolesResolved = useIntrospectionRolesConfig(projectSlug!)
		const invitePerson = useInvitePerson()

		const personIdField = useField('personId')
		const emailField = useField<string>('tenantPerson.email')
		const nameField = useField<string>('tenantPerson.name')
		const rolesField = useField<string>('tenantPerson.roles')

		const [values, setValues] = useState<FormValues>({
			email: emailField.valueOnServer ?? '',
			name: nameField.valueOnServer ?? '',
			memberships: rolesField.valueOnServer?.split(',').map(role => ({ role, variables: [] })) ?? [],
		})

		const setValue = useCallback(
			(key: keyof typeof values, value: string | MembershipInput[]) => {
				if (!personIdField.value) {
					personIdField.updateValue('')
				}

				setValues(it => ({ ...it, [key]: value }))
			},
			[personIdField.value, personIdField.updateValue],
		)

		useEntityBeforePersist(getAccessor => {
			return () => {
				return invitePerson(getAccessor, values)
			}
		})

		return (
			<>
				<form className="grid gap-4">
					<FormContainerUI>
						<FormLabelWrapperUI>
							<FormLabelUI required htmlFor="person-email">
								{dict.tenant.invite.email}
							</FormLabelUI>
						</FormLabelWrapperUI>

						<Input
							id="person-email"
							type="email"
							className="max-w-md"
							value={values.email}
							onChange={it => setValue('email', it.target.value)}
							required
						/>
					</FormContainerUI>

					<FormContainerUI>
						<FormLabelWrapperUI>
							<FormLabelUI htmlFor="person-name">{dict.tenant.invite.name}</FormLabelUI>
						</FormLabelWrapperUI>

						<Input id="person-name" type="text" className="max-w-md" value={values.name} onChange={it => setValue('name', it.target.value)} />
					</FormContainerUI>

					<FormContainerUI>
						<FormLabelWrapperUI>
							<FormLabelUI htmlFor="memberships">{dict.tenant.invite.roles}</FormLabelUI>
						</FormLabelWrapperUI>

						<div className="max-w-md">
							<MembershipsControl memberships={values.memberships} setMemberships={it => setValue('memberships', it)} roles={rolesResolved} />
						</div>
					</FormContainerUI>
				</form>
			</>
		)
	},
	() => (
		<>
			<Field field="personId" />
			<Field field="tenantPerson.email" />
			<Field field="tenantPerson.name" />
			<Field field="tenantPerson.roles" />
		</>
	),
)
