import { UserDetail } from '@app/components/details/user-detail'
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
						User detail
					</Slots.Title>
					<Slots.Back>
						<BackButton />
					</Slots.Back>
					<EntitySubTree entity="User(id=$id)" isCreating={false}>
						<Slots.Actions>
							<Link to="userEdit(id: $entity.id)">
								<Button>
									Edit user
								</Button>
							</Link>
						</Slots.Actions>
						<UserDetail />
					</EntitySubTree>
				</div>
			</Binding>
		</>
	)
}
