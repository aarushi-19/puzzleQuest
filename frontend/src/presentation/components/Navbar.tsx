import { Link } from "react-router-dom";
import Container from "./ui/Container";

export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 right-0 z-50">
      <Container>
        <nav
          className="
            mx-auto
            max-w-[1180px]
            h-[72px]

            flex
            items-center
            justify-between

            rounded-full

            bg-white/95
            backdrop-blur-md

            px-10

            shadow-[0_12px_35px_rgba(0,0,0,.08)]
          "
        >
          {/* Logo */}

          <Link
            to="/"
            style={{ fontFamily: "'Playfair Display', serif" }}
            className="
              text-[34px]
              font-semibold
              text-[#433B32]
              tracking-tight
            "
          >
            PuzzleQuest
          </Link>

          {/* Navigation */}

          <div className="hidden lg:flex items-center gap-12">
            <a
              href="#features"
              className="text-[17px] text-[#4E463F] hover:text-[#7D9B7A] transition"
            >
              Features
            </a>

            <a
              href="#journey"
              className="text-[17px] text-[#4E463F] hover:text-[#7D9B7A] transition"
            >
              Journey
            </a>

            <a
              href="#faq"
              className="text-[17px] text-[#4E463F] hover:text-[#7D9B7A] transition"
            >
              FAQ
            </a>
          </div>

          {/* Button */}

          <Link
            to="/create"
            className="
              rounded-full

              bg-[#D89A89]

              px-8
              py-3

              text-[16px]
              font-semibold
              text-white

              transition
              hover:bg-[#C88776]
            "
          >
            Create Gift
          </Link>
        </nav>
      </Container>
    </header>
  );
}