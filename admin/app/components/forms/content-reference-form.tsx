import { ContentForm } from '@app/components/forms/content-form'
import { ContentPreview } from '@app/components/previews/content-preview'
import { FormLayout, RadioEnumField, SelectField } from '@app/lib/form'
import { Component } from '@contember/interface'

export interface ContentReferenceFormProps { over?: 'references' | (string & {}) }

export const ContentReferenceForm = Component(({ over } : ContentReferenceFormProps) => <FormLayout>
	<RadioEnumField field="type" label="Type" options={{ example: 'example' }} />
	{over !== 'references' && <SelectField field="content" label="Content" createNewForm={<ContentForm over="content" />}>
	<ContentPreview />
</SelectField>
}
</FormLayout>)
