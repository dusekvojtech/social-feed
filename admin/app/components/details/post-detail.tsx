import { ContentPreview } from '@app/components/previews/content-preview'
import { ImagePreview } from '@app/components/previews/image-preview'
import { UserPersonPreview } from '@app/components/previews/user-person-preview'
import { Table, TableBody, TableCell, TableRow, TableWrapper } from '@app/lib/ui/table'
import { Component, Field, HasOne } from '@contember/interface'

export const PostDetail = Component(() => <TableWrapper className="bg-gray-50/50 max-w-lg border rounded-md">
	<Table>
		<TableBody>
			<TableRow>
				<TableCell>
					Title
				</TableCell>
				<TableCell className="font-semibold">
					<Field field="title" />
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					Author
				</TableCell>
				<TableCell className="font-semibold">
					<HasOne field="author">
						<UserPersonPreview />
					</HasOne>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					Content
				</TableCell>
				<TableCell className="font-semibold">
					<HasOne field="content">
						<ContentPreview />
					</HasOne>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					Image
				</TableCell>
				<TableCell className="font-semibold">
					<HasOne field="image">
						<ImagePreview />
					</HasOne>
				</TableCell>
			</TableRow>
		</TableBody>
	</Table>
</TableWrapper>)
