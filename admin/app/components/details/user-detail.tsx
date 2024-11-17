import { PersonPreview } from '@app/components/previews/person-preview'
import { PostContentPreview } from '@app/components/previews/post-content-preview'
import { Table, TableBody, TableCell, TableRow, TableWrapper } from '@app/lib/ui/table'
import { Component, Field, HasMany, HasOne } from '@contember/interface'

export const UserDetail = Component(() => <TableWrapper className="bg-gray-50/50 max-w-lg border rounded-md">
	<Table>
		<TableBody>
			<TableRow>
				<TableCell>
					Name
				</TableCell>
				<TableCell className="font-semibold">
					<Field field="name" />
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					Email
				</TableCell>
				<TableCell className="font-semibold">
					<Field field="email" />
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					Posts
				</TableCell>
				<TableCell className="font-semibold">
					<HasMany field="posts">
						<PostContentPreview />
					</HasMany>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					Person
				</TableCell>
				<TableCell className="font-semibold">
					<HasOne field="person">
						<PersonPreview />
					</HasOne>
				</TableCell>
			</TableRow>
		</TableBody>
	</Table>
</TableWrapper>)
