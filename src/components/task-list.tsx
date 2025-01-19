import { type Task } from "@/types/tasks";
import { TaskListItem } from "@/components/task-list-item";

type TaskItemsProps = {
  taskItems: Task[];
};

export function TaskList({ taskItems }: TaskItemsProps) {
  return (
    <ul>
      {taskItems.map((taskItem) => {
        return (
          <TaskListItem
            key={taskItem.id}
            text={taskItem.text}
            isCompleted={taskItem.isCompleted}
          />
        );
      })}
    </ul>
  );
}