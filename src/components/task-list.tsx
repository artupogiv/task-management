import { type Task } from "@/types/tasks";
import { TaskListItem } from "@/components/task-list-item";

type TaskItemsProps = {
  taskItems: Task[];
};

export function TaskList({ taskItems }: TaskItemsProps) {
  return (
    <ul className="space-y-2">
      {taskItems.map((taskItems) => {
        return (
          <li key={taskItems.id}>
            <TaskListItem taskItem={taskItems}/>
          </li>
        );
      })}
    </ul>
  );
}