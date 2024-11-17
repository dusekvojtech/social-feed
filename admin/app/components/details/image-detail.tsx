import { MetaPreview } from '@app/components/previews/meta-preview'
import { PostContentPreview } from '@app/components/previews/post-content-preview'
import { Table, TableBody, TableCell, TableRow, TableWrapper } from '@app/lib/ui/table'
import { Component, Field, HasMany, HasOne } from '@contember/interface'

export const ImageDetail = Component(() => <TableWrapper className="bg-gray-50/50 max-w-lg border rounded-md">
	<Table>
		<TableBody>
			<TableRow>
				<TableCell>
					Url
				</TableCell>
				<TableCell className="font-semibold">
					<Field field="url" />
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					Width
				</TableCell>
				<TableCell className="font-semibold">
					<Field field="width" />
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					Height
				</TableCell>
				<TableCell className="font-semibold">
					<Field field="height" />
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					Alt
				</TableCell>
				<TableCell className="font-semibold">
					<Field field="alt" />
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					Meta
				</TableCell>
				<TableCell className="font-semibold">
					<HasOne field="meta">
						<MetaPreview />
					</HasOne>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					Post image
				</TableCell>
				<TableCell className="font-semibold">
					<HasMany field="postImage">
						<PostContentPreview />
					</HasMany>
				</TableCell>
			</TableRow>
		</TableBody>
	</Table>
</TableWrapper>)
