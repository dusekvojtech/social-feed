import { ContentPreview } from '@app/components/previews/content-preview'
import { Table, TableBody, TableCell, TableRow, TableWrapper } from '@app/lib/ui/table'
import { Component, Field, HasOne } from '@contember/interface'

export const ContentReferenceDetail = Component(() => <TableWrapper className="bg-gray-50/50 max-w-lg border rounded-md">
	<Table>
		<TableBody>
			<TableRow>
				<TableCell>
					Type
				</TableCell>
				<TableCell className="font-semibold">
					<Field field="type" />
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
		</TableBody>
	</Table>
</TableWrapper>)
