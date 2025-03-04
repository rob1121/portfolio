import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/constant/projects";

const Projects: React.FC = () => {
  return (
    <section className="w-full flex flex-col items-center gap-6" id="projects">
      <div className="w-full">
        <h2 className="text-7xl font-bold">My Projects</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-between">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
