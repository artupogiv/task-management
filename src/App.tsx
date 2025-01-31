import { Footer } from "./components/shared/layout/footer";
import { Heading } from "./components/shared/layout/heading";
import { Body } from "./components/shared/layout/body";

export function App() {
  return (
    <div className="w-full max-w-5xl mx-auto ">
      <Heading />
      <Body />
      <Footer />
    </div>
  );
};
