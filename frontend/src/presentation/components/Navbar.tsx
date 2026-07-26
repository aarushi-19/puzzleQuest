import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full bg-white/70 px-8 py-4 shadow-lg backdrop-blur-md mt-5">

        <Link
          to="/"
          className="text-2xl font-bold text-[#4B3F34]"
        >
          PuzzleQuest
        </Link>

        <nav className="hidden gap-8 text-[#5D5146] md:flex">

          <a href="#features" className="hover:text-[#D69A8C]">
            Features
          </a>

          <a href="#journey" className="hover:text-[#D69A8C]">
            Journey
          </a>

          <a href="#faq" className="hover:text-[#D69A8C]">
            FAQ
          </a>

        </nav>

        <Link
          to="/create"
          className="rounded-full bg-[#D69A8C] px-6 py-3 text-white transition hover:bg-[#C88576]"
        >
          Create Gift
        </Link>

      </div>
    </header>
  );
}