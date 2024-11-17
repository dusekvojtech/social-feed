import { UserForm } from '@app/components/forms/user-form'
import { AuthorPreview } from '@app/components/previews/author-preview'
import { FormLayout, InputField, SelectField } from '@app/lib/form'
import { ImageField } from '@app/lib/plugins/image/image-field'
import { BlockEditorField } from '@app/lib/plugins/rich-text/editor'
import { Component } from '@contember/interface'

export interface PostFormProps { over?: 'posts' | 'postContent' | 'postImage' | (string & {}) }

export const PostForm = Component(({ over } : PostFormProps) => <FormLayout>
	<InputField field="title" label="Title" required />
	{over !== 'posts' && <SelectField field="author" label="Author" createNewForm={<UserForm over="author" />}>
	<AuthorPreview />
</SelectField>
}
	<BlockEditorField field="content.data" referencesField="content.references" label="Content" />
	<ImageField label="Image" baseField="image" />
</FormLayout>)
