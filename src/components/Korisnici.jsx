import React, { useState } from 'react';

const logos = [
  { src: '/images/rts.svg', link: 'https://www.rts.rs/sr/index.html' },
  { src: '/images/rtv2.png', link: 'https://www.rtv.rs/' },
  { src: '/images/vladaRepublikeSrbije.png', link: 'https://www.srbija.gov.rs/' },
  { src: '/images/poverenik.png', link: 'https://www.srbija.gov.rs/' },
  { src: '/images/ministarstvoProsvete.png', link: 'https://www.srbija.gov.rs/' },
  { src: '/images/mts.svg', link: 'https://mts.rs/' },
  { src: '/images/pio.svg', link: 'https://www.pio.rs/' },
  { src: '/images/euprava2.png', link: 'https://euprava.gov.rs/' },
  { src: '/images/crveni.png', link: 'http://www.crvenitaxi.co.rs/' },
];

const Korisnici = () => {
  const [paused, setPaused] = useState(false);
  const repeatedLogos = Array(10).fill(logos).flat();

  return (
    <div className="carousel-wrapper">
      <div
        className="carousel-container"
        style={{ animationPlayState: paused ? 'paused' : 'running' }} 
      >
        {repeatedLogos.map((logo, index) => (
          <a
            key={index}
            href={logo.link}
            target="_blank"
            rel="noopener noreferrer"
            className="logoKorisnik-link"
            onMouseEnter={() => setPaused(true)}  
            onMouseLeave={() => setPaused(false)}  
          >
            <img
              src={logo.src}
              alt={`Logo ${index}`}
              className="logoKorisnik"
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Korisnici;
