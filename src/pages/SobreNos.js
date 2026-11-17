import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/SobreNos.css';
import Socias from '../assets/socias.jpg';
import Glaucia from '../assets/glaucia-web.jpg';
import Julita from '../assets/julita-web.jpg';

function useCountUp(target, active, duration) {
  const reduceMotion = typeof window !== 'undefined'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [value, setValue] = useState(reduceMotion ? target : 0);

  useEffect(() => {
    if (!active || reduceMotion) {
      if (reduceMotion) setValue(target);
      return undefined;
    }
    let frame;
    const started = performance.now();
    const tick = (now) => {
      const progress = Math.min(1, (now - started) / duration);
      const eased = 1 - (1 - progress) ** 3;
      setValue(Math.round(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, duration, reduceMotion, target]);

  return value;
}

const principles = [
  {
    title: 'Estratégia em primeiro lugar.',
    text: 'Antes de criar, definimos o objetivo. A estratégia determina o formato, o tom de comunicação e o calendário.',
  },
  {
    title: 'Resultados mensuráveis.',
    text: 'Selecionamos indicadores relevantes para o negócio de cada cliente e analisamo-los mensalmente.',
  },
  {
    title: 'Relações duradouras.',
    text: 'Trabalhamos com um número limitado de clientes em simultâneo, de modo a conhecer em profundidade cada marca.',
  },
  {
    title: 'Posicionamento claro.',
    text: 'Cada conteúdo transmite uma mensagem concreta. É essa clareza que torna uma marca memorável.',
  },
];

function SobreNos() {
  const numbersRef = useRef(null);
  const [numbersVisible, setNumbersVisible] = useState(false);
  const brands = useCountUp(20, numbersVisible, 1170);

  useEffect(() => {
    const node = numbersRef.current;
    if (!node) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setNumbersVisible(true);
      return undefined;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setNumbersVisible(true);
      observer.disconnect();
    }, { threshold: 0.4 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="sobreNos">
      <header className="sobreHero">
        <p className="eyebrow">Sobre nós</p>
        <h1>Duas sócias, uma agência e uma abordagem própria à comunicação.</h1>
        <img className="sociasPhoto" src={Socias} alt="Glaucia Feitosa e Julita Giovanna Feitosa" />
      </header>

      <section className="sobreSection" aria-labelledby="origem-title">
        <h2 id="origem-title">A nossa origem</h2>
        <p>A +55 lab foi fundada em 2020 por Glaucia Feitosa e Julita Giovanna Feitosa, irmãs com formação em Ciências da Comunicação. O nome remete para o indicativo telefónico do Brasil, o ponto de partida da agência. A atividade dirige-se integralmente ao mercado português.</p>
        <p>Desde então, a +55 lab acompanhou mais de 20 marcas das áreas da restauração, desporto e eventos. Cada projeto contribuiu para aperfeiçoar os nossos processos e a qualidade do serviço prestado.</p>
        <p>Hoje, a +55 lab reúne as duas sócias e mais de seis colaboradores. Mantemos um número limitado de clientes em simultâneo, o que nos permite assegurar dedicação e consistência em cada projeto.</p>
      </section>

      <section className="sobreSection" aria-labelledby="principios-title">
        <h2 id="principios-title">Os nossos princípios</h2>
        <ol className="principles">
          {principles.map((item, index) => (
            <li key={item.title}>
              <span className="principleIndex">{index + 1}</span>
              <p><strong>{item.title}</strong> {item.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="sobreSection" aria-labelledby="equipa-title">
        <h2 id="equipa-title">A equipa</h2>
        <div className="founders">
          <article>
            <img className="founderPhoto founderPhotoGlaucia" src={Glaucia} alt="Glaucia Feitosa" />
            <h3>Glaucia Feitosa</h3>
            <p>cofundadora.</p>
          </article>
          <article>
            <img className="founderPhoto founderPhotoJulita" src={Julita} alt="Julita Giovanna Feitosa" />
            <h3>Julita Giovanna Feitosa</h3>
            <p>cofundadora.</p>
          </article>
        </div>
      </section>

      <section className="sobreSection" aria-labelledby="numeros-title" ref={numbersRef}>
        <h2 id="numeros-title">A +55 lab em números</h2>
        <div className="statCards">
          <article className="statCard" aria-label="Desde 2020 em Portugal">
            <p className="statKicker">Desde</p>
            <p className="statFigure" aria-hidden="true">2020</p>
            <p className="statCaption">em Portugal</p>
          </article>
          <article className="statCard" aria-label="+20 marcas acompanhadas">
            <p className="statFigure" aria-hidden="true">+{brands}</p>
            <p className="statCaption">marcas acompanhadas</p>
          </article>
          <article className="statCard" aria-label="4 serviços especializados">
            <p className="statFigure statFigureCompact" aria-hidden="true">4</p>
            <p className="statCaption">serviços especializados</p>
          </article>
        </div>
      </section>

      <section className="sobreCta">
        <Link to="/Contactos" className="sobreButton">Trabalhe connosco!</Link>
      </section>
    </div>
  );
}

export default SobreNos;
