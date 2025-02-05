import { Task } from "@/types/task";
import { TaskListItem } from "@/components/shared/tasks/task-list-item";

type TaskItemProps = {
  taskItem: Task[];
  completeTask: (id: number) => void;
  handeDeleteTask: (id: number) => void;
};

export function TaskList({
  taskItem,
  completeTask,
  handeDeleteTask,
}: TaskItemProps) {
  return (
    <ul className="space-y-4">
      {taskItem.map((taskItem) => {
        return (
          <li key={taskItem.id}>
            <TaskListItem
              taskItem={taskItem}
              completeTask={completeTask}
              handeDeleteTask={handeDeleteTask}
            />
          </li>
        );
      })}
    </ul>
  );
}
