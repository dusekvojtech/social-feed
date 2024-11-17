import { c } from '@contember/schema-definition'
import { publicRole, authenticatedRole } from './acl'
import { Post } from './Post'
import { Person } from './Person'

@c.Allow(publicRole, {
	read: ['name'],
})
@c.Allow(authenticatedRole, {
	read: true,
	update: ['name', 'email'],
})
export class User {
	createdAt = c.dateTimeColumn().notNull().default('now')
	name = c.stringColumn()
	email = c.stringColumn()
	posts = c.oneHasMany(Post, 'author')
	person = c.oneHasOne(Person, 'userPerson')
}
