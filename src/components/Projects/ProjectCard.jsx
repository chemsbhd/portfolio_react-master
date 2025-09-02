import { useState } from 'react';
import Modal from './Modal';

const ProjectCard = ({ title, image, github, live, note, stack }) => {
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => {
    window.open(image, '_blank');
  };

  return (
    <article className="portfolio__project">
      <span
        className="portfolio__project-image"
        onClick={handleImageClick}
        style={{ cursor: 'zoom-in' }}
      >
        <img src={image} alt={title} />
      </span>
      <div className="portfolio__cta">
        {github && (
          <a href={github} className="btn" target="_blank" rel="noreferrer">
            Github
          </a>
        )}
        {note && (
          <a className="btn" onClick={() => setShowModal(true)}>
            Notes
          </a>
        )}
        {live && (
          <a href={live} className="btn" target="_blank" rel="noreferrer">
            Lien <i className="uil uil-external-link-alt"></i>
          </a>
        )}
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        content={note}
        title={title}
        stack={stack}
      />
    </article>
  );
};

export default ProjectCard;
