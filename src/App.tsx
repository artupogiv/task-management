import { initialTasks } from "./components/shared/data/initial-tasks";
import { Footer } from "./components/shared/layout/footer";
import { Heading } from "./components/shared/layout/header";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Button } from "./components/ui/button";
import { Textarea } from "./components/ui/textarea";
import { useState } from "react";
import { Checkbox } from "./components/ui/checkbox";

export function App() {
  const [tasks, setTask] = useState(initialTasks);

  function handleAddTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const newTask = {
      id: tasks[tasks.length - 1].id + 1,
      title: String(formData.get("title")),
      description: String(formData.get("description")),
      isCompleted: false,
    };

    const updatedTask = [...tasks, newTask];

    setTask(updatedTask);

    e.currentTarget.reset();
  }

  function handeDeleteTask(id: number) {
    const updatedTask = tasks.filter((task) => task.id !== id);
    setTask(updatedTask);
  }

  function taskCompleted(id: number) {
    const updatedTask = tasks.map((task) => {
      if (task.id === id) {
      return {...task, completed: !task.isCompleted}
    }
    return task;
    })
    
    setTask(updatedTask);
  }

  return (
    <div className="w-full max-w-5xl mx-auto ">
      <Heading />
      <div className="m-4 p-4 space-y-1">
        <p>Jumlah task: {tasks.length}</p>
        {/* <p>Task selesai: {tasks.filter((task) => task.isCompleted).length}</p> */}
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
          <ul className="space-y-4">
            {tasks.map((task) => {
              return (
                <li key={task.id}>
                  <div className="inline-flex gap-4 items-center">
                    <div>
                      <Checkbox id="isCompleted" name="isCompleted" onClick={() => taskCompleted(task.id)} />
                    </div>
                    <div>
                      <h2 className="font-bold">{task.title}</h2>
                      <p>{task.description}</p>
                    </div>
                    <Button variant={"destructive"} onClick={() => handeDeleteTask(task.id)}>Delete</Button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
}
