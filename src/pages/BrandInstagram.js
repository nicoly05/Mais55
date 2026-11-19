import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SocialEmbed from '../components/SocialEmbed';
import '../styles/BrandInstagram.css';


// Import the same data from Projetos.js
const imagens = [
  { 
    id: 1, 
    titulo: "WrestleFest", 
    legenda: "Design Gráfico, Gestão de Redes, Produção Audiovisual, Cobertura em tempo real e Eventos",
    descricao: "Desenvolvimento de identidade visual, gestão de redes sociais, captação e edição de fotos e vídeos, cobertura em tempo real, produção audiovisual, design gráfico e eventos para WrestleFest",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/reel/DO3_NfjCLPR/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DOwojtYCPs7/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DOy1RKbiFA6/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DOy1RKbiFA6/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DOt8J57iCDF/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DOt8J57iCDF/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DOUOfl6iOE6/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DOrP5u5iKii/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DOHXG8cCOcx/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DN6AJ_viDp_/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DNwEWNxUGjC/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DNwEWNxUGjC/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",

      }
    ],
  
  },
  { 
    id: 2, 
    titulo: "Janah Estética e Bem Estar", 
    legenda: "Produção Audiovisual",
    descricao: "Captação de fotos e vídeos para Janah Estética e Bem Estar",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/reel/DRMatqsDHSL/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DLheLfUMqkY/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DRMaodZjKXe/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DFC71zhOgih/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DF7mo3fOH6m/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/p/DIK2wEJssB_/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/p/DIVe8jhsGqt/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DBmZsb4uFBN/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DB9TGqfO8_0/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      }
    ],
  },
  { 
    id: 3, 
    titulo: "Escola Benfica Cascais Malveira", 
    legenda: "Design Gráfico",
    descricao: "Identidade visual e gestão de redes sociais para Benfica Cascais Malveira",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/reel/DeML59xojMO/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/Df1pge7KlRA/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DYsWrjloHzT/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DfUJjC3Iq0S/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/De1JComopqO/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DegnNHQo9k4/",
      }
    ],
  },
   { 
    id: 4, 
    titulo: "União Atlético Povoense", 
    legenda: "Design Gráfico",
    descricao: "Identidade visual e gestão de redes sociais para União Atlético Povoense",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/reel/DchXfu_j32J/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DN5Y-_WDunp/",
      }
    ],
  },
   { 
    id: 5, 
    titulo: "Victory, Way To Win", 
    legenda: "Design Gráfico",
    descricao: "Identidade visual e gestão de redes sociais para Victory",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/reel/Da5rpmDIfEH/",
      }, 
      {
        instagramUrl: "https://www.instagram.com/reel/Da2o1wpoM_C/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DazglEdIi09/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DavgmcQobf5/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DaimPgOIMwR/",
      },
    ],
  },
  { 
    id: 6, 
    titulo: "Ruche", 
    legenda: "Design Gráfico",
    descricao: "Identidade visual e gestão de redes sociais para Ruche",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/p/Cb0WzyVosB_/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/CdZOp_aI9nU/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/CjJHr2ToIbM/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      },
      {
        instagramUrl: "https://www.instagram.com/p/CdEsn3RIzEY/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ==",
      }
    ],
  },
  { 
    id: 7, 
    titulo: "Café Portugal", 
    legenda: "Gestão de Redes",
    descricao: "Gestão de redes sociais para Café Portugal",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/reel/DZmxCRLowge/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DZNrjRHo2n2/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DZKghq4I0hl/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DY7wwf5I_2f/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DYuoJQvIpMI/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DYXlrBdIACf/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DYSEos1oV0B/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DYAkInQIIV5/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DX7WgTzIf7S/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DXPeVySiFw9/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DW8sQcZjYep/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DW4SAEyCNb7/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DfXgc2bI71D/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DfIL1feoQvt/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DezaCHhCCCU/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/Det0wO2CA0f/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/Del_L1siAZW/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DeUUqU6Idcu/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DeMROrdos-d/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/Dd_pB7xIvO7/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DdtRKxToqSB/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DdllrpLoPs9/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DdWQhzgId2D/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DdE1MWYo2Mq/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/Dc6CVgrot1t/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/Dcoh9FhIVia/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DcdgTVyoEDU/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DcTOCmSIVsT/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/Db_i0B2o2B0/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/Db3i5U5K33E/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/Dbi8IEyoBkc/",
      },
    ],
  },
  { 
    id: 8, 
    titulo: "Café Gelo Rossio", 
    legenda: "Gestão de Redes",
    descricao: "Gestão de redes sociais para Café Gelo Rossio",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/p/DZKeMdbspct/",
      }, 
      {
        instagramUrl: "https://www.instagram.com/p/DYu66IXxFd3/",
      },
      {
        instagramUrl: "https://www.instagram.com/p/DcDrYgHFXuC/",
      },
    ],
  },

  { 
    id: 17, 
    titulo: "Bailo", 
    legenda: "Gestão de Redes e Produção Audiovisual",
    descricao: "Gestão de redes sociais e produção audiovisual para Bailo",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/reel/DZsQSHmJeFY/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DYWud6PqQfo/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DYS7zy7qa6C/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DYFqehLq_YO/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DWtWDLrCIur/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DWoibYxiLiT/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DWhGU2yRkIG/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DWcMHKNiGDf/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DWXDpZ-iB5b/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DWRRNepiELq/",
      },
    ],
  },
  { 
    id: 24, 
    titulo: "DS", 
    legenda: "Produção Audiovisual",
    descricao: "Captação e edição de fotos e vídeos para DS",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/reel/Db_g5xsPMj_/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/Db5fw4ysts0/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/Db5aARlsb8J/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/Db1R9UkMXys/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DbycYusv4YU/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DbnIr4kM_RQ/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DbfauG2s_kH/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DbTA6oZst0p/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DbQ_NuxsdRH/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DbNrnOaM3f9/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DbMDaWxsETI/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DbIXehQMv7u/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DbGNBgesT58/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/Da73xQiMmdE/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/Da7mjuxsRgM/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/Da2BnTKMB4k/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/Da0xHM7MHFy/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DazvfsUMQ9P/",
      },
      ,
      {
        instagramUrl: "https://www.instagram.com/reel/DazbNL1stZI/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/Davlp-UM4IC/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DapQtoeMzbb/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/Dan92LdsihA/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/Dalvhsas2nI/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DaiO5KSs4Y4/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DadlGR7PC70/",
      },
    ],
  },
  { 
    id: 28, 
    titulo: "Visit Azores - BTL", 
    legenda: "Produção Audiovisual, Cobertura em tempo real e Eventos",
    descricao: "Produção de vídeos e fotos para Visit Azores",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/reel/DVWprQykl2T/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DVVr_PMlHjR/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DVRvw0Kj9xe/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DVRWE72EpM9/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DVO9OjRAkKn/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DVMh2RAgsZX/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DHQm9hCCFfJ/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DHPDzZvC9t2/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DHODRF_iVx_/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DHMlD70C2JF/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DHKBnCSCTn3/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DHIpGjpiybt/",
      }
    ],
  },{ 
    id: 27, 
    titulo: "Novex - Rock in Rio", 
    legenda: "Design Gráfico",
    descricao: "Produção de vídeos e fotos para Novex - Rock in Rio",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/p/C8SVur4IFnP/",
      }, 
      {
        instagramUrl: "https://www.instagram.com/p/C8o28lQqw5c/",
      }
    ],
  },{ 
    id: 30, 
    titulo: "Mova Pilates", 
    legenda: "Design Gráfico",
    descricao: "Produção de vídeos e fotos para Mova Pilates",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/reel/DffRgViIHHN/",
      }, 
      {
        instagramUrl: "https://www.instagram.com/reel/Dfe1S2ioY9R/",
      }
    ],
  },
];

function BrandInstagram() {
  const { brandId } = useParams();

  const brand = imagens.find(img => img.id === parseInt(brandId));

  if (!brand) {
    return (
      <div className="brand-instagram-container-not-found">
        <Link className="back-link" to="/Projetos">← Voltar para Projetos</Link>
        <h1>Desculpe! Estamos processando o conteúdo dessa marca no momento...</h1>
      </div>
    );
  }

  return (
    <div className="brand-instagram-container">
      <Link to="/Projetos" className="back-link2">← Voltar</Link>
       <div className="brand-header">
       
        <h1 className="brand-title">{brand.titulo}</h1>
        <p className="brand-category">{brand.legenda}</p>
        <p className="brand-description">{brand.descricao}</p>
      </div>
        <div className="instagram-posts">
          {brand.instagramPosts && brand.instagramPosts.length > 0 ? (
            brand.instagramPosts.map((post, index) => (
              <SocialEmbed
                key={index}
                url={post.url || post.instagramUrl}
                thumb={post.thumb}
                titulo={post.titulo}
                marca={brand.name}
              />
            ))
          ) : (
            <p className="no-content">Sem conteúdo de Instagram disponível para esta marca.</p>
          )}
        </div>
     
    </div>
  );
}

export default BrandInstagram;
