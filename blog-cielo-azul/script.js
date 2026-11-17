// ====== Inicialización ======
document.addEventListener('DOMContentLoaded', () => {
  // Fecha actual y año
  const today = new Date().toLocaleDateString('es-ES', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
  document.getElementById('today-date').textContent = today;
  document.getElementById('year').textContent = new Date().getFullYear();

  initThemeToggle();
  initProgressBar();
  initLikes();
  initComments();
  initSearch();
  initSubscribe();
  initShare();
});

// ====== Modo oscuro/claro ======
function initThemeToggle() {
  const btn = document.getElementById('theme-toggle');
  // Restaurar preferencia guardada
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

// ====== Barra de progreso de lectura ======
function initProgressBar() {
  const bar = document.getElementById('progress-bar');
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const pct = total > 0 ? (scrolled / total) * 100 : 0;
    bar.style.width = pct + '%';
  });
}

// ====== Botón "Me gusta" ======
function initLikes() {
  const btn = document.getElementById('like-btn');
  const countSpan = document.getElementById('like-count');
  let likes = parseInt(localStorage.getItem('likes') || '0', 10);
  let liked = localStorage.getItem('liked') === 'true';
  countSpan.textContent = likes;
  if (liked) btn.textContent = `👍 Me gusta (${likes}) ✓`;

  btn.addEventListener('click', () => {
    liked = !liked;
    likes += liked ? 1 : -1;
    localStorage.setItem('likes', likes);
    localStorage.setItem('liked', liked);
    countSpan.textContent = likes;
    btn.classList.toggle('btn-primary', liked);
    showToast(liked ? '¡Gracias por tu like! 💙' : 'Like retirado');
  });
}

// ====== Comentarios ======
function initComments() {
  const form = document.getElementById('comment-form');
  const list = document.getElementById('comments-list');
  const countSpan = document.getElementById('comment-count');

  // Cargar comentarios guardados
  let comments = JSON.parse(localStorage.getItem('comments') || '[]');
  comments.forEach(renderComment);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('comment-name').value.trim();
    const text = document.getElementById('comment-text').value.trim();
    if (!name || !text) return;

    const comment = {
      name,
      text,
      date: new Date().toLocaleDateString('es-ES', {
        day: 'numeric', month: 'short', year: 'numeric'
      })
    };
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
    renderComment(comment);
    form.reset();
    showToast('Comentario publicado ✅');
  });

  function renderComment(comment) {
    const div = document.createElement('div');
    div.className = 'comment';
    div.innerHTML = `
      <span class="author"></span> · <span class="date">${comment.date}</span>
      <p class="text"></p>
    `;
    // Usamos textContent para evitar inyección de HTML (XSS)
    div.querySelector('.author').textContent = comment.name;
    div.querySelector('.text').textContent = comment.text;
    list.appendChild(div);
    countSpan.textContent = comments.length;
  }
}

// ====== Buscador de artículos ======
function initSearch() {
  const input = document.getElementById('search-input');
  const relatedItems = document.querySelectorAll('#related-posts li');
  const post = document.querySelector('.post');

  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    // Filtrar artículos relacionados
    relatedItems.forEach(li => {
      const haystack = (li.dataset.title + ' ' + li.textContent).toLowerCase();
      li.style.display = !q || haystack.includes(q) ? '' : 'none';
    });
    // Mostrar/ocultar artículo principal
    const haystack = (post.dataset.title + ' ' + post.textContent).toLowerCase();
    post.style.display = !q || haystack.includes(q) ? '' : 'none';
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
      msg.textContent = '¡Suscripción exitosa! Revisa tu correo 📬';
      msg.className = 'msg success';
      form.reset();
    } else {
      msg.textContent = 'Por favor ingresa un correo válido.';
      msg.className = 'msg error';
    }
  });
}

// ====== Compartir ======
function initShare() {
  document.getElementById('share-btn').addEventListener('click', async () => {
    const data = {
      title: document.title,
      url: window.location.href
    };
    if (navigator.share) {
      try { await navigator.share(data); } catch (_) { /* cancelado */ }
    } else {
      await navigator.clipboard.writeText(window.location.href);
      showToast('Enlace copiado al portapapeles 🔗');
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
