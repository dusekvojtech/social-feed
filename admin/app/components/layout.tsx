import { Logo } from './logo'
import { Navigation } from './navigation'
import { IdentityLoader } from '@app/lib/binding'
import { LayoutComponent, Slots } from '@app/lib/layout'
import { Component, Link } from '@contember/interface'
import { PropsWithChildren } from 'react'

export const Layout = Component(({ children }: PropsWithChildren) => <IdentityLoader>
	<LayoutComponent>
		<Slots.Logo>
			<Link to="index">
				<Logo />
			</Link>
		</Slots.Logo>
		<Slots.Navigation>
			<Navigation />
		</Slots.Navigation>
		<Slots.Footer>
			<p>
				<small>
					Created with 
					<a className="content-link" href="https://www.contember.com/">
						AI-assisted Contember Studio
					</a>
				</small>
			</p>
		</Slots.Footer>
		{children}
	</LayoutComponent>
</IdentityLoader>)
