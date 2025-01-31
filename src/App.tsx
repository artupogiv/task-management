import { useState } from "react";
import { initialTasks } from "./components/shared/data/initial-tasks";
import { Footer } from "./components/shared/layout/footer";
import { Heading } from "./components/shared/layout/header";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
import { Button } from "./components/ui/button";

export function App() {
  const [tasks, setTasks] = useState(initialTasks);

  function handleAddTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log("Add Task");
  }

  return (
    <div className="w-full max-w-5xl mx-auto ">
      <Heading />

      <div className="flex gap-10">
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
              placeholder="Makan malam"
            />
          </div>
          <Button type="submit">Add task</Button>
        </form>

        <div className="w-full">
          <ul>
            {tasks.map((task) => {
              return (
                <li key={task.id}>
                  <h2>{task.title}</h2>
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
