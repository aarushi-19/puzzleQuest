type Props = {
  currentStep: number;
};

const steps = [
  "Details",
  "Memories",
  "Puzzles",
  "Preview",
];

export default function ProgressStepper({ currentStep }: Props) {
  return (
    <div className="mb-12">

      <div className="flex items-center">

        {steps.map((step, index) => {
          const active = index + 1 === currentStep;
          const completed = index + 1 < currentStep;

          return (
            <div key={step} className="flex flex-1 items-center">

              <div
                className={`
                  flex items-center justify-center rounded-full
                  transition-all duration-300

                  ${
                    active
                      ? "h-12 w-12 bg-[#d69a8c] text-white shadow-lg scale-110"
                      : completed
                      ? "h-10 w-10 bg-[#d69a8c] text-white"
                      : "h-10 w-10 bg-[#efe8dc] text-[#9a8d80]"
                  }
                `}
              >
                {index + 1}
              </div>

              {index !== steps.length - 1 && (
                <div
                  className={`
                    h-1 flex-1

                    ${
                      completed
                        ? "bg-[#d69a8c]"
                        : "bg-[#e8e0d3]"
                    }
                  `}
                />
              )}

            </div>
          );
        })}
      </div>

      <div className="mt-4 flex justify-between text-sm font-medium text-[#7a6d61]">
        {steps.map((step) => (
          <span key={step}>{step}</span>
        ))}
      </div>

    </div>
  );
}