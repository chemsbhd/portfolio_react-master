const FormationCard = ({ titre, ecole, lieu, date, status }) => {
  const iconClass = status === 'Validé' ? 'uil uil-check-circle' : 'uil uil-history';
  const cardClass = status === 'Validé' ? 'formation-card validated' : 'formation-card in-progress';

  return (
    <div className={cardClass}>
      <h3>{titre}</h3>
      <h4>
        {ecole} – {lieu}
      </h4>
      <p className="formation-date">{date}</p>
      <div className="formation-status">
        <i className={iconClass}></i>
        <span>{status}</span>
      </div>
    </div>
  );
};
export default FormationCard;
