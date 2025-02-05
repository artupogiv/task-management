import { initialTasks } from "@/data/initial-tasks";
import { Task } from "@/types/task";

export function getTaskItemStorage() {
  const storedTask = localStorage.getItem("tasks");

  const parsedTask = storedTask ? JSON.parse(storedTask) : initialTasks;

  const transformedTask = parsedTask.map((task: Task) => {
    return {
      ...task,
    };
  });

  return transformedTask;
}

export function setTaskItemsStorage(tasks: Task[]) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
