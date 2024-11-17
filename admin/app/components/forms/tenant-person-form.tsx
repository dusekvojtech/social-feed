import { PersonForm } from '@app/components/forms/person-form'
import { PersonPreview } from '@app/components/previews/person-preview'
import { FormLayout, InputField, SelectField } from '@app/lib/form'
import { Component } from '@contember/interface'

export interface TenantPersonFormProps { over?: 'tenantPerson' | (string & {}) }

export const TenantPersonForm = Component(({ over } : TenantPersonFormProps) => <FormLayout>
	<InputField field="identityId" label="Identity id" required />
	<InputField field="email" label="Email" required />
	<InputField field="name" label="Name" required />
	<InputField field="otpUri" label="Otp uri" required />
	<InputField field="otpActivatedAt" label="Otp activated at" required />
	<InputField field="idpOnly" label="Idp only" required />
	<InputField field="roles" label="Roles" required />
	{over !== 'tenantPerson' && <SelectField field="person" label="Person" createNewForm={<PersonForm over="person" />}>
	<PersonPreview />
</SelectField>
}
</FormLayout>)
