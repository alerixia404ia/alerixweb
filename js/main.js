// Para añadir un proyecto, copia una línea y rellena título, descripción, imagen y enlace a su página.
const proyectos = [
  // { titulo: "Restaurante Ejemplo", desc: "Web con carta y reservas.", img: "img/ejemplo.webp", href: "proyectos/ejemplo/index.html" },
];

const track = document.getElementById('track');
const items = proyectos.length ? proyectos : [
  { titulo: "Próximamente", desc: "Aquí aparecerá la web de un restaurante." },
  { titulo: "Próximamente", desc: "Aquí aparecerá la web de un comercio." },
  { titulo: "Próximamente", desc: "Aquí aparecerá tu proyecto." }
];

items.forEach(p => {
  const el = document.createElement(p.href ? 'a' : 'div');
  el.className = 'slide';
  if (p.href) el.href = p.href;
  const media = p.img
    ? Object.assign(document.createElement('img'), { src: p.img, alt: 'Captura de ' + p.titulo, loading: 'lazy', width: 640, height: 400 })
    : Object.assign(document.createElement('div'), { className: 'ph', textContent: 'En preparación' });
  const txt = document.createElement('div');
  txt.className = 't';
  const h = document.createElement('h3'); h.textContent = p.titulo;
  const d = document.createElement('p'); d.textContent = p.desc;
  txt.append(h, d);
  el.append(media, txt);
  track.append(el);
});

const paso = () => track.querySelector('.slide').getBoundingClientRect().width + 20;
document.getElementById('prev').addEventListener('click', () => track.scrollBy({ left: -paso(), behavior: 'smooth' }));
document.getElementById('next').addEventListener('click', () => track.scrollBy({ left: paso(), behavior: 'smooth' }));

// Formulario: con Formspree configurado envía en la propia página; sin configurar, abre el correo.
const form = document.getElementById('form');
const estado = document.getElementById('estado');
form.addEventListener('submit', async e => {
  e.preventDefault();
  const datos = new FormData(form);
  if (datos.get('_gotcha')) return;
  if (form.action.includes('TU_ID')) {
    const cuerpo = `Nombre: ${datos.get('nombre')}\nCorreo: ${datos.get('email')}\n\n${datos.get('mensaje')}`;
    location.href = 'mailto:alerixia404@gmail.com?subject=' + encodeURIComponent('Consulta desde la web') + '&body=' + encodeURIComponent(cuerpo);
    estado.textContent = 'Se abrirá tu programa de correo para enviar el mensaje.';
    return;
  }
  estado.textContent = 'Enviando…';
  try {
    const r = await fetch(form.action, { method: 'POST', body: datos, headers: { Accept: 'application/json' } });
    if (!r.ok) throw new Error();
    form.reset();
    estado.textContent = 'Mensaje enviado. Te respondo por correo.';
  } catch {
    estado.textContent = 'No se ha podido enviar. Escríbeme a alerixia404@gmail.com.';
  }
});
