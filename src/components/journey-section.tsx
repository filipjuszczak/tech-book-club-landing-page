export function JourneySection() {
  return (
    <section
      className="journey-section px-4 md:px-8 xl:px-20 py-16 xl:py-20 rounded-xl"
      aria-labelledby="journey-heading"
    >
      <h2
        id="journey-heading"
        className="text-preset-2 text-neutral-900 text-balance mb-8 md:mb-12 xl:mb-16 xl:text-center"
      >
        Your tech reading journey
      </h2>
      <Steps />
    </section>
  );
}

function Steps() {
  return (
    <ol className="grid gap-8 xl:gap-12 xl:grid-cols-4 text-preset-6 text-neutral-900">
      <li className="step relative flex flex-col gap-5">
        <StepNumber number={1} />
        <span>Choose your membership tier</span>
      </li>
      <li className="step relative flex flex-col gap-5">
        <StepNumber number={2} />
        Get your monthly book selection
      </li>
      <li className="step relative flex flex-col gap-5">
        <StepNumber number={3} />
        Join our discussion forums
      </li>
      <li className="step relative flex flex-col gap-5">
        <StepNumber number={4} />
        Attend exclusive meetups
      </li>
    </ol>
  );
}

function StepNumber({ number }: { number: number }) {
  return (
    <div
      className="size-8 md:size-10 flex items-center justify-center border-2 border-neutral-900 rounded-sm leading-0 tracking-normal"
      aria-label={`Step ${number}`}
    >
      {number}
    </div>
  );
}
