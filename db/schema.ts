import { InferSelectModel, relations } from 'drizzle-orm'
import { pgTable, serial, text, timestamp, pgEnum } from 'drizzle-orm/pg-core'

// Enums for issue status and priority
export const statusEnum = pgEnum('status', [
  'backlog',
  'todo',
  'in_progress',
  'done',
])

export const priorityEnum = pgEnum('priority', ['low', 'medium', 'high'])

// Issue table
export const issues = pgTable('issues', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  description: text('description'),
  status: statusEnum('status').default('backlog').notNull(),
  priority: priorityEnum('priority'),
})
