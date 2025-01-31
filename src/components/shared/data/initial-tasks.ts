import { Task } from "@/types/task";

export const initialTasks: Task[] = [
  {
    id: 1,
    taskStatus: "Done",
    taskLabel: "Self",
    taskName: "Morning run",
    taskDesc: "Running for 45 minutes",
    taskPriority: "Medium",
    createdAt: new Date().toLocaleString(),
    updatedAt: null,
  },
  {
    id: 2,
    taskStatus: "In progress",
    taskLabel: "Family",
    taskName: "Buy groceries",
    taskDesc: "Buy groceries for the week",
    taskPriority: "Medium",
    createdAt: new Date().toLocaleString(),
    updatedAt: null,
  },
  {
    id: 3,
    taskStatus: "To do",
    taskLabel: "Work",
    taskName: "Bring docs",
    taskDesc: "Bring docs to the office",
    taskPriority: "High",
    createdAt: new Date().toLocaleString(),
    updatedAt: null,
  },
];