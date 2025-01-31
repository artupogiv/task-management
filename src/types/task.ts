import { z } from "zod";

export const formTaskSchema = z.object({
  taskName: z.string().min(3, {message: "Task name is required (min 3 characters)" }),
  taskDesc: z.string().min(5, {message: "Task name is required (min 3 characters)" }),
  taskLabel: z.string().min(1, {message: "Task label is required" }),
  taskPriority: z.string().min(1, {message: "Task label is required" }),
  taskStatus: z.string().min(1, {message: "Task label is required" }),
});

export const taskSchema = formTaskSchema.extend({
  id: z.number(),
  createdAt: z.string(),
  updatedAt: z.string().nullable(),
});

export type Task = z.infer<typeof taskSchema>;

export type FormTask = z.infer<typeof formTaskSchema>;
