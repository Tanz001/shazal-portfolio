export default function ScrollProgress() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] h-[2.5px] pointer-events-none"
      aria-hidden="true"
    >
      <div className="scroll-progress h-full w-full bg-accent shadow-[0_0_16px_rgba(255,92,57,0.55)]" />
    </div>
  );
}
