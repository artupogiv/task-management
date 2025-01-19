import { Footer } from "./components/footer";
import { Button } from "./components/ui/button";
import { PlusIcon } from "lucide-react";
import { Input } from "./components/ui/input";
import { TableComponent } from "./components/table-component";

export function App() {
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
        <Button>
          <PlusIcon /> New task
        </Button>
      </div>

      <div>
        <TableComponent />
      </div>

      <Footer />
    </div>
  );
}
