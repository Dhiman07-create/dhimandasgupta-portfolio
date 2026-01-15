import { useParams } from "react-router-dom";

function ProjectDetail() {
  const { id } = useParams();

  return (
    <section className="px-10 py-20 bg-slate-900 text-gray-100">
      <h1 className="text-4xl font-bold mb-6">{id}</h1>

      <p className="max-w-3xl text-lg leading-relaxed">
        Detailed explanation of the problem, approach, tech stack,
        CI/CD setup, challenges, and learnings.
      </p>
    </section>
  );
}

export default ProjectDetail;
