import { formTaskSchema, Task } from "@/types/task"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type TaskFormProps = {
    onSubmitTask: (task: Task) => void;
    handleOpenDialog: (isOpen: boolean) => void;
}

export function TaskForm({onSubmitTask, handleOpenDialog}: TaskFormProps) {
  const form = useForm({
        resolver: zodResolver(formTaskSchema),
        defaultValues: {
            taskName: "",
            taskDesc: "",
            taskLabel: "",
            taskPriority: "",
            taskStatus: "",
        }
    })

    function onSubmit(values: z.infer<typeof formTaskSchema>) {
        console.log(values);

        const newTask: Task = {
            id: 0,
            taskName: values.taskName,
            taskDesc: values.taskDesc,
            taskLabel: values.taskLabel,
            taskPriority: values.taskPriority,
            taskStatus: values.taskStatus,
            createdAt: new Date().toLocaleString(),
            updatedAt: null,
        }

        onSubmitTask(newTask);
        handleOpenDialog(false);
    }
    return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="taskName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Task Name</FormLabel>
                  <FormControl>
                    <Input type="taskName" placeholder="Input Task Name" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      )
}