import { ToastContent, useShowToast } from '@app/lib/toast'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@app/lib/ui/card'
import { dict } from '@app/lib/dict'
import { PasswordResetFormFields } from '@app/lib/tenant'
import { AnchorButton } from '@app/lib/ui/button'
import { Link, PasswordResetForm, useCurrentRequest, useRedirect } from '@contember/interface'

export default () => {
	const request = useCurrentRequest()
	const redirect = useRedirect()
	const showToast = useShowToast()
	const token = request?.parameters.token as string | undefined
	return (
		<Card className="w-96">
			<CardHeader>
				<CardTitle className="text-2xl">{dict.tenant.passwordReset.title}</CardTitle>
				<CardDescription>
					{dict.tenant.passwordReset.description}
				</CardDescription>
			</CardHeader>
			<CardContent>
				<PasswordResetForm onSuccess={() => {
					showToast(<ToastContent>
						Password has been reset
					</ToastContent>, { type: 'success' })
					redirect('index')
				}} token={token}>
					<form>
						<PasswordResetFormFields hasToken={!!token} />
					</form>
				</PasswordResetForm>
			</CardContent>
			<CardFooter>
				<Link to="index">
					<AnchorButton variant="link" className="ml-auto">
						{dict.tenant.login.backToLogin}
					</AnchorButton>
				</Link>
			</CardFooter>
		</Card>
	)
}
