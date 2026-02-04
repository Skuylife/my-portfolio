export default function Footer() {
  return (
    <footer className="py-10 border-t text-center text-sm text-gray-400">
      © {new Date().getFullYear()} Arafah. Built with Next.js & Tailwind.
    </footer>
  );
}