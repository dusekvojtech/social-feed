import { ContentReferencePreview } from '@app/components/previews/content-reference-preview'
import { PostContentPreview } from '@app/components/previews/post-content-preview'
import { Table, TableBody, TableCell, TableRow, TableWrapper } from '@app/lib/ui/table'
import { Component, Field, HasMany, HasOne } from '@contember/interface'

export const ContentDetail = Component(() => <TableWrapper className="bg-gray-50/50 max-w-lg border rounded-md">
	<Table>
		<TableBody>
			<TableRow>
				<TableCell>
					Data
				</TableCell>
				<TableCell className="font-semibold">
					<Field field="data" format={value => JSON.stringify(value)} />
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					References
				</TableCell>
				<TableCell className="font-semibold">
					<HasMany field="references">
						<ContentReferencePreview />
					</HasMany>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					Post content
				</TableCell>
				<TableCell className="font-semibold">
					<HasOne field="postContent">
						<PostContentPreview />
					</HasOne>
				</TableCell>
			</TableRow>
		</TableBody>
	</Table>
</TableWrapper>)
