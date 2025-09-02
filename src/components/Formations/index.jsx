import { formations } from '../../data/formations';
import FormationCard from './FormationCard';

const Formations = () => {
  return (
    <section id="formations">
      <div className="container">
        <h2 className="formations-title">FORMATIONS</h2>
        <div className="formations-container">
          {formations.map((f) => (
            <FormationCard key={f.id} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Formations;
