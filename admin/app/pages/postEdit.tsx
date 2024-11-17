import { PostForm } from '@app/components/forms/post-form'
import { Binding, PersistButton } from '@app/lib/binding'
import { BackButton } from '@app/lib/buttons'
import { Slots } from '@app/lib/layout'
import { EntitySubTree } from '@contember/interface'

export default () => {
	return (
		<>
			<Binding>
				<div className="flex flex-col gap-12">
					<Slots.Title>
						Post edit
					</Slots.Title>
					<Slots.Back>
						<BackButton />
					</Slots.Back>
					<EntitySubTree entity="Post(id=$id)" isCreating={false}>
						<Slots.Actions>
							<PersistButton />
						</Slots.Actions>
						<PostForm />
					</EntitySubTree>
				</div>
			</Binding>
		</>
	)
}
