const ExperienceCard = ({
  poste,
  contrat,
  lieu,
  date,
  entreprise,
  description,
  technos,
  rapport,
}) => {
  return (
    <div className="experience-card">
      <h3>
        {poste} <span>({contrat})</span>
      </h3>
      <h4>
        {entreprise} - {lieu}
      </h4>
      <p className="experience-date">{date}</p>
      <ul className="experience-description">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {technos && (
        <div className="experience-technos">
          {technos.map((src, i) => (
            <img key={i} src={src} alt="tech logo" />
          ))}
        </div>
      )}

      {rapport && (
        <a
          href={rapport}
          className="btn btn-primary experience-btn"
          target="_blank"
          rel="noreferrer"
        >
          Voir le rapport <i className="uil uil-external-link-alt"></i>
        </a>
      )}
    </div>
  );
};

export default ExperienceCard;
