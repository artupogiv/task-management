import { Task } from "@/types/task";

export const initialTasks: Task[] = [
  {
    id: 1,
    title: "Morning run",
    description: "Running for 45 minutes",
    isCompleted: true,
  },
  {
    id: 2,
    title: "Buy groceries",
    description: "Buy fruits and vegetables",
    isCompleted: true,
  },
  {
    id: 3,
    title: "Bring docs",
    description: "Bring documents to the office",
    isCompleted: false,
  },
];
