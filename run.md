
# Requisitos
Node.js 18+ (recomendado 20)
npm / yarn / pnpm (usa uno)
(Opcional) Docker y Docker Compose

## Variables de entorno

La app usa Vite y lee VITE_API_BASE_URL en tiempo de build.
Crea un archivo .env.local en frontend/ (o exporta la variable antes de build):

```bash
VITE_API_BASE_URL=http://localhost:8080/api/v1
```

## Run local 
```bash
# dentro de /frontend
npm install
npm run dev
# abre http://localhost:5173
```

## Ejecutar con Docker 

### 1 - Build de la imagen 
```bash
# dentro de /frontend
docker build \
  --build-arg VITE_API_BASE_URL=http://localhost:8080/api/v1 \
  -t meli-frontend .
```

### 2 - Run del contenedor
```bash
docker run --rm -p 5173:80 meli-frontend
# abre http://localhost:5173
```

