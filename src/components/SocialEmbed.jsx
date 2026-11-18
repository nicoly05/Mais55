import React, { useEffect, useState } from 'react';
import InstagramEmbed from './InstagramEmbed';

const NOMES = { tiktok: 'TikTok', linkedin: 'LinkedIn', drive: 'Google Drive' };

function getEmbed(url) {
  if (!url) return null;
  if (url.includes('instagram.com')) return { type: 'instagram' };

  if (url.includes('tiktok.com')) {
    const m = url.match(/video\/(\d+)/);
    if (m) return { type: 'tiktok', src: `https://www.tiktok.com/embed/v2/${m[1]}` };
  }

  if (url.includes('linkedin.com')) {
    if (url.includes('/embed/')) return { type: 'linkedin', src: url.split('?')[0] };
    const urn = url.match(/urn:li:(activity|share|ugcPost):(\d+)/);
    if (urn) return { type: 'linkedin', src: `https://www.linkedin.com/embed/feed/update/urn:li:${urn[1]}:${urn[2]}` };
    const act = url.match(/activity-(\d+)/);
    if (act) return { type: 'linkedin', src: `https://www.linkedin.com/embed/feed/update/urn:li:activity:${act[1]}` };
  }

  if (url.includes('drive.google.com')) {
    const m = url.match(/\/d\/([^/]+)/) || url.match(/[?&]id=([^&]+)/);
    if (m) return {
      type: 'drive',
      src: `https://drive.google.com/file/d/${m[1]}/preview`,
      thumb: `https://drive.google.com/thumbnail?id=${m[1]}&sz=w640`,
    };
  }
  return null;
}

export default function SocialEmbed({ url, thumb, titulo, marca }) {
  const embed = getEmbed(url);
  const [aberto, setAberto] = useState(false);
  const [capa, setCapa] = useState(thumb || embed?.thumb || null);
  const [legenda, setLegenda] = useState(titulo || '');

  // TikTok: vai buscar a capa e a legenda automaticamente
  useEffect(() => {
    if (embed?.type !== 'tiktok' || thumb) return;
    fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(url)}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.thumbnail_url) setCapa(d.thumbnail_url);
        if (!titulo && d.title) setLegenda(d.title);
      })
      .catch(() => {});
  }, [url]); // eslint-disable-line

  if (!embed) {
    return <a href={url} target="_blank" rel="noopener noreferrer" className="social-embed-fallback">Ver publicação →</a>;
  }
  if (embed.type === 'instagram') return <InstagramEmbed url={url} />;

  return (
    <div className={`social-card social-card--${embed.type}`}>
      <div className="social-card__header">
        <span className="social-card__avatar">{(marca || NOMES[embed.type])[0]}</span>
        <span className="social-card__nome">{marca || NOMES[embed.type]}</span>
      </div>

      <div className="social-card__media">
        {aberto ? (
          <iframe src={embed.src} title={legenda || NOMES[embed.type]}
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture" allowFullScreen />
        ) : (
          <button type="button" className="social-card__preview" onClick={() => setAberto(true)}
            style={capa ? { backgroundImage: `url(${capa})` } : undefined}
            aria-label="Reproduzir vídeo">
            <span className="social-card__play">▶</span>
          </button>
        )}
      </div>

      {legenda && <p className="social-card__legenda">{legenda}</p>}

      <a className="social-card__link" href={url} target="_blank" rel="noopener noreferrer">
        Ver no {NOMES[embed.type]}
      </a>
    </div>
  );
}