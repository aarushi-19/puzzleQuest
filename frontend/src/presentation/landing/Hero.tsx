import { Link } from "react-router-dom";
import Container from "../components/ui/Container";

export default function Hero() {
  return (
    <section className="pt-40 pb-28">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">

          {/* Badge */}

          <div
            className="
              inline-flex
              items-center
              rounded-full
px-9
py-3.5
              border
              border-[#D8D0C5]
              bg-white
              px-5
              py-2
              shadow-sm
            "
          >
            <span className="mr-2 text-[#F3B548]">✨</span>

            <span className="text-[14px] font-medium text-[#8B7258]">
              Create unforgettable memories
            </span>
          </div>

          {/* Heading */}

          <h1
            className="mt-8 text-[64px] font-semibold tracking-tight text-[#433B32]"
            style={{ fontFamily: "'Playfair Display', serif" }}
         >
            PuzzleQuest
          </h1>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-10
              max-w-[560px]
              text-[20px]
              leading-9
              text-[#665F57]
          "
          >
            Transform your favourite memories into beautiful interactive
            puzzle journeys that reveal photographs, stories and heartfelt
            messages one piece at a time.
          </p>

          {/* CTA */}

          <Link
            to="/create"
            className="
              mt-12
              inline-flex
              items-center
              justify-center

              rounded-full
              px-9
              py-3.5

              bg-[#D99786]

              px-8
              py-3

              text-[18px]
              font-semibold
              text-white

              shadow-[0_10px_25px_rgba(217,151,134,.30)]

              transition-all
              duration-300

              hover:bg-[#C98776]
              hover:-translate-y-0.5
            "
          >
            Create Your Gift →
          </Link>

        </div>
      </Container>
    </section>
  );
}