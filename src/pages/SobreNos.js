import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SobreNos.css';
import GlauciaJulita from '../assets/GlauciaJulita.png';

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

const stats = [
  'Desde 2020 em Portugal',
  '+20 marcas acompanhadas',
  '3 serviços especializados',
];

function SobreNos() {
  return (
    <div className="sobreNos">
      <header className="sobreHero">
        <p className="eyebrow">Sobre nós</p>
        <h1>Duas sócias, uma agência e uma abordagem própria à comunicação.</h1>
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
        <img src={GlauciaJulita} alt="Glaucia Feitosa e Julita Giovanna Feitosa" />
        <ul className="founders">
          <li>Glaucia Feitosa, cofundadora.</li>
          <li>Julita Giovanna Feitosa, cofundadora.</li>
        </ul>
      </section>

      <section className="sobreSection" aria-labelledby="numeros-title">
        <h2 id="numeros-title">A +55 lab em números</h2>
        <div className="statCards">
          {stats.map((stat) => (
            <article className="statCard" key={stat}>
              <p>{stat}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="sobreCta" aria-labelledby="sobre-cta-title">
        <h2 id="sobre-cta-title">Pretende trabalhar connosco?</h2>
        <Link to="/Contactos" className="sobreButton">Contactar →</Link>
      </section>
    </div>
  );
}

export default SobreNos;
