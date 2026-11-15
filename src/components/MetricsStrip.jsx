import EngineeringMetrics from "./EngineeringMetrics";
import Reveal from "./Reveal";

function MetricsStrip() {
  return (
    <Reveal>
      <section
        className="
          relative
          px-6 md:px-10 py-16
          bg-zinc-50 dark:bg-zinc-950
          transition-colors duration-300
        "
      >
        <div className="max-w-2xl mx-auto">
          <EngineeringMetrics variant="compact" />
        </div>
      </section>
    </Reveal>
  );
}

export default MetricsStrip;
