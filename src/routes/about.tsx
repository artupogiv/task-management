export function AboutRoute() {
  return (
    <div className="space-y-4">
        <h1 className="text-4xl font-bold underline">About</h1>
        <h3 className="text-2xl font-semibold ">Task Management App</h3>
        <p>This task management app is built to evaluation my skill about ReactJS. In this web-app you can add, edit, and delete task which has key values such as task name, task description, task status and task priority. You also can search task and sort the display task list by the key value of task lists.</p>
        <h3 className="text-2xl font-semibold ">URL</h3>
        <p>This task management project deploy with Vercel with the URL: <a href="https://task-management-artupogiv.vercel.app" className="font-bold text-blue-600">https://task-management-artupogiv.vercel.app</a></p>
        <h3 className="text-2xl font-semibold ">Features</h3>
        <p>- Add new task<br />- Update task<br />- Delete task<br />- Search task</p>
        <h3 className="text-2xl font-semibold ">Technologies</h3>
        <p>- React<br />- Typescript<br />- Tailwind CSS<br />- shadcn/ui<br />- Vercel</p>
    </div>
  )
}
