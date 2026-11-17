import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import "../styles/Home.css"
import Victory from '../assets/Victory.png';
import JanahEstetica from '../assets/JanahEstetica.png';
import BenficaCascaisMalveira from '../assets/BenficaCascaisMalveira.png';
import Ruche from '../assets/Ruche.png';
import JulitaImoveis from '../assets/JulitaImoveis.jpeg';

const brandLogoContext = require.context('../assets/brands', false, /\.png$/);
const brandAltByFile = {
  'ana_ferreira_hair_logo_completo_branco.png': 'Ana Ferreira Hair',
  'bailo_branco.png': 'Bailo',
  'cafe_gelo_rossio_branco.png': 'Café Gelo Rossio',
  'cafe_portugal_branco.png': 'Café Portugal',
  'ds_football_foundation_branco.png': 'DS Football Foundation',
  'escola_benfica_cascais_branco.png': 'Escola Benfica Cascais',
  'fiore_ditalia_branco.png': "Fiore d'Italia",
  'gelo_augusta_branco.png': 'Gelo Augusta',
  'ginasio_100_branco.png': 'Academia 100',
  'grupo_desportivo_barril_branco.png': 'Grupo Desportivo Barril',
  'julita_lima_branco.png': 'Julita Lima',
  'maria_lidiane_beauty_branco.png': 'Maria Lidiane Beauty',
  'mova_pilates_branco.png': 'Mova Pilates',
  'ouro_my_story_hotels_branco.png': 'Ouro My Story Hotels',
  'skechers_branco.png': 'Skechers',
  'taverna_do_pescador_branco.png': 'Taverna do Pescador',
  'top_player_branco.png': 'Top Player',
  'tribx_branco.png': 'TribX',
  'victory_branco.png': 'Victory',
  'vila_dias_branco.png': 'Vila Dias',
  'villa_di_roma_branco.png': 'Villa di Roma',
  'visionhammer_branco.png': 'Visionhammer',
  'vitelli_branco.png': 'Vitelli',
  'wrestlefest_branco.png': 'Wrestlefest',
};
const brandLogos = brandLogoContext.keys().sort().map((key) => {
  const file = key.replace('./', '');
  return { src: brandLogoContext(key), alt: brandAltByFile[file] || file };
});

function SoundIcon({ muted }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M4 9.5h3.2L12 5.8v12.4l-4.8-3.7H4v-5z" />
      {muted ? (
        <path d="M16 9.2l5 5m0-5l-5 5" />
      ) : (
        <path d="M16 9.2a3.6 3.6 0 010 5.6M18.4 7a6.4 6.4 0 010 10" />
      )}
    </svg>
  );
}

function Home() {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const servicesList = [
    { title: "Identidade Visual", description: "Logotipos, paletas de cores e manuais de marca", categoria: 1 },
    { title: "Gestão de Redes", description: "Conteúdo estratégico para redes sociais", categoria: 2 },
    { title: "Captação de Imagens", description: "Fotografia e vídeo profissional", categoria: 3 },
    { title: "Edição de Fotos e Vídeos", description: "Tratamento de imagens e montagem", categoria: 4 },
    { title: "Cobertura em Tempo Real", description: "Stories, reels e lives", categoria: 5 },
    { title: "Produção Audiovisual", description: "Vídeos institucionais e comerciais", categoria: 6 },
    { title: "Design Gráfico", description: "Artes, flyers e materiais visuais", categoria: 7 }
  ];

  const [servicesIndex, setServicesIndex] = useState(servicesList.length * 3);
  const [servicesPerPage, setServicesPerPage] = useState(3);
  const [servicesTransitionEnabled, setServicesTransitionEnabled] = useState(true);
  const carouselContainerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const handlePrevServices = () => {
    setServicesIndex(prev => prev - 1);
  };

  const handleNextServices = () => {
    setServicesIndex(prev => prev + 1);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;
    video.muted = true;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const syncPlayback = () => {
      if (motion.matches) {
        video.pause();
        return;
      }
      const attempt = video.play();
      if (attempt && typeof attempt.catch === 'function') {
        attempt.catch(() => {});
      }
    };
    syncPlayback();
    motion.addEventListener('change', syncPlayback);
    return () => motion.removeEventListener('change', syncPlayback);
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setMuted(nextMuted);
    if (!nextMuted && video.paused) {
      const attempt = video.play();
      if (attempt && typeof attempt.catch === 'function') {
        attempt.catch(() => {});
      }
    }
  };

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      setServicesPerPage(w < 1024 ? 1 : 3);
      if (carouselContainerRef.current) {
        setContainerWidth(carouselContainerRef.current.clientWidth);
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const cardWidth = containerWidth && servicesPerPage ? containerWidth / servicesPerPage : 0;
  const centerOffset = Math.floor((servicesPerPage - 1) / 2);
  const shift = (servicesIndex - centerOffset) * cardWidth;

  const handleServicesTransitionEnd = (event) => {
    if (event.propertyName !== 'transform') return;

    const cycleLength = servicesList.length;
    const lowerLoopBoundary = cycleLength * 3;
    const upperLoopBoundary = cycleLength * 4;
    let normalizedIndex = servicesIndex;

    if (servicesIndex < lowerLoopBoundary) {
      normalizedIndex += cycleLength;
    } else if (servicesIndex >= upperLoopBoundary) {
      normalizedIndex -= cycleLength;
    } else {
      return;
    }

    setServicesTransitionEnabled(false);
    setServicesIndex(normalizedIndex);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setServicesTransitionEnabled(true));
    });
  };

  return (
  <div className="home">

    <section className="hero" aria-label="Vídeo">
      <div className="heroMedia">
        <video
          ref={videoRef}
          className="heroVideo"
          src="/home-video.mp4"
          poster="/home-video-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>
    </section>

    <section className="heroIntro" aria-labelledby="hero-intro-title">
      <h1 id="hero-intro-title">Comunicação digital</h1>
      <p>Estratégia e conteúdo para marcas em Portugal.</p>
      <div className="heroActions">
        <Link to="/Projetos" className="sectionLink">Conhecer projetos</Link>
        <Link to="/Contactos" className="sectionLink primary">Fale connosco</Link>
        <button
          type="button"
          className={`heroSound ${muted ? '' : 'isOn'}`}
          onClick={toggleSound}
          aria-pressed={!muted}
          aria-label={muted ? 'Ativar som do vídeo' : 'Silenciar vídeo'}
        >
          <SoundIcon muted={muted} />
        </button>
      </div>
    </section>

    <div className="ticker brandTicker" aria-label="Marcas">
      <div className="tickerTrack brandTickerTrack">
        {[0, 1].map((copy) => (
          <div className="tickerGroup brandTickerGroup" key={copy} aria-hidden={copy === 1 ? 'true' : undefined}>
            {brandLogos.map((logo) => (
              <img key={`${copy}-${logo.alt}`} src={logo.src} alt={copy === 0 ? logo.alt : ''} />
            ))}
          </div>
        ))}
      </div>
    </div>

    <div className="statsBar">
      <div className="stat">
        <strong>07</strong>
        <span>serviços criativos</span>
      </div>
      <div className="stat">
        <strong>04</strong>
        <span>vertentes de projetos</span>
      </div>
      <div className="stat">
        <strong>5★</strong>
        <span>confiança no Google</span>
      </div>
    </div>

    <section className="sectionContainer teamBand" aria-labelledby="team-band-title">
      <div className="sectionContent">
        <h2 id="team-band-title">Uma equipa dedicada a cada marca.</h2>
        <p>Fundada em 2020 por duas sócias com formação em Ciências da Comunicação, a +55 lab conta hoje com uma equipa de mais de seis colaboradores. Trabalha com marcas e entidades das áreas da restauração, desporto e eventos. Cada projeto parte de uma estratégia definida e é acompanhado de perto até à entrega final.</p>
        <Link to="/SobreNos" className="sectionLink">Conhecer a equipa →</Link>
      </div>
    </section>

    <div className="sectionContainer projectsSection">
      <div className="sectionContent">
        <p className="eyebrow">O que fazemos</p>
        <h2>Os Nossos Serviços</h2>
        <p className="sectionDescription">Do conceito à imagem, um laboratório criativo para marcas que querem ser reconhecidas.</p>
        <div className="services-carousel">
          <button className="carousel-arrow left" onClick={handlePrevServices} aria-label="Serviço anterior">←</button>

          <div className="services-carousel-container" ref={carouselContainerRef}>
            <div
              className="services-carousel-track"
              onTransitionEnd={handleServicesTransitionEnd}
              style={{
                transform: `translateX(-${shift}px)`,
                transition: servicesTransitionEnabled ? undefined : 'none'
              }}
            >
              {Array.from({ length: servicesList.length * 7 }, (_, index) => {
                const service = servicesList[index % servicesList.length];
                return (
                <Link
                  key={`${index}-${service.categoria}`}
                  to={`/Servicos?categoria=${service.categoria}`}
                  className={`previewCard carousel-item ${index === servicesIndex ? 'middle-card' : ''}`}
                  style={{ flex: `0 0 ${100 / servicesPerPage}%`, minWidth: `${100 / servicesPerPage}%` }}
                >
                  <span className="cardIndex">0{service.categoria}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </Link>
                );
              })}
            </div>
          </div>

          <button className="carousel-arrow right" onClick={handleNextServices} aria-label="Próximo serviço">→</button>
        </div>
        <Link to="/Servicos?categoria=1" className="sectionLink">Ver todos os serviços</Link>
      </div>
    </div>

    <div className="signatureBand">
      <p className="eyebrow">Assinatura</p>
      <blockquote>Imaginação encontra estratégia.</blockquote>
      <span>+55 Lab</span>
    </div>

    <div className="sectionContainer servicesSection">
      <div className="sectionContent">
        <p className="eyebrow">Portfólio</p>
        <h2>Os Nossos Projetos</h2>
        <p className="sectionDescription">Marcas de estética, desporto, eventos e gastronomia — cada uma com a sua voz.</p>

        <div className="projectsGridWrapper">
          <div className="projectGrid">
            {[
              { id: 10, src: Victory, title: 'Eventos', category: 'Eventos' },
              { id: 11, src: JanahEstetica, title: 'Estética e Moda', category: 'Estética & Moda' },
              { id: 12, src: BenficaCascaisMalveira, title: 'Desporto', category: 'Desporto' },
              { id: 13, src: Ruche, title: 'Gastronomia', category: 'Gastronomia' },
              { id: 'julita', src: JulitaImoveis, title: 'Imobiliário / Alojamento', category: '', to: '/Projetos?categoria=12' }
            ].map((proj) => (
              <Link key={proj.id} to={proj.to || `/Projetos?categoria=${proj.id}`} className="projectCard">
                <img src={proj.src} alt={proj.title} />
                <div className="projectOverlay">
                  {proj.category ? <p className="projectLabel">{proj.category}</p> : null}
                  <h3 className="projectTitle">{proj.title}</h3>
                </div>
              </Link>
            ))}
            <Link to="/Projetos?filtro=todos" className="projectCard projectCardCta">
              Ver todos os projetos
            </Link>
          </div>
        </div>
      </div>
    </div>

    <div className="sectionContainer reviewsSection">
      <div className="sectionContent">
        <p className="eyebrow">Clientes</p>
        <h2>Avaliações</h2>
        <p className="sectionDescription">O que as marcas dizem sobre trabalhar connosco.</p>

        <div className="reviewsList">
          {[
            {
              author: 'Nelson Pereira',
              rating: 5,
              excerpt: 'Tive a oportunidade de trabalhar com o +55 Lab no meu projeto Portugal Wrestlefest e cinco estrelas na verdade não é suficiente para avaliar o profissionalismo e a qualidade do trabalho fornecido. Pontuais, Incansáveis e prestaveis. Não há melhor.',
              url: 'https://maps.app.goo.gl/hohZUud4t4Yt5FBY6'
            },
            {
              author: 'Victory Way To Win',
              rating: 5,
              excerpt: 'O trabalho que fazem é de excelência. A sensibilidade que tem para se enquadrar em cada situação que lhes é proposta permite fazerem um trabalho diferenciado, de proximidade e sempre adequado à realidade que encontram.',
              url: 'https://maps.app.goo.gl/6tW6RdMdFXm51HEFA'
            },
            {
              author: 'Janah Cardoso',
              rating: 5,
              excerpt: 'As meninas são excelentes profissionais. Começamos como parceria e desde então aprovei o trabalho delas e hoje sou uma cliente muito satisfeita e indico pra quem eu gosto',
              url: 'https://maps.app.goo.gl/HTPhbuWWVqvCm6kw7'
            }
          ].map((review, i) => (
            <a key={i} href={review.url} target="_blank" rel="noopener noreferrer" className="reviewCard">
              <span className="reviewMark">“</span>
              <div className="reviewHeader">
                <strong>{review.author}</strong>
                <span className="reviewRating">{'★'.repeat(review.rating)}</span>
              </div>
              <p className="reviewExcerpt">{review.excerpt}</p>
            </a>
          ))}
        </div>

        <div className="reviewActions">
          <a className="writeReviewBtn" href="https://maps.app.goo.gl/52FyPSByYU2snACS6" target="_blank" rel="noopener noreferrer">Deixar uma avaliação</a>
        </div>
      </div>
    </div>

    <div className="sectionContainer contactSection finale">
      <div className="finaleBloom" />
      <div className="sectionContent">
        <p className="eyebrow">Próximo passo</p>
        <h2>Pronto para transformar a sua comunicação?</h2>
        <p className="sectionDescription">Vamos trabalhar juntas para elevar a sua marca — com estética, estratégia e presença.</p>
        <a href="https://wa.me/351915546801" className="sectionLink primary">Começar conversa</a>
      </div>
    </div>

  </div>
  )
}

export default Home;
