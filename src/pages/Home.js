import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import "../styles/Home.css"
import HomeImage from '../assets/HomeImage.png';
import Victory from '../assets/Victory.png';
import JanahEstetica from '../assets/JanahEstetica.png';
import BenficaCascaisMalveira from '../assets/BenficaCascaisMalveira.png';
import Ruche from '../assets/Ruche.png';

function Home() {
  const servicesList = [
    { title: "Identidade Visual", description: "Logotipos, paletas de cores e manuais de marca", categoria: 1 },
    { title: "Gestão de Redes", description: "Conteúdo estratégico para redes sociais", categoria: 2 },
    { title: "Captação de Imagens", description: "Fotografia e vídeo profissional", categoria: 3 },
    { title: "Edição de Fotos e Vídeos", description: "Tratamento de imagens e montagem", categoria: 4 },
    { title: "Cobertura em Tempo Real", description: "Stories, reels e lives", categoria: 5 },
    { title: "Produção Audiovisual", description: "Vídeos institucionais e comerciais", categoria: 6 },
    { title: "Design Gráfico", description: "Artes, flyers e materiais visuais", categoria: 7 }
  ];

  const [servicesIndex, setServicesIndex] = useState(0);
  const [servicesPerPage, setServicesPerPage] = useState(3);
  const carouselContainerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(0);

  const maxServicesIndex = Math.max(0, servicesList.length - servicesPerPage);

  const handlePrevServices = () => {
    setServicesIndex(prev => prev === 0 ? maxServicesIndex : prev - 1);
  };

  const handleNextServices = () => {
    setServicesIndex(prev => prev >= maxServicesIndex ? 0 : prev + 1);
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

  useEffect(() => {
    setServicesIndex(prev => Math.min(prev, Math.max(0, servicesList.length - servicesPerPage)));
  }, [servicesPerPage, servicesList.length]);

  const cardWidth = containerWidth && servicesPerPage ? containerWidth / servicesPerPage : 0;
  const shift = servicesIndex * cardWidth;

  return (
  <div className="home">

    <section className="hero">
      <div className="heroMedia">
        <img src={HomeImage} alt="" />
        <div className="heroWash" />
      </div>
      <div className="heroBloom heroBloomOne" />
      <div className="heroBloom heroBloomTwo" />
      <div className="heroInner">
        <p className="eyebrow reveal">+55 Lab · Portugal</p>
        <h1 className="reveal reveal-delay-1">A sua marca merece ser <em>vista como é</em></h1>
        <p className="heroLead reveal reveal-delay-2">Somos uma agência de comunicação que transforma a presença digital de negócios em Portugal em algo que atrai, convence e converte.</p>
        <div className="heroActions reveal reveal-delay-3">
          <a href="https://wa.me/351999888777" className="sectionLink primary">Fale connosco</a>
          <Link to="/Projetos" className="sectionLink">Ver projetos</Link>
        </div>
      </div>
      <div className="heroScroll">
        <span>deslize</span>
      </div>
    </section>

    <div className="ticker" aria-hidden="true">
      <div className="tickerTrack">
        {[0, 1].map((copy) => (
          <div className="tickerGroup" key={copy}>
            {servicesList.map((service) => (
              <span key={copy + service.title}>{service.title}</span>
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
              style={{ transform: `translateX(-${shift}px)` }}
            >
              {servicesList.map((service, index) => (
                <Link
                  key={index}
                  to={`/Servicos?categoria=${service.categoria}`}
                  className={`previewCard carousel-item ${index === servicesIndex + Math.min(1, servicesPerPage - 1) ? 'middle-card' : ''}`}
                  style={{ flex: `0 0 ${100 / servicesPerPage}%`, minWidth: `${100 / servicesPerPage}%` }}
                >
                  <span className="cardIndex">0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </Link>
              ))}
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
              { id: 13, src: Ruche, title: 'Gastronomia', category: 'Gastronomia' }
            ].map((proj) => (
              <Link key={proj.id} to={`/Projetos?categoria=${proj.id}`} className="projectCard">
                <img src={proj.src} alt={proj.title} />
                <div className="projectOverlay">
                  <p className="projectLabel">{proj.category}</p>
                  <h3 className="projectTitle">{proj.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Link to="/Projetos" className="sectionLink">Explorar todos os projetos</Link>
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
        <a href="https://wa.me/351999888777" className="sectionLink primary">Começar conversa</a>
      </div>
    </div>

  </div>
  )
}

export default Home;
