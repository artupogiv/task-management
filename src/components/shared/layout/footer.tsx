export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full text-center py-2 fixed bottom-0 max-w-5xl mx-auto ">
      <p>
        &copy; {currentYear}{" "}
        <a
          href="https://artupogiv.com"
          target="_blank"
          className="font-bold text-blue-600"
        >
          artupogiv{" "}
        </a>{" "}
        • All rights reserved
      </p>
    </footer>
  );
}
