import { Menu, MenuItem } from '@app/lib/ui/menu'
import { Component } from '@contember/interface'
import { FileTextIcon, LayoutDashboardIcon, UsersIcon } from 'lucide-react'

export const Navigation = Component(() => <Menu>
	<MenuItem label="Dashboard" icon={<LayoutDashboardIcon />} to="postList" />
	<MenuItem label="Posts" icon={<FileTextIcon />} />
	<MenuItem label="Users" icon={<UsersIcon />} />
</Menu>)
