import { TaskList } from "./components/task-list";
import { Footer } from "./components/footer";
import { Button } from "./components/ui/button";
import { PlusIcon } from "lucide-react";

const initialTaskItems = [
  {
    id: 1,
    text: "Baca Dokumentasi React",
    isCompleted: true,
    date: new Date(),
  },
  { id: 2, text: "Mengerjakan Tugas", isCompleted: false, date: new Date() },
  { id: 3, text: "Belajar Typescript", isCompleted: false, date: new Date() },
];

export function App() {
  return (
    <div className="m-0 p-8 gap-4 ">
      <header className="py-5">
        <h1 className="text-4xl font-medium text-cyan-700 text-left">
          Task Management
        </h1>
      </header>

      <p className="read-the-docs text-base font-normal ">
        Application to manage task...
      </p>

      <div className="flex justify-between my-4 ">
        <input
          type="text"
          placeholder="Search Task..."
          className="w-1/5 p-0 border border-gray-300 rounded-lg"
        />
        <Button>
          <PlusIcon /> Add task
        </Button>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-500">
        <table className="w-full border-gray-500 ">
          <thead>
            <tr className=" border-gray-500 ">
              <th className="px-4 py-2 text-left text-gray-600 border-b border-gray-500 sortable cursor-pointer ">
                TaskID
              </th>
              <th className="px-4 py-2 text-left text-gray-600 border-b border-gray-500 sortable cursor-pointer ">
                Summary
              </th>
              <th className="px-4 py-2 text-left text-gray-600 border-b border-gray-500 sortable cursor-pointer ">
                Status
              </th>
              <th className="px-4 py-2 text-left text-gray-600 border-b border-gray-500 "></th>
            </tr>
          </thead>
          <tbody>
            <TaskList taskItems={initialTaskItems} />
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
}
