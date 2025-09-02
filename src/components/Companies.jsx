import { companies } from '../data/companies';

const Companies = () => {
  return (
    <section id="companies">
      <div className="container companies__container">
        {companies.map((group, index) => (
          <span key={index}>
            {group.map((logo, i) => (
              <img key={i} src={logo.src} alt={logo.alt} />
            ))}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Companies;