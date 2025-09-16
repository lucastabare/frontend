# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```


# Frontend – MercadoLibre PDP (React + Vite)
PDP (product detail page) estilo MercadoLibre, conectada al backend Go.
Diseño con MUI, Atomic Design y layout responsivo.

Autor: Desarrollado por Lucas Tabaré.

## Cómo ejecutar

Ver frontend/run.md.

## ✨ Features

Catálogo / PDP completa

Breadcrumb + acciones superiores (“Compartir”, “Vender uno igual”)

Galería con thumbs verticales, zoom on hover, visor modal y “+N”

Quick info (estado, vendidos, rating, highlights)

Specs dinámicas (se leen del backend) con grupos y “ver más”

Descripción corta/larga con expand/collapse

Reviews & ratings

Right rail (sticky con scroll propio)

Precio, envíos, selector de cantidad, botones de acción reutilizables (UI/Button)

Medios de pago con logos y cuotas

Reputación del vendedor

Otras opciones de compra

Recomendados en el rail

Sliders full-width: “Vistos recientemente / Recomendados / Publicidad”

Ads: carrusel autónomo 1×1 que rota cada N segundos (desde /api/v1/ads)

UI kit: ALink, UIButton, WhiteBox, componentes de producto, etc.

Tipografías: soporta font OTF por CSS global.

## 🧰 Stack

React 18 + Vite

TypeScript

MUI (Material UI)

Axios para API

Atomic Design para componentes

Docker (build Nginx para prod)

## 🗂️ Estructura

```bash
frontend/
  public/                  # estáticos
  src/
    components/
      pdp/                 # PDPHeader, PDPMain, PDPRightRail, PDPBody, PDPSliders
      product/             # Gallery, QuickInfo, Price, Payments, Seller, Specs, Reviews, ...
      ui/                  # ALink, UIButton, WhiteBox, etc.
      product/skeleton/    # (opcional) skeletons
    interfaces/            # types (Product, Seller, PaymentMethod, Ads, ...)
    service/
      api.ts               # axios instance (baseURL = VITE_API_BASE_URL)
      workflow.ts          # orquesta llamadas (products, sellers, payments, ads)
    routes/                # router
    providers/             # ThemeProvider, etc.
    styles/                # fonts.css, globales
    theme.ts               # tema MUI (colores, tipografías)
    App.tsx
    main.tsx
  .env.local               # VITE_API_BASE_URL
  run.md                   # guía de ejecución
  Dockerfile               # build producción (Nginx)
  nginx.conf               # SPA fallback
  package.json
```

## ⚙️ Config

VITE_API_BASE_URL (por defecto http://localhost:8080/api/v1)

Se define en .env.local o como --build-arg al construir la imagen Docker.

Vite la inyecta en build (si la cambiás, volver a compilar).

🔌 Integración API (principales)

GET /products?q=&limit=&offset=

GET /products/:id

GET /products/:id/description

GET /products/:id/seller → { seller_id }

GET /products/:id/similar?limit=K

GET /products/:id/related?limit=K

GET /sellers/:id

GET /payments/methods

GET /ads → [ { id, image, href, alt }, ... ]

## 🧪 Scripts

```bash
npm run dev
npm run build
npm run preview
```

