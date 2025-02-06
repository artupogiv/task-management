import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router";

export function Heading() {
  return (
    <div className="m-4 p-4 ">
      <header className="flex flex-row justify-between">
        <h1 className="text-4xl font-bold text-blue-600 text-left pb-4 ">
          Task Management
        </h1>
        <div className="inline-flex gap-10 items-center">
          <nav>
            <ul className="inline-flex gap-4 font-bold underline">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          <Avatar>
            <AvatarImage src="https://github.com/artupogiv.png" alt="avatar" />
            <AvatarFallback>VP</AvatarFallback>
          </Avatar>
        </div>
      </header>
    </div>
  );
}
