import { projects } from '../../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <section id="portfolio">
      <div className="container portfolio__container">
        <div className="portfolio__head">
          <h2>PROJETS RÉALISÉS</h2>
        </div>
        <div className="portfolio__projects">
          {projects.map((proj) => (
            <ProjectCard key={proj.id} {...proj} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;