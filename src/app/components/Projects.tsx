import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/constant/projects";

const Projects: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center gap-6" id="projects">
      <div className="w-full">
        <h3 className="text-gray-500">What I have built</h3>
        <h2 className="text-6xl font-bold">Projects</h2>
      </div>
      <div className="flex flex-wrap gap-8 justify-between">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
