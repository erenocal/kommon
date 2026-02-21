import { z } from 'zod';

// Send message validation
export const sendMessageSchema = z.object({
  recipientId: z.string().uuid('Invalid recipient ID'),
  content: z
    .string()
    .min(1, 'Message cannot be empty')
    .max(2000, 'Message too long'),
  listingId: z.string().uuid('Invalid listing ID').optional(),
});

// Get conversations validation
export const getConversationsSchema = z.object({
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(50).default(20),
});

// Get messages validation
export const getMessagesSchema = z.object({
  conversationId: z.string().uuid('Invalid conversation ID'),
  page: z.coerce.number().int().positive().default(1),
  limit: z.coerce.number().int().positive().max(100).default(50),
});

// Mark as read validation
export const markAsReadSchema = z.object({
  conversationId: z.string().uuid('Invalid conversation ID'),
});

export type SendMessageInput = z.infer<typeof sendMessageSchema>;
export type GetConversationsInput = z.infer<typeof getConversationsSchema>;
export type GetMessagesInput = z.infer<typeof getMessagesSchema>;
export type MarkAsReadInput = z.infer<typeof markAsReadSchema>;
