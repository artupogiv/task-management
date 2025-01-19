import { TaskList } from "./task-list";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox"

const initialTaskItems = [
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
];

export function TableComponent() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="cursor-pointer sortable">
            <Checkbox />
          </TableHead>
          <TableHead className="w-[100px] cursor-pointer sortable ">
            ID
          </TableHead>
          <TableHead className="cursor-pointer sortable">Task name</TableHead>
          <TableHead className="cursor-pointer sortable ">
            Submitted Date
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TaskList taskItems={initialTaskItems} />
      </TableBody>
    </Table>
  );
}
