import React from 'react';

const Modal = ({ isOpen, onClose, content, title, stack }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <h3>{title}</h3>
        <p>{content}</p>

        {stack && stack.length > 0 && (
          <div className="modal-stack">
            <div className="stack-list">
              {stack.map((tech, index) => (
                <img key={index} src={tech} alt="tech logo" className="stack-logo" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
