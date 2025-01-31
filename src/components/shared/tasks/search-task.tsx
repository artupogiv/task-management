import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export function SearchTask() {
  const [searchTask, setSearchTask] = useState("");

  return (
    <div className="w-1/4">
      <div className="relative flex-1">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search tasks..."
          className="pl-8"
          value={searchTask}
          onChange={(e) => setSearchTask(e.target.value)}
        />
      </div>
    </div>
  );
}
