import { PersonPreview } from '@app/components/previews/person-preview'
import { Table, TableBody, TableCell, TableRow, TableWrapper } from '@app/lib/ui/table'
import { Component, Field, HasOne } from '@contember/interface'

export const TenantPersonDetail = Component(() => <TableWrapper className="bg-gray-50/50 max-w-lg border rounded-md">
	<Table>
		<TableBody>
			<TableRow>
				<TableCell>
					Identity id
				</TableCell>
				<TableCell className="font-semibold">
					<Field field="identityId" />
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
					Name
				</TableCell>
				<TableCell className="font-semibold">
					<Field field="name" />
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					Otp uri
				</TableCell>
				<TableCell className="font-semibold">
					<Field field="otpUri" />
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					Otp activated at
				</TableCell>
				<TableCell className="font-semibold">
					<Field field="otpActivatedAt" />
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					Idp only
				</TableCell>
				<TableCell className="font-semibold">
					<Field field="idpOnly" />
				</TableCell>
			</TableRow>
			<TableRow>
				<TableCell>
					Roles
				</TableCell>
				<TableCell className="font-semibold">
					<Field field="roles" />
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
