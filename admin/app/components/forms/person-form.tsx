import { TenantPersonForm } from '@app/components/forms/tenant-person-form'
import { UserForm } from '@app/components/forms/user-form'
import { TenantPersonPreview } from '@app/components/previews/tenant-person-preview'
import { UserPersonPreview } from '@app/components/previews/user-person-preview'
import { FormLayout, InputField, SelectField } from '@app/lib/form'
import { Component } from '@contember/interface'

export interface PersonFormProps { over?: 'person' | (string & {}) }

export const PersonForm = Component(({ over } : PersonFormProps) => <FormLayout>
	<InputField field="personId" label="Person id" required />
	{over !== 'person' && <SelectField
	field="tenantPerson"
	label="Tenant person"
	createNewForm={<TenantPersonForm over="tenantPerson" />}
>
	<TenantPersonPreview />
</SelectField>
}
	{over !== 'person' && <SelectField field="userPerson" label="User person" createNewForm={<UserForm over="userPerson" />}>
	<UserPersonPreview />
</SelectField>
}
</FormLayout>)
