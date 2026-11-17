import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import '../styles/Projetos.css';

const brandLogos = require.context('../assets/brands', false, /_branco\.png$/);
const logoFileById = {
  1: 'wrestlefest_branco.png',
  3: 'escola_benfica_cascais_branco.png',
  5: 'victory_branco.png',
  7: 'cafe_portugal_branco.png',
  8: 'cafe_gelo_rossio_branco.png',
  9: 'taverna_do_pescador_branco.png',
  10: 'villa_di_roma_branco.png',
  11: 'gelo_augusta_branco.png',
  12: 'ouro_my_story_hotels_branco.png',
  14: 'ginasio_100_branco.png',
  15: 'ana_ferreira_hair_logo_completo_branco.png',
  16: 'julita_lima_branco.png',
  17: 'bailo_branco.png',
  18: 'tribx_branco.png',
  19: 'vila_dias_branco.png',
  21: 'top_player_branco.png',
  22: 'grupo_desportivo_barril_branco.png',
  24: 'ds_football_foundation_branco.png',
  25: 'maria_lidiane_beauty_branco.png',
  26: 'skechers_branco.png',
};


const imagens = [
  { 
    id: 1, 
    categoria: [1, 2, 3, 4, 5, 6, 7, 8], 
    titulo: "WrestleFest", 
    legenda: "Identidade Visual, Gestão de Redes, Captação e Edição de Fotos e Vídeos, Cobertura em tempo real, Produção Audiovisual, Design Gráfico e Eventos",
    descricao: "Desenvolvimento de identidade visual, gestão de redes sociais, captação e edição de fotos e vídeos, cobertura em tempo real, produção audiovisual, design gráfico e eventos para WrestleFest"
  },
  { 
    id: 2, 
    categoria: [3, 4, 9], 
    titulo: "Janah", 
    legenda: "Captação e edição de Fotos e Vídeos",
    descricao: "Captação e edição de fotos e vídeos para RTP"
  },
  { 
    id: 3, 
    categoria: [1, 2, 3, 4, 10], 
    titulo: " Escola Benfica Cascais Malveira", 
    legenda: "Identidade Visual, Gestão de Redes, Captação e Edição de Fotos e Vídeos",
    descricao: "Identidade visual, gestão de redes sociais e captação e edição de fotos e vídeos para Benfica Cascais Malveira"
  },
  { 
    id: 4, 
    categoria: [3, 4, 10],
    titulo: "UAPovoense", 
    legenda: "Captação e edição de Fotos e Vídeos",
    descricao: "Captação e edição de fotos e vídeos para UAPovoense"
  },
  { 
    id: 5, 
    categoria: [3, 4, 10], 
    titulo: "Victory", 
    legenda: "Captação e edição de Fotos e Vídeos",
    descricao: "Captação e edição de fotos e vídeos para Victory"
  },
  { 
    id: 6, 
    categoria: [3, 11], 
    titulo: "Ruche", 
    legenda: "Captação e edição de Fotos e Vídeos",
    descricao: "Captação e edição de fotos e vídeos para Ruche"
  },
  { 
    id: 7, 
    categoria: [2, 11], 
    titulo: "Café Portugal", 
    legenda: "Gestão de Redes",
    descricao: "Gestão de redes sociais para Café Portugal"
  },
  { 
    id: 8, 
    categoria: [2, 11], 
    titulo: "Café Gelo", 
    legenda: "Gestão de Redes",
    descricao: "Gestão de redes sociais para Café Gelo"
  },
  { 
    id: 9, 
    categoria: [2, 11], 
    titulo: "Taverna do Pescador", 
    legenda: "Gestão de Redes",
    descricao: "Gestão de redes sociais para Taverna do Pescador"
  },
  { 
    id: 10, 
    categoria: [2, 11], 
    titulo: "Villa di Roma", 
    legenda: "Gestão de Redes",
    descricao: "Gestão de redes sociais para Villa di Roma"
  },
  { 
    id: 11, 
    categoria: [3, 11], 
    titulo: "Gelo Augusta", 
    legenda: "Captação de Fotos e Vídeos",
    descricao: "Captação e edição de fotos e vídeos para Gelo Augusta"
  },
  { 
    id: 12, 
    categoria: [2, 11], 
    titulo: "Restaurante Ouro", 
    legenda: "Gestão de Redes",
    descricao: "Gestão de redes sociais para Restaurante Ouro"
  },
  { 
    id: 13, 
    categoria: [2, 11], 
    titulo: "Brasa Lisboa", 
    legenda: "Gestão de Redes",
    descricao: "Gestão de redes sociais para Brasa Lisboa"
  },
  { 
    id: 14, 
    categoria: [2, 10], 
    titulo: "Academia 100%", 
    legenda: "Gestão de Redes",
    descricao: "Gestão de redes sociais para Academia 100%"
  },
    { 
    id: 15, 
    categoria: [2, 9], 
    titulo: "Ana Ferreira Hair", 
    legenda: "Gestão de Redes",
    descricao: "Gestão de redes sociais para Ana Ferreira Hair"
  },
    { 
    id: 16, 
    categoria: [3, 4], 
    titulo: "Julita Imóveis", 
    legenda: "Captura e edição de fotos e vídeos",
    descricao: "Captura e edição de fotos e vídeos para Julita Imóveis"
  },
    { 
    id: 17, 
    categoria: [2, 3, 4, 8], 
    titulo: "Bailo", 
    legenda: "Gestão de Redes, Captação e edição de fotos e vídeos",
    descricao: "Gestão de redes sociais, captação e edição de fotos e vídeos para Bailo"
  },
    { 
    id: 18, 
    categoria: [2, 10], 
    titulo: "TribX", 
    legenda: "Gestão de Redes",
    descricao: "Gestão do Tik Tok para TribX"
  },
    { 
    id: 19, 
    categoria: [2, 12], 
    titulo: "Vila Dias Alojamento Local", 
    legenda: "Gestão de Redes",
    descricao: "Gestão de redes sociais para Vila Dias Alojamento Local"
  },
   { 
    id: 20, 
    categoria: [2], 
    titulo: "Edite Psicologa", 
    legenda: "Gestão de Redes",
    descricao: "Gestão de redes sociais para Edite Psicologa"
  },
   { 
    id: 21, 
    categoria: [2, 3, 4, 10], 
    titulo: "Top Player", 
    legenda: "Gestão de Redes, Captação e edição de fotos e vídeos",
    descricao: "Gestão de redes, captação e edição de fotos e vídeos para Top Player"
  },
   { 
    id: 22, 
    categoria: [2], 
    titulo: "Academia Barril", 
    legenda: "Gestão de Redes",
    descricao: "Gestão de redes sociais para Academia Barril"
  },
   { 
    id: 23, 
    categoria: [3, 4], 
    titulo: "Gabriela Rosa", 
    legenda: "Captura e edição de fotos e vídeos",
    descricao: "Captura e edição de fotos e vídeos para Gabriela Rosa"
  },
  { 
    id: 24, 
    categoria: [3, 4, 10], 
    titulo: "DS", 
    legenda: "Captação e edição de fotos e vídeos",
    descricao: "Captação e edição de fotos e vídeos para DS"
  },
  { 
    id: 25, 
    categoria: [3, 9], 
    titulo: " Maria Lidiane Beauty", 
    legenda: "Captação e edição de fotos e vídeos",
    descricao: "Captação e edição de fotos e vídeos para Lidiane"
  },
  { 
    id: 26, 
    categoria: [3, 5, 8], 
    titulo: "Skechers - Nós Alive", 
    legenda: "Captação de fotos e vídeos em tempo real",
    descricao: "Captação de fotos e vídeos em tempo real para Skechers - Nós Alive"
  },
   { 
    id: 27, 
    categoria: [3, 5, 8], 
    titulo: "Novex - Rock in Rio", 
    legenda: "Captação de fotos e vídeos em tempo real",
    descricao: "Captação de fotos e vídeos em tempo real para Novex - Rock in Rio"
  },
   { 
    id: 28, 
    categoria: [3, 5, 8], 
    titulo: "Visit Azores - BTL", 
    legenda: "Captação de fotos e vídeos em tempo real",
    descricao: "Captação de fotos e vídeos em tempo real para Visit Azores - BTL"
  },
   { 
    id: 29, 
    categoria: [3, 5, 8], 
    titulo: "Seminário Advogados", 
    legenda: "Captação de fotos e vídeos em tempo real",
    descricao: "Captação de fotos e vídeos em tempo real para Seminário Advogados"
  },
];

function Projetos() {
  // const [filtro, setFiltro] = useState('todos');

  const [searchParams] = useSearchParams();
  const categoriaParam = searchParams.get('categoria');
  const [filtro, setFiltro] = useState(categoriaParam ? Number(categoriaParam) : 'todos');


  const imagensFiltradas =
    filtro === 'todos' ? imagens : imagens.filter((img) => img.categoria.includes(filtro));

  return (
    <div className="projetosContainer">
      <h1>Galeria de Projetos</h1>

      <div className="botoesFiltro">
        <button className={filtro === 'todos' ? 'active' : ''} onClick={() => setFiltro('todos')}>Todos</button>
        <button className={filtro === 1 ? 'active' : ''} onClick={() => setFiltro(1)}>Identidade Visual</button>
        <button className={filtro === 2 ? 'active' : ''} onClick={() => setFiltro(2)}>Gestão de Redes Sociais</button>
        <button className={filtro === 3 ? 'active' : ''} onClick={() => setFiltro(3)}>Captação de Fotos e Vídeos</button>
        <button className={filtro === 4 ? 'active' : ''} onClick={() => setFiltro(4)}>Edição de Fotos e Vídeos</button>
        <button className={filtro === 5 ? 'active' : ''} onClick={() => setFiltro(5)}>Cobertura em tempo real</button>
        <button className={filtro === 6 ? 'active' : ''} onClick={() => setFiltro(6)}>Produção Audiovisual</button>
        <button className={filtro === 7 ? 'active' : ''} onClick={() => setFiltro(7)}>Design Gráfico</button>
        <button className={filtro === 8 ? 'active' : ''} onClick={() => setFiltro(8)}>Eventos</button>
        <button className={filtro === 9 ? 'active' : ''} onClick={() => setFiltro(9)}>Estética & Moda</button>
        <button className={filtro === 10 ? 'active' : ''} onClick={() => setFiltro(10)}>Desporto</button>
        <button className={filtro === 11 ? 'active' : ''} onClick={() => setFiltro(11)}>Gastronomia</button>
        <button className={filtro === 12 ? 'active' : ''} onClick={() => setFiltro(12)}>Turismo</button>
      </div>

      <div className="gradeImagens">
        {imagensFiltradas.map((img) => (
          <Link to={`/brand-instagram/${img.id}`} key={img.id} className="imagemBox">
            <div className="imagemConteudo">
              {logoFileById[img.id] ? (
                <img className="brandLogo" src={brandLogos(`./${logoFileById[img.id]}`)} alt="" />
              ) : (
                <span className="fallbackName">{img.titulo}</span>
              )}
              <div className="overlay">
                <h3>{img.titulo}</h3>
                <p>{img.legenda}</p>
              </div>
            </div>
          </Link>

        ))}
      </div>

    </div>
  );
}

export default Projetos;
