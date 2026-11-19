import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SocialEmbed from '../components/SocialEmbed';
import '../styles/BrandInstagram.css';


// Import the same data from Projetos.js
const imagens = [
  { 
    id: 1, 
    titulo: "WrestleFest", 
    legenda: "Gestão de Redes Sociais e Produção Audiovisual",
    descricao: "Gestão de redes sociais e acompanhamento audiovisual dos eventos, com captação e produção de conteúdos no próprio dia. O trabalho inclui vídeos, fotografias e materiais específicos para YouTube e redes sociais.",
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
    legenda: "Gestão de Redes Sociais e Produção Audiovisual",
    descricao: "Gestão de redes sociais e produção audiovisual, com criação de conteúdos que reforçam a identidade da marca e a ligação com a sua audiência. A produção mensal inclui vídeos e fotografias.",
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
    legenda: "Gestão de Redes Sociais e Produção Audiovisual",
    descricao: "Gestão da comunicação digital e produção regular de conteúdos para as redes sociais. O trabalho inclui captação de fotografia e vídeo, com entrega mensal de conteúdos para manter uma presença digital consistente.",
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
    legenda: "Produção Audiovisual",
    descricao: "Acompanhamento audiovisual da atividade da marca, incluindo a produção de vídeos de início de época e cobertura de eventos.",
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
    legenda: "Produção Audiovisual",
    descricao: "Produção audiovisual para o campo de férias, com acompanhamento regular durante o mês de Julho das atividades e criação de conteúdos dinâmicos. São produzidos e entregues cinco vídeos por semana.",
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
    id: 7, 
    titulo: "Café Portugal", 
    legenda: "Gestão de Redes Sociais e Produção Audiovisual",
    descricao: "Gestão de redes sociais e criação de conteúdos audiovisuais para destacar a oferta gastronómica e a identidade do restaurante. A produção mensal inclui cinco vídeos em formato Reels e dez fotografias.",
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
    legenda: "Gestão de Redes Sociais e Produção Audiovisual",
    descricao: "Gestão da comunicação digital e produção regular de conteúdos visuais para valorizar a identidade do espaço, os produtos e a experiência gastronómica. O trabalho inclui a entrega mensal de vídeos e fotografias.",
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
    id: 9, 
    titulo: "Taverna do Pescador", 
    legenda: "Gestão de Redes Sociais e Produção Audiovisual",
    descricao: "Gestão de redes sociais e desenvolvimento de conteúdos visuais para comunicar a identidade do restaurante e valorizar a sua oferta gastronómica. A entrega mensal inclui cinco vídeos Reels e dez fotografias.",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/reel/DaiOxpBoL2P/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DZKdbz2ouub/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DW4d6-MjmUR/",
      },
    ],
  },
  { 
    id: 10, 
    titulo: "Villa di Roma", 
    legenda: "Gestão de Redes Sociais e Produção Audiovisual",
    descricao: "Gestão da presença digital do restaurante, com planeamento e criação de conteúdos que destacam a sua oferta gastronómica e experiência. São produzidos mensalmente cinco vídeos Reels e dez fotografias.",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/reel/DekXxuoBZh2/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DcqSSr9O93R/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DbVSLOoxcXI/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DX2YnytsKiN/",
      },
    ],
  },
  { 
    id: 11, 
    titulo: "Gelo Augusta", 
    legenda: "Gestão de Redes Sociais e Produção Audiovisual",
    descricao: "Gestão da comunicação digital do restaurante, com criação de conteúdos focados na gastronomia, nos produtos e na experiência do espaço. São entregues mensalmente cinco vídeos Reels e dez fotografias.",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/reel/DeeJgu0R5c5/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DfC6FlvTGV2/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DadbvfNoFpE/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DaVtzcfor3W/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DZpgJ-WIlvI/",
      }
    ],
  },
  { 
    id: 12, 
    titulo: "Restaurante Ouro", 
    legenda: "Gestão de Redes Sociais e Produção Audiovisual",
    descricao: "Gestão de redes sociais e produção de conteúdos para reforçar a presença digital do restaurante e dar destaque à sua experiência gastronómica. A produção mensal contempla cinco vídeos Reels e dez fotografias.",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/p/Da2jg6KNtf4/",
      },
      {
        instagramUrl: "https://www.instagram.com/p/DcUJSe_Njpv/",
      },
      {
        instagramUrl: "https://www.instagram.com/p/Dcs9ysmN9bf/",
      },
    ],
  },
  { 
    id: 13, 
    titulo: "Brasa Lisboa", 
    legenda: "Gestão de Redes Sociais",
    descricao: "Gestão de redes sociais para Brasa Lisboa",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/p/DTaBkFFDHQg/",
      },
      {
        instagramUrl: "https://www.instagram.com/p/DTOXIAujNhD/",
      },
    ],
  },
  { 
    id: 14, 
    titulo: "Ginásio 100%", 
    legenda: "Gestão de Redes Sociais",
    descricao: "Gestão das redes sociais, assegurando o planeamento, desenvolvimento e acompanhamento da comunicação digital da marca.",
  },
  { 
    id: 15, 
    titulo: "Ana Ferreira Hair", 
    legenda: "Gestão de Redes Sociais e Produção Audiovisual",
    descricao: "Gestão de redes sociais e produção audiovisual para fortalecer a presença digital e comunicar a identidade da marca. O trabalho inclui a criação mensal de vídeos e uma seleção de fotografias.",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/reel/Deq8qGBOL6r/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DYxmmrJu3Wx/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/Dd9hXkYI9qf/",
      },
    ],
  },
  { 
    id: 17, 
    titulo: "Bailo", 
    legenda: "Produção Audiovisual e Cobertura em Tempo Real",
    descricao: "Cobertura audiovisual de eventos, com registo dos principais momentos e criação de conteúdos que permitem prolongar a experiência para além do próprio evento. A entrega inclui um vídeo de resumo e uma seleção de fotografia",
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
    id: 18, 
    titulo: "TribX", 
    legenda: "Produção Audiovisual e Cobertura em Tempo Real",
    descricao: "Acompanhamento audiovisual de um evento em Madrid, com captação de momentos relevantes, entrevistas e registo fotográfico. O projeto resultou num vídeo de resumo do evento, entrevistas e fotografias.",
  },
  { 
    id: 19, 
    titulo: "Villa Dias Alojamento Local", 
    legenda: "Produção Audiovisual",
    descricao: "Produção audiovisual para valorização do espaço e criação de conteúdos visuais que destacam as suas características e experiência. O projeto incluiu a entrega de vídeos e fotografias.",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/reel/DcbsVttRHTX/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DYFn1JsOzeF/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/Db6NW8TxN91/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DXpQ3Kpjr2G/",
      },
    ],
  },
  { 
    id: 21, 
    titulo: "Top Player", 
    legenda: "Produção Audiovisual e Design Gráfico",
    descricao: "Acompanhamento audiovisual da atividade da marca, incluindo a produção de vídeos de início de época e cobertura de eventos. O projeto contempla também o desenvolvimento mensal de peças gráficas para apoiar a comunicação da marca.",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/reel/DXNHMr8MAqZ/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DTWAKjVDHTi/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DVlPYigjDWd/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DT8pAB3DCZM/",
      },
    ],
  },
  { 
    id: 22, 
    titulo: "Academia Barril", 
    legenda: "Design Gráfico",   
    descricao: "Desenvolvimento de materiais gráficos para apoiar a comunicação da academia, garantindo uma identidade visual coerente e uma apresentação profissional dos conteúdos.",
  },
  { 
    id: 24, 
    titulo: "DS", 
    legenda: "Produção Audiovisual",
    descricao: "Produção audiovisual durante o campo de férias, realizado no mês de julho, com registo diário das atividades e dos principais momentos. São entregues dois vídeos por dia.",
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
    id: 25, 
    titulo: "Maria Lidiane Beauty", 
    legenda: "Gestão de Redes Sociais e Produção Audiovisual",
    descricao: "Desenvolvimento da comunicação digital e produção regular de conteúdos audiovisuais.",
  },
  { 
    id: 26, 
    titulo: "Skechers - Nós Alive", 
    legenda: "Produção Audiovisual e Cobertura em Tempo Real",
    descricao: "Produção audiovisual durante o festival NOS Alive, com acompanhamento e captação dos principais momentos da presença da marca no evento.",
  },
  { 
    id: 27, 
    titulo: "Novex - Rock in Rio", 
    legenda: "Produção Audiovisual e Cobertura em Tempo Real",
    descricao: "Acompanhamento da marca durante o Rock in Rio, com produção de conteúdos audiovisuais ao longo da iniciativa. Foram entregues fotografias diárias, um vídeo de resumo por dia e videos para história.",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/p/C8SVur4IFnP/",
      }, 
      {
        instagramUrl: "https://www.instagram.com/p/C8o28lQqw5c/",
      }
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
    id: 29, 
    titulo: "Seminário Advogados", 
    legenda: "Produção Audiovisual e Cobertura em Tempo Real",
    descricao: "Produção audiovisual durante o congresso, com cobertura dos participantes que contrataram o serviço. Cada participante recebe dois vídeos e uma seleção de fotografias.",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/p/C8SVur4IFnP/",
      }, 
      {
        instagramUrl: "https://www.instagram.com/p/C8o28lQqw5c/",
      }
    ],
  },
  { 
    id: 30, 
    titulo: "Mova Pilates", 
    legenda: "Produção Audiovisual",
    descricao: "Produção audiovisual para a inauguração de um estúdio de Pilates, com captação da experiência, do espaço e dos momentos mais marcantes do evento. Foram produzidos três vídeos e dez fotografias.",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/reel/DffRgViIHHN/",
      }, 
      {
        instagramUrl: "https://www.instagram.com/reel/Dfe1S2ioY9R/",
      }
    ],
  },
  { 
    id: 31, 
    titulo: "Visionhammer", 
    legenda: "Design Gráfico",
    descricao: "Produção audiovisual durante o evento da Web Summit, com captação dos principais momentos e criação de conteúdos para comunicação digital. Foram entregues dois vídeos finais e uma seleção de fotografias para Linkedin e site.",
  },
  { 
    id: 32, 
    titulo: "Fiore D'Italia", 
    legenda: "Gestão de Redes Sociais",
    descricao: "Gestão de redes sociais para Fiore D'Italia",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/reel/DfR2_9chzTU/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/De67iigMrz0/",
      },
    ],
  },
  { 
    id: 33, 
    titulo: "Vitelli", 
    legenda: "Gestão de Redes Sociais e Produção Audiovisual",
    descricao: "Gestão da comunicação digital e criação de conteúdos audiovisuais para valorizar a identidade, os produtos e a experiência gastronómica do restaurante. O trabalho segue uma produção mensal de cinco vídeos Reels e dez fotografias.",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/p/Dfu6akdB7eh/",
      },
      {
        instagramUrl: "https://www.instagram.com/p/DezYWXnIxBq/",
      },
    ],
  },
  { 
    id: 34, 
    titulo: "Rota Lusa", 
    legenda: "Gestão de Redes Sociais e Produção Audiovisual",
    descricao: "Gestão da presença digital e produção de conteúdos para destacar a identidade e a oferta gastronómica do restaurante. O trabalho inclui a criação mensal de cinco vídeos Reels e dez fotografias.",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/reel/DfcPuERj-Tl/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DesE1jROt01/",
      },
      {
        instagramUrl: "https://www.instagram.com/reel/DaQn-RaOVVd/",
      },
    ],
  },
  { 
    id: 35, 
    titulo: "Grilled and Company", 
    legenda: "Gestão de Redes Sociais",
    descricao: "Gestão de redes sociais para Grilled and Company",
    instagramPosts: [
      {
        instagramUrl: "https://www.instagram.com/reel/Dez2USeRZBw/",
      },
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
