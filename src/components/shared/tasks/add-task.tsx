import { Button } from "@/components/ui/button";
import { Task, /*formTaskSchema*/ } from "@/types/task";
import { Plus } from "lucide-react";

type AddTaskDialogProps = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export function AddTaskDialog({ tasks, setTasks }: AddTaskDialogProps) {
  return (
    <Button>
      <Plus></Plus>New task
    </Button>
  );
}