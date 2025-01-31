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
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const newTask = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      title: String(formData.get("title")),
      description: String(formData.get("description")),
      isCompleted: false,
    };

    const updatedTasks = [...tasks, newTask];

    setTasks(updatedTasks);

    event.currentTarget.reset();
  }

  function handeDeleteTask(id: number) {
    const updatedTask = tasks.filter((task) => task.id !== id);
    setTasks(updatedTask);
  }

  function completeTask(id: number) {
    const updatedTask = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, iscompleted: !task.isCompleted };
      }
      return task;
    });

    setTasks(updatedTask);
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
                      <Checkbox
                        id="isCompleted"
                        name="isCompleted"
                        onClick={() => completeTask(task.id)}
                        defaultChecked={task.isCompleted}
                      />
                    </div>
                    <div>
                      <h2 className="font-bold">
                      {task.isCompleted && <s>{task.title}</s>}
                      {!task.isCompleted && <span>{task.title}</span>}
                      </h2>
                      <p>{task.description}</p>
                    </div>
                    <Button
                      variant={"destructive"}
                      onClick={() => handeDeleteTask(task.id)}
                    >
                      Delete
                    </Button>
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
