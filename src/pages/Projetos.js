import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import '../styles/Projetos.css';

const brandLogos = require.context('../assets/brands', false, /_branco\.png$/);
const logoFileById = {
  1: 'wrestlefest_branco.png',
  2: 'janah_branco.png',
  3: 'escola_benfica_cascais_branco.png',
  4: 'uap_branco.png',
  5: 'victory_branco.png',
  7: 'cafe_portugal_branco.png',
  8: 'cafe_gelo_rossio_branco.png',
  9: 'taverna_do_pescador_branco.png',
  10: 'villa_di_roma_branco.png',
  11: 'gelo_augusta_branco.png',
  12: 'ouro_my_story_hotels_branco.png',
  13: 'brasa_lisboa_branco.png',
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
  27: 'novex_branco.png',
  28: 'visit_azores_branco.png',
  29: 'seminario_luso_brasileiro_branco.png',
  30: 'mova_pilates_branco.png',
  31: 'visionhammer_branco.png',
  32: 'fiore_ditalia_branco.png',
  33: 'vitelli_branco.png',
  34: 'rota_lusa_branco.png',
  35: "grilled_and_company_branco.png",
};


const imagens = [
  { 
    id: 1, 
    categoria: [2, 6, 8], 
    titulo: "WrestleFest", 
    legenda: "Gestão de Redes Sociais e Produção Audiovisual",
  },
  { 
    id: 2, 
    categoria: [2, 6, 9], 
    titulo: "Janah", 
    legenda: "Gestão de Redes Sociais e Produção Audiovisual",
  },
  { 
    id: 3, 
    categoria: [2, 6, 10], 
    titulo: " Escola Benfica Cascais Malveira", 
    legenda: "Gestão de Redes Sociais e Produção Audiovisual",
  },
  { 
    id: 4, 
    categoria: [6, 10],
    titulo: "UAPovoense", 
    legenda: "Produção Audiovisual",
  },
  { 
    id: 5, 
    categoria: [6, 10], 
    titulo: "Victory", 
    legenda: "Produção Audiovisual",
  },
  { 
    id: 7, 
    categoria: [2, 6, 11], 
    titulo: "Café Portugal", 
    legenda: "Gestão de Redes Sociais e Produção Audiovisual",
  },
  { 
    id: 8, 
    categoria: [2, 6, 11], 
    titulo: "Café Gelo", 
    legenda: "Gestão de Redes Sociais e Produção Audiovisual",
  },
  { 
    id: 9, 
    categoria: [2, 6, 11], 
    titulo: "Taverna do Pescador", 
    legenda: "Gestão de Redes Sociais e Produção Audiovisual",
  },
  { 
    id: 10, 
    categoria: [2, 6, 11], 
    titulo: "Villa di Roma", 
    legenda: "Gestão de Redes Sociais e Produção Audiovisual",
  },
  { 
    id: 11, 
    categoria: [2, 6, 11], 
    titulo: "Gelo Augusta", 
    legenda: "Gestão de Redes Sociais e Produção Audiovisual",
  },
  { 
    id: 12, 
    categoria: [2, 6, 11], 
    titulo: "Restaurante Ouro", 
    legenda: "Gestão de Redes Sociais e Produção Audiovisual",
  },
  { 
    id: 13, 
    categoria: [2, 11], 
    titulo: "Brasa Lisboa", 
    legenda: "Gestão de Redes Sociais",
  },
  { 
    id: 14, 
    categoria: [2, 10], 
    titulo: "Ginásio 100%", 
    legenda: "Gestão de Redes Sociais",
  },
    { 
    id: 15, 
    categoria: [2, 6, 9], 
    titulo: "Ana Ferreira Hair", 
    legenda: "Gestão de Redes Sociais e Produção Audiovisual",
  },
    { 
    id: 16, 
    categoria: [6, 12], 
    titulo: "Julita Imóveis", 
    legenda: "Produção Audiovisual",
  },
    { 
    id: 17, 
    categoria: [2, 6, 8], 
    titulo: "Bailo", 
    legenda: "Produção Audiovisual e Cobertura em Tempo Real",
  },
    { 
    id: 18, 
    categoria: [2, 6, 8], 
    titulo: "TribX", 
    legenda: "Produção Audiovisual e Cobertura em Tempo Real",
  },
    { 
    id: 19, 
    categoria: [2, 12], 
    titulo: "Villa Dias Alojamento Local", 
    legenda: "Produção Audiovisual",
  },
   { 
    id: 21, 
    categoria: [6, 7, 10], 
    titulo: "Top Player", 
    legenda: "Produção Audiovisual e Design Gráfico",
  },
   { 
    id: 22, 
    categoria: [7, 10], 
    titulo: "Academia Barril", 
    legenda: "Design Gráfico",
  },
  { 
    id: 24, 
    categoria: [6, 10], 
    titulo: "DS", 
    legenda: "Produção Audiovisual",
  },
  { 
    id: 25, 
    categoria: [2, 6, 9], 
    titulo: " Maria Lidiane Beauty", 
    legenda: "Gestão de Redes Sociais e Produção Audiovisual",
  },
  { 
    id: 26, 
    categoria: [5, 6, 8], 
    titulo: "Skechers - Nós Alive", 
    legenda: "Produção Audiovisual e Cobertura em Tempo Real",
  },
   { 
    id: 27, 
    categoria: [5, 6, 8], 
    titulo: "Novex - Rock in Rio", 
    legenda: "Produção Audiovisual e Cobertura em Tempo Real",
  },
   { 
    id: 28, 
    categoria: [5, 6, 8], 
    titulo: "Visit Azores - BTL", 
    legenda: "Cobertura em tempo real e Produção Audiovisual",
  },
   { 
    id: 29, 
    categoria: [5, 6, 8], 
    titulo: "Seminário Advogados", 
    legenda: "Produção Audiovisual e Cobertura em Tempo Real",
    },
    { 
      id: 30, 
      categoria: [6, 8], 
      titulo: "Mova Pilates", 
      legenda: "Produção Audiovisual",
    },
    { 
      id: 31, 
      categoria: [6, 8], 
      titulo: "Visionhammer", 
      legenda: "Produção Audiovisual",
    },
    { 
      id: 32, 
      categoria: [6, 11], 
      titulo: "Fiore D'Italia", 
      legenda: "Produção Audiovisual",
    },
    { 
      id: 33, 
      categoria: [2, 6, 11], 
      titulo: "Vitelli", 
      legenda: "Gestão de Redes Sociais e Produção Audiovisual",  
    },
    { 
      id: 34, 
      categoria: [2, 6, 11], 
      titulo: "Rota Lusa", 
      legenda: "Gestão de Redes Sociais e Produção Audiovisual",
    },
    { 
      id: 35, 
      categoria: [6, 11], 
      titulo: "Grilled and Company", 
      legenda: "Produção Audiovisual",
    },
];

function Projetos() {
  // const [filtro, setFiltro] = useState('todos');

  const [searchParams] = useSearchParams();
  const filtroParam = searchParams.get('filtro');
  const categoriaParam = searchParams.get('categoria');
  const filtroFromUrl = filtroParam === 'todos' || !categoriaParam
    ? 'todos'
    : Number(categoriaParam);
  const [filtro, setFiltro] = useState(filtroFromUrl);

  useEffect(() => {
    setFiltro(filtroFromUrl);
  }, [filtroFromUrl]);


  const imagensFiltradas =
    filtro === 'todos' ? imagens : imagens.filter((img) => img.categoria.includes(filtro));

  return (
    <div className="projetosContainer">
      <h1>Galeria de Projetos</h1>

      <div className="botoesFiltro">
        <button className={filtro === 'todos' ? 'active' : ''} onClick={() => setFiltro('todos')}>Todos</button>
        <button className={filtro === 6 ? 'active' : ''} onClick={() => setFiltro(6)}>Produção Audiovisual</button>
        <button className={filtro === 2 ? 'active' : ''} onClick={() => setFiltro(2)}>Gestão de Redes Sociais</button>
        <button className={filtro === 7 ? 'active' : ''} onClick={() => setFiltro(7)}>Design Gráfico</button>
        <button className={filtro === 5 ? 'active' : ''} onClick={() => setFiltro(5)}>Cobertura em Tempo Real</button>
        <button className={filtro === 8 ? 'active' : ''} onClick={() => setFiltro(8)}>Eventos</button>
        <button className={filtro === 9 ? 'active' : ''} onClick={() => setFiltro(9)}>Estética & Moda</button>
        <button className={filtro === 10 ? 'active' : ''} onClick={() => setFiltro(10)}>Desporto</button>
        <button className={filtro === 11 ? 'active' : ''} onClick={() => setFiltro(11)}>Gastronomia</button>
        <button className={filtro === 12 ? 'active' : ''} onClick={() => setFiltro(12)}>Imobiliário / Alojamento</button>
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
