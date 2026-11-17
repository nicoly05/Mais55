import React, { useEffect} from 'react';
import { Link, useSearchParams } from 'react-router-dom';


import '../styles/Servicos.css'; 
import backgroundPreto from '../assets/backgroundPreto.JPG';
import backgroundBranco from '../assets/backgroundBranco.JPG';


function Servicos(){
  const [searchParams] = useSearchParams();
  const categoriaParam = searchParams.get('categoria');

  useEffect(() => {
    if (categoriaParam) {
      const element = document.getElementById(`servico-${categoriaParam}`);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [categoriaParam]);

  return (
    <div className="servicos">
  {/* Box 1 - Título com destaque */}
  <div className="boxTitulo">
    <h1>Os nossos <span>serviços</span></h1>
  </div>

  <div className="boxRosa" id="servico-6" style={{ backgroundImage: `url(${backgroundBranco})` }}>
    <div className="boxColuna boxTexto center">
      <h2>01. Produção Audiovisual</h2>
      <ul>
        <li><strong>Conceito e guião.</strong> Definição da ideia, da mensagem e da narrativa de cada conteúdo.</li>
        <li><strong>Captação de vídeo e fotografia.</strong> Gravação profissional, em estúdio, em espaço do cliente ou em evento.</li>
        <li><strong>Edição e pós-produção.</strong> Montagem, correção de cor, grafismo, som e legendas.</li>
        <li><strong>Formatos para cada plataforma.</strong> Reels, vídeos institucionais e promocionais, e conteúdos para eventos.</li>
      </ul>
      <Link to="/Projetos?categoria=6">
        <button className='buttonBoxRosa'>Exemplos</button>
      </Link>
    </div>
  </div>

  <div className="boxPreto" id="servico-2" style={{ backgroundImage: `url(${backgroundPreto})` }}>
    <div className="boxColuna boxTexto">
      <h2>02. Gestão de Redes Sociais</h2>
      <ul>
        <li>Planejamento de conteúdo estratégico</li>
        <li>Criação de posts criativos</li>
        <li>Legendas que conectam</li>
        <li>Agendamento e organizações</li>
      </ul>
      <Link to="/Projetos?categoria=2">
        <button className='buttonBoxPreto'>Exemplos</button>
      </Link>
    </div>
  </div>

  <div className="boxRosa" id="servico-7" style={{ backgroundImage: `url(${backgroundBranco})` }}>
    <div className="boxColuna boxTexto">
      <h2>03. Design Gráfico</h2>
      <ul>
        <li>Elaboração de grafismos</li>
        <li>Identidade visual</li>
        <li>Propostas criativas que fortalecem a sua marca</li>
      </ul>
      <Link to="/Projetos?categoria=7">
        <button className='buttonBoxRosa'>Exemplos</button>
      </Link>
    </div>
  </div>

  <div className="boxPreto" id="servico-5" style={{ backgroundImage: `url(${backgroundPreto})` }}>
    <div className="boxColuna boxTexto">
      <h2>04. Cobertura em Tempo Real</h2>
      <ul>
        <li>Stories durante o evento</li>
        <li>Reels e conteúdo dinâmico</li>
        <li>Posts atualizados no feed</li>
      </ul>
      <Link to="/Projetos?categoria=5">
        <button className='buttonBoxPreto'>Exemplos</button>
      </Link>
    </div>
  </div>

</div>

  );
};

export default Servicos;

