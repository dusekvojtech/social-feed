import { Binding } from '@app/lib/binding'
import { BackButton } from '@app/lib/buttons'
import { DataGrid, DataGridColumn, DataGridHasManyColumn, DataGridLoader, DataGridPagination, DataGridQueryFilter, DataGridTable, DataGridTextColumn, DataGridToolbar } from '@app/lib/datagrid'
import { Slots } from '@app/lib/layout'
import { Button } from '@app/lib/ui/button'
import { Field, Link } from '@contember/interface'

export default () => {
	return (
		<>
			<Binding>
				<div className="flex flex-col gap-12">
					<Slots.Title>
						User list
					</Slots.Title>
					<Slots.Back>
						<BackButton />
					</Slots.Back>
					<>
						<Slots.Actions>
							<Link to="userCreate">
								<Button>
									Create user
								</Button>
							</Link>
						</Slots.Actions>
						<DataGrid entities="User">
							<DataGridToolbar>
								<DataGridQueryFilter />
							</DataGridToolbar>
							<DataGridLoader>
								<DataGridTable>
									<DataGridColumn>
										<div className="flex gap-4">
											<Link to="userDetail(id: $entity.id)">
												<a>
													Detail
												</a>
											</Link>
											<Link to="userEdit(id: $entity.id)">
												<a>
													Edit
												</a>
											</Link>
										</div>
									</DataGridColumn>
									<DataGridTextColumn field="name" header="Name" />
									<DataGridTextColumn field="email" header="Email" />
									<DataGridHasManyColumn field="posts" header="Posts">
										<Field field="title" />
									</DataGridHasManyColumn>
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
