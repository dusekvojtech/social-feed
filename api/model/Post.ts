import { c } from '@contember/schema-definition'
import { publicRole, authenticatedRole } from './acl'
import { User } from './User'
import { Content } from './Content'
import { Image } from './Image'

@c.Allow(publicRole, {
	read: true,
})
@c.Allow(authenticatedRole, {
	read: true,
	create: true,
	update: ['title', 'author', 'content', 'image'],
	delete: true,
})
export class Post {
	createdAt = c.dateTimeColumn().notNull().default('now')
	title = c.stringColumn()
	updatedAt = c.dateTimeColumn()
	author = c.manyHasOne(User, 'posts')
	content = c.oneHasOne(Content, 'postContent')
	image = c.manyHasOne(Image, 'postImage')
}
