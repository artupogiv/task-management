import { Footer } from "./components/footer";
import { Button } from "./components/ui/button";
import { PlusIcon } from "lucide-react";
import { Input } from "./components/ui/input";
import { type Task } from "./types/tasks";
import { useState } from "react";
import { TaskList } from "./components/task-list";

const initialTaskItems : Task[] = [
  {
    id: 1,
    text: "Baca Dokumentasi React",
    isCompleted: true,
    date: new Date(),
  },
  {
    id: 2,
    text: "Mengerjakan Tugas",
    isCompleted: false,
    date: new Date(),
  },
  {
    id: 3,
    text: "Belajar Typescript",
    isCompleted: false,
    date: new Date(),
  },
]

export function App() {
  const [taskItems, setTaskItems] = useState(initialTaskItems);

  function addTaskItem() {
    const newTaskItem = {
      id: taskItems[taskItems.length - 1].id + 1,
      text: "Task baru",
      isCompleted: false,
      date: new Date(),
    };

    const updateTaskItems = [...taskItems, newTaskItem];

    setTaskItems(updateTaskItems);
  }

  return (
    <div className="m-0 p-8 gap-4 ">
      <header className="py-5">
        <h1 className="text-4xl font-medium text-zinc-800 text-left ">
          Task Management
        </h1>
      </header>

      <p className="read-the-docs text-base font-normal ">
        Simple task management app to organize your tasks
      </p>

      <div className="flex justify-between my-4 w-full ">
        <Input placeholder="Search task..." className="w-[12.5rem]" />
        <Button onClick={addTaskItem}>
          <PlusIcon /> New task
        </Button>
      </div>

      <TaskList taskItems={taskItems}/>

      <Footer />
    </div>
  );
}
