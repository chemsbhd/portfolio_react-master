const Accueil = () => {
  return (
    <header id="accueil">
      <div className="container header__container">
        <div className="header__left">
          <div className="header__left_div">
            <h1><span>BENHADDOU</span> <span>Chemsedine</span></h1>
            <p>
              Titulaire d'un BUT Informatique spécialisé dans le développement d'applications, <br />
              je suis toujours à la recherche de nouvelles opportunités pour améliorer mes compétences.
            </p>
          </div>
        </div>
        <div className="header__right">
          <div className="header__right-bg"></div>
        </div>
      </div>
    </header>
  );
};

export default Accueil;