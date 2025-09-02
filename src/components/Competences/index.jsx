import { competences } from '../../data/competences';
import CompetenceCard from './CompetenceCard';

const Competences = () => {
  return (
    <section id="competences">
      <div className="container">
        <h2 className="competences_head">COMPÉTENCES TECHNIQUES</h2>
        <div className="competences-container">
          {competences.map((comp) => (
            <CompetenceCard key={comp.id} {...comp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competences;