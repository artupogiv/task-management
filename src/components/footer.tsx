export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-2 fixed bottom-0 w-full ">
      <p className="text-center text-sm">
        <a href="https://artupogiv.vercel.app" target="_blank">
          artupogiv
        </a>{" "}
        &copy; {currentYear}
      </p>
    </footer>
  );
}
