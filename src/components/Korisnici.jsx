import React, { useState, useEffect  } from 'react';

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
  { src: '/images/ratel.png', link: 'https://www.ratel.rs/' },
  { src: '/images/rtcg.png', link: 'https://rtcg.me/' },
  { src: '/images/dan.png', link: 'https://www.dan.co.me/' },
  { src: '/images/zeleznice.svg', link: 'https://www.zeleznicesrbije.com/' },
  { src: '/images/nis.png', link: 'https://www.nis.rs/' },
  { src: '/images/tigar.png', link: 'https://passenger-car.tigar-tyres.com/' },
  { src: '/images/pink.png', link: 'https://www.pink.rs/' },
  { src: '/images/kurir.png', link: 'https://www.kurir.rs/' },
  { src: '/images/sudska.png', link: 'https://www.sudmednis.rs/' },
  { src: '/images/ipbv.png', link: 'https://www.ipb-ild.edu.rs/' },
  { src: '/images/mag.png', link: 'https://www.mag-medica.rs/' },
  { src: '/images/raiffeisen.svg', link: 'https://www.raiffeisenbank.rs/' },
  { src: '/images/uni.png', link: 'https://www.unicreditbank.rs/' },
  { src: '/images/zmns.png', link: 'https://zenskimuzejns.org.rs/' },
  { src: '/images/uniqa.svg', link: 'https://www.uniqa.rs/' },
  { src: '/images/ems.png', link: 'https://ems.rs/' },
  { src: '/images/nszz.png', link: 'https://www.nsz.gov.rs/' },
];
  


const Korisnici = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [paused, setPaused] = useState(false);
  const repeatedLogos = isMobile ? logos : [...logos, ...logos];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    handleResize(); // postavi pri učitavanju
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="carousel-wrapper">
      <div
        className="carousel-container"
        style={{
          animationPlayState: paused || isMobile ? 'paused' : 'running',
          overflowX: isMobile ? 'auto' : 'hidden',
          WebkitOverflowScrolling: isMobile ? 'touch' : 'auto',
        }}
      >
        {repeatedLogos.map((logo, index) => (
          <a
            key={index}
            href={logo.link}
            target="_blank"
            rel="noopener noreferrer"
            className="logoKorisnik-link"
            onMouseEnter={() => !isMobile && setPaused(true)}
            onMouseLeave={() => !isMobile && setPaused(false)}
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