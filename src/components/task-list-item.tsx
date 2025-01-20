import { Task } from "@/types/tasks";
import { Button } from "./ui/button";

type TaskItemProps = {
  taskItem: Task;
};

export function TaskListItem({ taskItem }: TaskItemProps) {
  function deleteTask() {
    console.log("Delete task");
  }

  return (
    <div className="flex gap-2 ">
      {taskItem.isCompleted && <span>✅</span>}
      {!taskItem.isCompleted && <span>▢</span>}

      <div>
        <p className="text-xl font-bold ">{taskItem.text}</p>
        <p className="text-sm">
          <time>{taskItem.date.toDateString()}</time>
        </p>
      </div>

      <div className="flex items-center">
        <Button onClick={deleteTask} variant={"destructive"}>Delete</Button>
      </div>
    </div>
  )
}
