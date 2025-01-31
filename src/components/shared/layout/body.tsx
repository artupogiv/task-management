import { Table } from "@/components/ui/table";
import { SearchTask } from "../tasks/search-task";
import { AddTaskDialog } from "../tasks/add-task";

export function Body() {
  return (
    <div className="w-full">
      <div className="flex items-center p-8 justify-between pt-4 ">
        <SearchTask />
        <AddTaskDialog />
      </div>
      <Table></Table>
    </div>
  );
}
