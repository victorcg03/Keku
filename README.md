# Keku Web

Sitio web de Keku Cervecería construido con Astro y Tailwind CSS.

## Características

- Astro v5 + Tailwind CSS v4
- i18n simple (ES/EN)
- Páginas: Inicio, Carta (ES), Menu (EN), Contacto (ES), Contact (EN)
- Carta poblada desde JSON curado (script de sincronización)
- PDFs descargables (Carta & Alérgenos, Menús especiales)
- Galería local tipo Instagram y mapa incrustado
- Layout tipo masonry estable (CSS columns)

## Estructura

- `src/layouts` – Layout base
- `src/pages` – Rutas Astro
- `src/data/menu.ts` – Datos de la carta (ES/EN)
- `public/` – Imágenes, PDFs, JSON curado
- `scripts/` – Utilidades para extraer/sincronizar carta

## Scripts

- `npm run dev` – Arranca el entorno de desarrollo
- `npm run build` – Genera la build de producción en `dist/`
- `npm run preview` – Previsualiza la build
- `npm run extract:menu` – Genera `src/data/menu.generated.json` a partir del PDF (heurístico)
- `npm run sync:menu` – Sustituye `menuES` en `src/data/menu.ts` con el generado
- `npm run sync:menu:curated` – Sustituye `menuES` desde `public/carta_keku_estructurada_curada.json` (recomendado)

## Desarrollo

1. Instala dependencias:

```powershell
npm install
```

2. Arranca el dev server:

```powershell
npm run dev
```

3. Construye para producción:

```powershell
npm run build
```

## Despliegue

El sitio es estático. Publica la carpeta `dist/` en tu hosting/CDN preferido (GitHub Pages, Netlify, Vercel, etc.).

## Notas

- El layout de la carta usa Masonry por columnas (CSS) para mayor estabilidad.
- Si prefieres el Masonry JS (por filas manteniendo orden estrictamente horizontal), reactívalo y usa `src/scripts/masonry.js`.
- El origen de verdad para la carta en ES es el JSON curado en `public/`.
