import { PostForm } from '@app/components/forms/post-form'
import { FormLayout, InputField } from '@app/lib/form'
import { PersonInviteForm } from '@app/lib/plugins/person/invite-form'
import { DefaultRepeater, RepeaterItemActions, RepeaterRemoveItemButton } from '@app/lib/repeater'
import { Component, HasOne } from '@contember/interface'

export interface UserFormProps { over?: 'author' | 'userPerson' | (string & {}) }

export const UserForm = Component(({ over } : UserFormProps) => <FormLayout>
	<InputField field="name" label="Name" required />
	<InputField field="email" label="Email" required />
	{over !== 'author' && <DefaultRepeater field="posts" title="Posts" orderBy="createdAt">
	<RepeaterItemActions>
		<RepeaterRemoveItemButton />
	</RepeaterItemActions>
	<PostForm over="posts" />
</DefaultRepeater>
}
	<HasOne field="person">
		<PersonInviteForm />
	</HasOne>
</FormLayout>)
