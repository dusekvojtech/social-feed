import { c } from '@contember/schema-definition'
import { authenticatedRole } from './acl'
import { Post } from './Post'

@c.Allow(authenticatedRole, {
	read: true,
	create: true,
	update: true,
})
export class Image {
	createdAt = c.dateTimeColumn().notNull().default('now')
	url = c.stringColumn().notNull()
	width = c.intColumn()
	height = c.intColumn()
	alt = c.stringColumn()
	meta = c.oneHasOne(ImageMetadata, 'image')
	postImage = c.oneHasMany(Post, 'image')
}

@c.Allow(authenticatedRole, {
	read: true,
	create: true,
	update: true,
})
export class ImageMetadata {
	createdAt = c.dateTimeColumn().notNull().default('now')
	image = c.oneHasOneInverse(Image, 'meta')
	fileName = c.stringColumn()
	lastModified = c.dateTimeColumn()
	fileSize = c.intColumn()
	fileType = c.stringColumn()
}
