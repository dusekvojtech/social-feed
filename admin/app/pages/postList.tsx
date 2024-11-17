import { Binding } from '@app/lib/binding'
import { BackButton } from '@app/lib/buttons'
import { DataGrid, DataGridColumn, DataGridHasOneColumn, DataGridLoader, DataGridPagination, DataGridQueryFilter, DataGridTable, DataGridTextColumn, DataGridToolbar } from '@app/lib/datagrid'
import { Slots } from '@app/lib/layout'
import { Button } from '@app/lib/ui/button'
import { Field, Link } from '@contember/interface'

export default () => {
	return (
		<>
			<Binding>
				<div className="flex flex-col gap-12">
					<Slots.Title>
						Post list
					</Slots.Title>
					<Slots.Back>
						<BackButton />
					</Slots.Back>
					<>
						<Slots.Actions>
							<Link to="postCreate">
								<Button>
									Create post
								</Button>
							</Link>
						</Slots.Actions>
						<DataGrid entities="Post">
							<DataGridToolbar>
								<DataGridQueryFilter />
							</DataGridToolbar>
							<DataGridLoader>
								<DataGridTable>
									<DataGridColumn>
										<div className="flex gap-4">
											<Link to="postDetail(id: $entity.id)">
												<a>
													Detail
												</a>
											</Link>
											<Link to="postEdit(id: $entity.id)">
												<a>
													Edit
												</a>
											</Link>
										</div>
									</DataGridColumn>
									<DataGridTextColumn field="title" header="Title" />
									<DataGridHasOneColumn field="author" header="Author">
										<Field field="name" />
									</DataGridHasOneColumn>
								</DataGridTable>
							</DataGridLoader>
							<DataGridPagination />
						</DataGrid>
					</>
				</div>
			</Binding>
		</>
	)
}
