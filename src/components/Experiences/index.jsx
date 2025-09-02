import { experiences } from '../../data/experiences';
import ExperienceCard from './ExperienceCard';

const Experiences = () => {
  return (
    <section id="experiences">
      <div className="container">
        <h2 className="experiences-title">EXPÉRIENCES PROFESSIONNELLES</h2>
        <div className="experiences-container">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
