import { initialTasks } from "@/data/initial-tasks";
import { Task } from "@/types/task";

export function getTaskItemStorage() {
  const storedTask = localStorage.getItem("tasks");

  return storedTask ? JSON.parse(storedTask) : initialTasks;
}

export function setTaskItemsStorage(tasks: Task[]) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function getTaskItemById(id: number) {
  const tasks = getTaskItemStorage();
  return tasks.find((task: Task) => task.id === id);
}