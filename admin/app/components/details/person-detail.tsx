import { TenantPersonPreview } from '@app/components/previews/tenant-person-preview'
import { UserPersonPreview } from '@app/components/previews/user-person-preview'
import { Table, TableBody, TableCell, TableRow, TableWrapper } from '@app/lib/ui/table'
import { Component, Field, HasOne } from '@contember/interface'

export const PersonDetail = Component(() => <TableWrapper className="bg-gray-50/50 max-w-lg border rounded-md">
	<Table>
		<TableBody>
			<TableRow>
				<TableCell>
					Person id
				</TableCell>
				<TableCell className="font-semibold">
					<Field field="personId" />
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					Tenant person
				</TableCell>
				<TableCell className="font-semibold">
					<HasOne field="tenantPerson">
						<TenantPersonPreview />
					</HasOne>
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					User person
				</TableCell>
				<TableCell className="font-semibold">
					<HasOne field="userPerson">
						<UserPersonPreview />
					</HasOne>
				</TableCell>
			</TableRow>
		</TableBody>
	</Table>
</TableWrapper>)
