export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-2 fixed bottom-0 w-full ">
      <p>&copy; {currentYear}</p>
    </footer>
  );
}
