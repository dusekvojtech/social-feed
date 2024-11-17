import { ContentReferenceForm } from '@app/components/forms/content-reference-form'
import { PostForm } from '@app/components/forms/post-form'
import { PostContentPreview } from '@app/components/previews/post-content-preview'
import { FormLayout, InputField, SelectField } from '@app/lib/form'
import { DefaultRepeater, RepeaterItemActions, RepeaterRemoveItemButton } from '@app/lib/repeater'
import { Component } from '@contember/interface'

export interface ContentFormProps { over?: 'content' | (string & {}) }

export const ContentForm = Component(({ over } : ContentFormProps) => <FormLayout>
	<InputField field="data" label="Data" required />
	{over !== 'content' && <DefaultRepeater field="references" title="References" orderBy="createdAt">
	<RepeaterItemActions>
		<RepeaterRemoveItemButton />
	</RepeaterItemActions>
	<ContentReferenceForm over="references" />
</DefaultRepeater>
}
	{over !== 'content' && <SelectField field="postContent" label="Post content" createNewForm={<PostForm over="postContent" />}>
	<PostContentPreview />
</SelectField>
}
</FormLayout>)
