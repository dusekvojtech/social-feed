import { c } from '@contember/schema-definition'
import { contentReferenceTypeEnum } from './enum'
import { Post } from './Post'

export class Content {
	createdAt = c.dateTimeColumn().notNull().default('now')
	data = c.jsonColumn()
	references = c.oneHasMany(ContentReference, 'content')
	postContent = c.oneHasOneInverse(Post, 'content')
}

export class ContentReference {
	createdAt = c.dateTimeColumn().notNull().default('now')
	type = c.enumColumn(contentReferenceTypeEnum)
	content = c.manyHasOne(Content, 'references')
}
