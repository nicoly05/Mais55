import React, { useState } from 'react';
import '../styles/Contactos.css';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_r8clmr4';
const EMAILJS_TEMPLATE_ID = 'template_pcllcps';
const EMAILJS_PUBLIC_KEY = 'KnKREpqhU1p3j-juG';


const SETORES = [
  'Restauração',
  'Desporto',
  'Eventos',
  'Beleza e bem-estar',
  'Hotelaria',
  'Comércio',
  'Outro',
];

const SERVICOS = [
  'Gestão de Redes Sociais',
  'Produção Audiovisual',
  'Cobertura de Eventos',
  'Ainda não sei',
  'Outro',
];

const SUCCESS_MESSAGE = 'Agradecemos a sua mensagem. Será analisada com atenção e responderemos assim que possível.';
const ERROR_MESSAGE = 'Não foi possível enviar a mensagem. Tente novamente ou escreva-nos diretamente para geral@mais55lab.com.';

async function sendContactForm(payload) {
  const params = {
    nome: payload.nome,
    email: payload.email,
    telemovel: payload.telemovel || '—',
    empresa: payload.empresa || '—',
    setor: payload.setor || '—',
    servico: payload.servico || '—',
    mensagem: payload.mensagem,
  };

  await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params, {
    publicKey: EMAILJS_PUBLIC_KEY,
  });
}

const INITIAL_FORM = {
  nome: '',
  email: '',
  telemovel: '',
  empresa: '',
  setor: '',
  servico: '',
  mensagem: '',
  consentimento: false,
};

function Contactos() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle');

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
  const isFormComplete =
    form.nome.trim() !== '' &&
    isEmailValid &&
    form.mensagem.trim() !== '' &&
    form.consentimento;

  React.useEffect(() => {
    if (status !== 'success' && status !== 'error') return;
    const timer = setTimeout(() => setStatus('idle'), 6000);
    return () => clearTimeout(timer);
  }, [status]);

  const updateField = (event) => {
    const { name, type, checked, value } = event.target;
    setForm((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formElement = event.currentTarget;
    if (!formElement.reportValidity()) return;

    setStatus('sending');
    const payload = {
      nome: form.nome.trim(),
      email: form.email.trim(),
      telemovel: form.telemovel.trim(),
      empresa: form.empresa.trim(),
      setor: form.setor,
      servico: form.servico,
      mensagem: form.mensagem.trim(),
      consentimento: form.consentimento,
    };

    try {
      await sendContactForm(payload);
      setStatus('success');
      setForm(INITIAL_FORM);
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="contactos">
      <header className="contactHero">
        <p className="eyebrow">Contactos</p>
        <h1>Pretende falar sobre o seu projeto?</h1>
        <p>Descreva-nos brevemente a sua marca e as suas necessidades. Responderemos o mais breve possível.</p>
      </header>

      <div className="contactLayout">
        <form className="contactForm" onSubmit={handleSubmit} noValidate={false}>
          <div className="fieldGrid">
            <label>
              Nome *
              <input name="nome" type="text" value={form.nome} onChange={updateField} required autoComplete="name" />
            </label>
            <label>
              Email *
              <input name="email" type="email" value={form.email} onChange={updateField} required autoComplete="email" />
            </label>
            <label>
              Telemóvel (opcional)
              <input name="telemovel" type="tel" value={form.telemovel} onChange={updateField} autoComplete="tel" />
            </label>
            <label>
              Empresa ou marca
              <input name="empresa" type="text" value={form.empresa} onChange={updateField} autoComplete="organization" />
            </label>
            <label>
              Setor de atividade
              <select name="setor" value={form.setor} onChange={updateField}>
                <option value="">Selecione</option>
                {SETORES.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>
            <label>
              Serviço de interesse
              <select name="servico" value={form.servico} onChange={updateField}>
                <option value="">Selecione</option>
                {SERVICOS.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </label>
          </div>

          <label>
            Mensagem *
            <textarea name="mensagem" rows="6" value={form.mensagem} onChange={updateField} required />
          </label>

          <label className="consent">
            <input
              name="consentimento"
              type="checkbox"
              checked={form.consentimento}
              onChange={updateField}
              required
            />
            <span>
              Autorizo a +55 lab a conservar os meus dados para efeitos de resposta ao meu pedido. Consulte a <a href="/politica-de-privacidade.pdf" target="_blank" rel="noopener">Política de Privacidade</a>.
            </span>
          </label>

          <button
            type="submit"
            className="contactSubmit"
            disabled={!isFormComplete || status === 'sending'}
            title={!isFormComplete ? 'Preencha os campos obrigatórios' : undefined}
          >
            {status === 'sending' ? 'A enviar…' : 'Enviar mensagem'}
          </button>

          {(status === 'success' || status === 'error') && (
            <div
              className={`formToast ${status === 'success' ? 'formToast--success' : 'formToast--error'}`}
              role={status === 'success' ? 'status' : 'alert'}
            >
              <span className="formToast__icon">{status === 'success' ? '✓' : '!'}</span>
              <p>{status === 'success' ? SUCCESS_MESSAGE : ERROR_MESSAGE}</p>
              <button type="button" className="formToast__close" onClick={() => setStatus('idle')} aria-label="Fechar">×</button>
            </div>
          )}
        </form>

        <aside className="directContacts" aria-labelledby="direct-contacts-title">
          <h2 id="direct-contacts-title">Contactos diretos</h2>
          <ul>
            <li><a href="mailto:geral@mais55lab.com">geral@mais55lab.com</a></li>
            <li><a href="tel:+351915546801">915 546 801</a></li>
            <li><a href="https://www.instagram.com/mais55.lab/" target="_blank" rel="noopener noreferrer">@mais55.lab</a></li>
            <li>Portugal</li>
            <li>Segunda a sexta-feira, das 9h às 18h</li>
          </ul>

          <div className="instagramBox">
            <p>Prefere falar diretamente? Envie-nos uma mensagem através do Instagram. Respondemos a todas as mensagens.</p>
            <a href="https://www.instagram.com/mais55.lab/" target="_blank" rel="noopener noreferrer">Ir para o Instagram →</a>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default Contactos;
