import { ImageMetadataForm } from '@app/components/forms/image-metadata-form'
import { PostForm } from '@app/components/forms/post-form'
import { MetaPreview } from '@app/components/previews/meta-preview'
import { FormLayout, InputField, SelectField } from '@app/lib/form'
import { DefaultRepeater, RepeaterItemActions, RepeaterRemoveItemButton } from '@app/lib/repeater'
import { Component } from '@contember/interface'

export interface ImageFormProps { over?: 'image' | (string & {}) }

export const ImageForm = Component(({ over } : ImageFormProps) => <FormLayout>
	<InputField field="url" label="Url" required />
	<InputField field="width" label="Width" required />
	<InputField field="height" label="Height" required />
	<InputField field="alt" label="Alt" required />
	{over !== 'image' && <SelectField field="meta" label="Meta" createNewForm={<ImageMetadataForm over="meta" />}>
	<MetaPreview />
</SelectField>
}
	{over !== 'image' && <DefaultRepeater field="postImage" title="Post image" orderBy="createdAt">
	<RepeaterItemActions>
		<RepeaterRemoveItemButton />
	</RepeaterItemActions>
	<PostForm over="postImage" />
</DefaultRepeater>
}
</FormLayout>)
