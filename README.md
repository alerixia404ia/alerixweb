# Alerix · web de marca personal

## Estructura
- index.html · aviso-legal.html · privacidad.html · cookies.html · 404.html
- css/styles.css (web) · css/legal.css (páginas legales y 404)
- js/main.js (carrusel y formulario)
- img/ (imágenes de proyectos, en WebP)
- favicon.svg · robots.txt · sitemap.xml · .htaccess

## Antes de publicar
1. Sustituye `TU-DOMINIO` en robots.txt y sitemap.xml, y añade el canonical en index.html.
2. Rellena nombre, NIF y domicilio en aviso-legal.html y privacidad.html (texto resaltado).
3. Crea un formulario en formspree.io y cambia `TU_ID` en index.html. Sin esto, el formulario abre el correo.
4. Revisa las garantías de transferencia de Formspree y Google en privacidad.html.

## Publicar en Hostinger
1. hPanel → Archivos → Administrador de archivos → public_html.
2. Sube todo el contenido de esta carpeta (incluido .htaccess).
3. Activa SSL gratis en hPanel y comprueba que carga por HTTPS.
4. Da de alta el dominio en Google Search Console y envía sitemap.xml.

## Añadir un proyecto al carrusel
En js/main.js, descomenta la línea de ejemplo del array `proyectos`. Pon la imagen en img/ y enlaza a la página del proyecto.
