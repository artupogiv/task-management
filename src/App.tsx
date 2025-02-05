import { useEffect, useState } from "react";
import { Task } from "@/types/task";
import { getTaskItemStorage, setTaskItemsStorage } from "@/modules/task";
import { Footer } from "@/components/shared/layout/footer";
import { Heading } from "@/components/shared/layout/header";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { TaskList } from "@/components/shared/tasks/task-list";
// import { Search } from "lucide-react";

export function App() {
  const [taskItems, setTaskItems] = useState(getTaskItemStorage());

  useEffect(() => {
    setTaskItemsStorage(taskItems);
  }, [taskItems]);

  function handleAddTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newTask = {
      id: taskItems.length ? taskItems[taskItems.length - 1].id + 1 : 1,
      title: String(formData.get("title")),
      description: String(formData.get("description")),
      isCompleted: false,
    };

    const updatedTasks = [...taskItems, newTask];

    setTaskItems(updatedTasks);

    event.currentTarget.reset();
  }

  function handeDeleteTask(id: number) {
    const updatedTasks = taskItems.filter((task: Task) => task.id !== id);
    setTaskItems(updatedTasks);
  }

  function completeTask(id: number) {
    const updatedTasks = taskItems.map((task: Task) => {
      if (task.id === id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });

    setTaskItems(updatedTasks);
  }

  return (
    <div className="w-full max-w-5xl mx-auto ">
      <Heading />
      <div className="flex flex-row gap-10 m-4 p-4 space-y-1">
        <div>
          <p>Jumlah task: {taskItems.length}</p>
          <p>
            Task selesai:{" "}
            {taskItems.filter((task: Task) => task.isCompleted).length}
          </p>
        </div>
        {/* <div className="relative flex-1 ">
          <Search className="absolute left-2 top-2.5 h-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search tasks..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div> */}
      </div>
      <div className="flex gap-10 m-4 p-4 ">
        <form
          method="POST"
          onSubmit={handleAddTask}
          className="max-w-xs w-full space-y-2"
        >
          <div>
            <Label htmlFor="title">Task title</Label>
            <Input
              name="title"
              id="title"
              type="text"
              placeholder="Belajar React"
            />
            <Label htmlFor="title">Task description</Label>
            <Textarea
              name="description"
              id="description"
              typeof="text"
              placeholder="Belajar membuat component"
              className="resize-none"
            />
          </div>
          <Button type="submit">Add task</Button>
        </form>

        <div className="w-full">
          <TaskList
            taskItem={taskItems}
            completeTask={completeTask}
            handeDeleteTask={handeDeleteTask}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
