import React from 'react';

function CertificateCard({ src, h3, p }) {
  return (
    <a href={src} target="_blank" rel="noopener noreferrer">
      <img className="hover" src={src} alt={`${h3} logo`} />
      <h3>{h3}</h3>
      <p>{p}</p>
    </a>
  );
}

export default CertificateCard;
