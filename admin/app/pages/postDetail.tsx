import { PostDetail } from '@app/components/details/post-detail'
import { Binding } from '@app/lib/binding'
import { BackButton } from '@app/lib/buttons'
import { Slots } from '@app/lib/layout'
import { Button } from '@app/lib/ui/button'
import { EntitySubTree, Link } from '@contember/interface'

export default () => {
	return (
		<>
			<Binding>
				<div className="flex flex-col gap-12">
					<Slots.Title>
						Post detail
					</Slots.Title>
					<Slots.Back>
						<BackButton />
					</Slots.Back>
					<EntitySubTree entity="Post(id=$id)" isCreating={false}>
						<Slots.Actions>
							<Link to="postEdit(id: $entity.id)">
								<Button>
									Edit post
								</Button>
							</Link>
						</Slots.Actions>
						<PostDetail />
					</EntitySubTree>
				</div>
			</Binding>
		</>
	)
}
