import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Task } from "@/types/task";

type TaskItemProps = {
  taskItem: Task;
  completeTask: (id: number) => void;
  handeDeleteTask: (id: number) => void;
};

export function TaskListItem({ taskItem, completeTask, handeDeleteTask }: TaskItemProps) {
  return (
    <div className="inline-flex gap-4 items-center ">
      <div>
        <Checkbox
          id="isCompleted"
          name="isCompleted"
          onClick={() => completeTask(taskItem.id)}
          defaultChecked={taskItem.isCompleted}
        />
      </div>
      <div>
        <h2 className="font-bold">
          {taskItem.isCompleted && <s>{taskItem.title}</s>}
          {!taskItem.isCompleted && <span>{taskItem.title}</span>}
        </h2>
        <p>{taskItem.description}</p>
      </div>
      <Button variant={"destructive"} onClick={() => handeDeleteTask(taskItem.id)}>
        Delete
      </Button>
    </div>
  );
}
