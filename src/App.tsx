import { TaskList } from "./data/task-list";
import { Footer } from "./components/footer";

const taskItems = [
  { id: 1, text: "Baca Dokumentasi React", isCompleted: true },
  { id: 2, text: "Mengerjakan Tugas", isCompleted: true },
  { id: 3, text: "Belajar Typescript", isCompleted: false },
];

export function App() {
  return (
    <div className="m-0 p-8 gap-4 ">
      <header className="py-5">
        <h1 className="text-4xl font-medium text-cyan-700 text-left">
          Incident Management
        </h1>
      </header>

      <p className="read-the-docs text-base font-normal ">
        Application to manage incident ...
      </p>

      <div className="flex justify-between my-4 ">
        <input
          type="text"
          placeholder="Search Incident ..."
          className="w-1/5 p-0 border border-gray-300 rounded-lg"
        />
        <button className="border border-neutral-300 rounded-lg py-1.5 px-10 my-2 bg-gray-700 hover:bg-black text-white font-semibold ">
          Add incident
        </button>
      </div>

      <div className="overflow-x-auto rounded-lg border border-gray-500">
        <table className="w-full border-gray-500 ">
          <thead>
            <tr className=" border-gray-500 ">
              <th className="px-4 py-2 text-left text-gray-600 border-b border-gray-500 sortable cursor-pointer ">
                Incident ID
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
            <TaskList taskItems={taskItems} />
          </tbody>
        </table>
      </div>

      <Footer />
    </div>
  );
}
