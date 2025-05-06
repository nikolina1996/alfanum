import React from 'react';
import { Link } from 'react-router-dom'; 

const Proizvod = ({ image, text, link }) => {
  return (
    <div className="proizvod">
        <div className="proizvodSlika">
        <Link to={link}>
            <img src={image} alt="Proizvod Image" className="slikaProizvoda" />
        </Link>
        </div>
        <div className="proizvodTekst">
            <p>{text}</p>
            <h5>
              <Link to={link}>Saznaj više</Link> {/* Dodajemo link */}
            </h5>
        </div>
    </div>
  );
};

export default Proizvod;
