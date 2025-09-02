const CompetenceCard = ({ name, img }) => {
  return (
    <div className="competence-item">
      <img src={img} alt={`${name} icon`} />
      <p className="competence-name">{name}</p>
    </div>
  );
};

export default CompetenceCard;
