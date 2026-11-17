// ====== Datos de la colección (agrega aquí artículos nuevos) ======
const ARTICLES = [
  {
    theme: 'cielo',
    emoji: '🌤️',
    title: '¿Por qué el cielo es azul?',
    desc: 'La dispersión de Rayleigh: las moléculas de aire dispersan mucho más el azul que el rojo.',
    tags: ['rayleigh', 'longitud de onda', 'atardecer'],
    url: 'blog-cielo-azul/index.html',
    time: 3
  },
  {
    theme: 'arcoiris',
    emoji: '🌈',
    title: '¿Por qué se forman los arcoíris?',
    desc: 'Refracción, reflexión interna y dispersión: cada gota es un pequeño prisma.',
    tags: ['refracción', 'gotas', 'arco secundario'],
    url: 'blog-arcoiris/index.html',
    time: 3
  },
  {
    theme: 'estrellas',
    emoji: '🌟',
    title: '¿Por qué titilan las estrellas?',
    desc: 'La turbulencia atmosférica desvía la luz estelar millones de veces por segundo.',
    tags: ['centelleo', 'turbulencia', 'óptica adaptativa'],
    url: 'blog-estrellas/index.html',
    time: 3
  },
  {
    theme: 'nubes',
    emoji: '☁️',
    title: '¿Por qué las nubes son blancas?',
    desc: 'Las gotas de agua dispersan todos los colores por igual: la dispersión de Mie.',
    tags: ['mie', 'gotas', 'niebla', 'gris'],
    url: 'blog-nubes/index.html',
    time: 3
  },
  {
    theme: 'luna',
    emoji: '🌕',
    title: 'La "luna de sangre": eclipses lunares',
    desc: 'Todos los atardeceres de la Tierra, refractados y proyectados sobre la Luna.',
    tags: ['eclipse', 'umbra', 'rayleigh', 'polvo volcánico'],
    url: 'blog-luna/index.html',
    time: 3
  }
];

// ====== Inicialización ======
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('stat-posts').textContent = ARTICLES.length;

  initThemeToggle();
  initProgressBar();
  renderCards();
  initSearch();
  initSubscribe();
});

// ====== Modo oscuro/claro (compartido con los artículos) ======
function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
    btn.textContent = '☀️';
  }
  btn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    btn.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

// ====== Barra de progreso ======
function initProgressBar() {
  const bar = document.getElementById('progress-bar');
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const pct = total > 0 ? (scrolled / total) * 100 : 0;
    bar.style.width = pct + '%';
  });
}

// ====== Generación dinámica de tarjetas ======
function renderCards() {
  const grid = document.getElementById('cards-grid');
  ARTICLES.forEach((art, i) => {
    const card = document.createElement('a');
    card.className = 'card';
    card.href = art.url;
    card.dataset.theme = art.theme;
    card.dataset.search = (art.title + ' ' + art.desc + ' ' + art.tags.join(' ')).toLowerCase();
    card.style.animationDelay = (i * 0.1) + 's';

    // Banner (emoji via textContent, sin HTML inyectado)
    const banner = document.createElement('div');
    banner.className = 'card-banner';
    banner.textContent = art.emoji;

    const body = document.createElement('div');
    body.className = 'card-body';

    const h3 = document.createElement('h3');
    h3.textContent = art.title;

    const p = document.createElement('p');
    p.textContent = art.desc;

    const tags = document.createElement('div');
    tags.className = 'card-tags';
    art.tags.forEach(t => {
      const span = document.createElement('span');
      span.className = 'card-tag';
      span.textContent = '#' + t;
      tags.appendChild(span);
    });

    const link = document.createElement('span');
    link.className = 'card-link';
    link.textContent = `Leer → ${art.time} min.`;

    body.append(h3, p, tags, link);
    card.append(banner, body);
    grid.appendChild(card);
  });
}

// ====== Buscador de tarjetas ======
function initSearch() {
  const input = document.getElementById('search-input');
  const noResults = document.getElementById('no-results');

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.card');
    let visible = 0;

    cards.forEach(card => {
      const match = !q || card.dataset.search.includes(q);
      card.style.display = match ? '' : 'none';
      if (match) visible++;
    });

    noResults.classList.toggle('visible', visible === 0);
  });
}

// ====== Suscripción al newsletter ======
function initSubscribe() {
  const form = document.getElementById('subscribe-form');
  const msg = document.getElementById('subscribe-msg');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('subscribe-email').value.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (valid) {
      msg.textContent = '¡Suscripción exitosa! Bienvenido/a al boletín 📬';
      msg.className = 'msg success visible';
      form.reset();
      showToast('¡Bienvenido/a a CieloAzul! ✨');
    } else {
      msg.textContent = 'Por favor ingresa un correo válido.';
      msg.className = 'msg error visible';
    }
  });
}

// ====== Notificaciones tipo toast ======
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2500);
}
