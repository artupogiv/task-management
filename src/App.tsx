import { initialTasks } from "./components/shared/data/initial-tasks";
import { Footer } from "./components/shared/layout/footer";
import { Heading } from "./components/shared/layout/header";

export function App() {
  const tasks = initialTasks;

  return (
    <div className="w-full max-w-5xl mx-auto ">
      <Heading />

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

      <Footer />
    </div>
  );
}
