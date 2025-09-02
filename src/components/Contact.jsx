const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="container contact__container">
          <div className="contact__left">
            <h2>CONTACT</h2>
            <p>
              Restons en contact ! Retrouvez-moi sur LinkedIn, GitHub, ou contactez-moi par email et
              par téléphone.
            </p>
            <ul className="contact__socials">
              <li>
                <a href="https://github.com/chemsbhd" target="_blank" rel="noreferrer">
                  <i className="uil uil-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/chemsedine-b-94372926a/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="uil uil-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="mailto:chemsedine.benhaddou@gmail.com" target="_blank" rel="noreferrer">
                  <i className="uil uil-post-stamp"></i>
                </a>
              </li>
              <li>
                <a href="tel:+33695946035" target="_blank" rel="noreferrer">
                  <i className="uil uil-phone"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <footer>
        <small> Chemsedine BENHADDOU © 2025 Tous droits réservés.</small>
      </footer>
    </>
  );
};

export default Contact;
