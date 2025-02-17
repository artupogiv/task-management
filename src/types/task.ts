import { z } from "zod";

export const formTaskSchema = z.object({
  title: z.string().min(3, { message: "Task title is required (min 3 characters)" }),
  description: z.string().min(3, { message: "Task description is required (min 3 characters)" }),
  isCompleted: z.boolean(),
});

export const taskSchema = formTaskSchema.extend({
  id: z.number(),
});

export type Task = z.infer<typeof taskSchema>;

export type FormTask = z.infer<typeof formTaskSchema>;
