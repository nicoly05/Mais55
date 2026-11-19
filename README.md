# Site +55 Lab

Site institucional da agência **+55 Lab**, feito em React (Create React App). Apresenta os serviços, os projetos e as marcas com que a agência trabalha, a equipa e os contactos. Inclui também um formulário de contacto que envia emails através do EmailJS.

---

## O que o site faz

| Página | Rota | O que tem |
|---|---|---|
| Início | `/` | Hero com vídeo, carrossel de serviços, carrossel automático de logos de marcas (que também se pode arrastar com o rato ou com o dedo), destaques de projetos, avaliações do Google e botões de contacto. |
| Serviços | `/Servicos` | Lista detalhada dos serviços da agência (redes sociais, produção audiovisual, cobertura de eventos, etc.). |
| Projetos | `/Projetos` | Galeria com todas as marcas e clientes. Cada cartão mostra o logo e abre a página da marca. |
| Página da marca | `/brand-instagram/:brandId` | Publicações da marca embebidas: Instagram, TikTok, LinkedIn e vídeos do Google Drive, todas com o mesmo estilo de cartão e pré-visualização. |
| Sobre Nós | `/SobreNos` | Missão, visão e apresentação da equipa. |
| Contactos | `/Contactos` | Formulário de contacto com validação. O botão só fica ativo quando os campos obrigatórios estão preenchidos, e depois de enviar aparece um aviso de sucesso ou de erro. Ao lado ficam os contactos diretos (email, telefone, Instagram). |

Em todas as páginas há uma barra de navegação (`Navbar`) e um rodapé (`Footer`).

---

## Requisitos

Antes de começar, precisas de ter instalado:

- **[Node.js](https://nodejs.org/)**, versão 18 ou mais recente (recomendada a LTS). O npm vem incluído.
- **[Git](https://git-scm.com/)**, para clonar o repositório.

Para confirmar que estão instalados, corre no terminal:

```bash
node -v
npm -v
git --version
```

---

## Instalação

**1. Clonar o repositório**

```bash
git clone https://github.com/nicoly05/Mais55.git
cd Mais55
```

**2. Instalar as dependências**

```bash
npm install --legacy-peer-deps
```

> É preciso usar `--legacy-peer-deps` porque o projeto tem versões de bibliotecas que entram em conflito entre si (por exemplo, Material UI v4 e v6). Sem esta opção, o `npm install` (e também o `npm ci`) falha.

**3. Arrancar em modo de desenvolvimento**

```bash
npm start
```

O site abre em [http://localhost:3000](http://localhost:3000) e atualiza sozinho sempre que guardas um ficheiro.

**4. Gerar a versão de produção**

```bash
npm run build
```

Os ficheiros finais ficam na pasta `build/`, prontos para publicar em qualquer alojamento estático (Netlify, Vercel, here.now, etc.). Como o site usa React Router, o alojamento tem de redirecionar todas as rotas para `index.html`. Se o alojamento não tiver essa opção, copia `build/index.html` para `build/404.html`.

---

## Principais bibliotecas

| Biblioteca | Para que serve |
|---|---|
| `react`, `react-dom` | Base do site |
| `react-router-dom` | Navegação entre páginas |
| `@mui/material`, `@material-ui/core`, `@emotion/*` | Componentes de interface |
| `@emailjs/browser` | Envio do formulário de contacto por email |
| `recharts` | Gráficos |
| `jspdf` | Geração de PDFs |
| `react-scripts` | Ferramentas do Create React App (servidor local e build) |

Todas são instaladas automaticamente no passo 2.

---

## Formulário de contacto (EmailJS)

O formulário da página **Contactos** envia as mensagens através do [EmailJS](https://www.emailjs.com/), que é gratuito até 200 emails por mês. Não é preciso nenhum servidor.

1. Cria uma conta no EmailJS e liga um serviço de email em **Email Services**. Isso dá-te o **Service ID**.
2. Cria um template do tipo **Contact Us** em **Email Templates**, usando as variáveis `{{nome}}`, `{{email}}`, `{{telemovel}}`, `{{empresa}}`, `{{setor}}`, `{{servico}}` e `{{mensagem}}`, e põe `{{email}}` no campo **Reply To**. Isso dá-te o **Template ID**.
3. Copia a **Public Key** em **Account → General**.
4. Põe os três valores no topo de `src/pages/Contactos.js`:

```js
const EMAILJS_SERVICE_ID = 'service_xxxx';
const EMAILJS_TEMPLATE_ID = 'template_xxxx';
const EMAILJS_PUBLIC_KEY = 'a_tua_public_key';
```

> A Public Key não é secreta e pode ficar no código. Para evitar abusos, define o domínio do site em **Account → Security → Allowed domains**.

---

## Estrutura do projeto

```
Mais55/
├── public/                 # Ficheiros públicos (index.html, vídeo da home, logos, política de privacidade)
├── src/
│   ├── App.js              # Rotas do site
│   ├── App.css             # Cores e estilos globais
│   ├── pages/              # Páginas (Home, Servicos, Projetos, BrandInstagram, SobreNos, Contactos)
│   ├── components/         # Componentes reutilizáveis
│   │   ├── Navbar.js
│   │   ├── Footer.jsx
│   │   ├── SocialEmbed.jsx     # Cartão de vídeo (Instagram, TikTok, LinkedIn, Drive)
│   │   ├── InstagramEmbed.jsx
│   │   ├── InstagramMedia.js
│   │   └── ServicosRows.js
│   ├── styles/             # Um ficheiro CSS por página ou componente
│   ├── assets/             # Imagens, fotos e logos
│   │   └── brands/         # Logos das marcas (ficheiros terminados em _branco.png)
│   └── data/               # Dados de exemplo (mockData.json)
└── package.json
```

---

## Como acrescentar uma marca nova

1. Põe o logo branco em `src/assets/brands/` com o nome `<id>_branco.png`, sem espaços nem acentos.
2. Acrescenta a marca ao array `imagens` em `src/pages/BrandInstagram.js`, com o mesmo `id` e os links das publicações.
3. Confirma em `npm start` que a marca aparece em **Projetos**.

> Um ficheiro com um nome inválido (com espaços, acentos ou uma extensão errada) pode impedir a página Projetos de abrir.

---

## Problemas comuns

| Problema | Solução |
|---|---|
| `npm install` dá um erro de *peer dependencies* (ERESOLVE) | Usa `npm install --legacy-peer-deps`. |
| Um erro de OpenSSL ao fazer `npm start` | Os scripts já incluem `--openssl-legacy-provider`. Confirma que estás a usar `npm start` e não `react-scripts start` diretamente. |
| A página Projetos não abre | Verifica os nomes dos ficheiros novos em `src/assets/brands/`. |
| O formulário mostra um erro ao enviar | Confirma os três IDs do EmailJS e abre a consola do browser (Cmd+Option+J no Mac) para ver a mensagem de erro. |
| Avisos amarelos no terminal ao compilar | São avisos (warnings), não impedem o site de funcionar. |
