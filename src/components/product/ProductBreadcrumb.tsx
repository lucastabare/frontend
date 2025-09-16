import { Breadcrumbs, Link as MUILink, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

type Props = {
  category?: string;
  brand?: string;
  title?: string;
};

const CATEGORY_LABELS: Record<string, string> = {
  cellphone: 'Celulares y Teléfonos',
  tv: 'TVs',
  notebook: 'Notebooks',
  audio: 'Audio',
  // agregá más si necesitás
};

function labelCategory(cat?: string) {
  if (!cat) return undefined;
  return CATEGORY_LABELS[cat] ?? capitalize(cat.replace(/[-_]/g, ' '));
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function truncate(s = '', max = 60) {
  return s.length > max ? s.slice(0, max - 1) + '…' : s;
}

export default function ProductBreadcrumb({ category, brand, title }: Props) {
  const catLabel = labelCategory(category);

  return (
    <Breadcrumbs aria-label="breadcrumb" separator="›" sx={{ mb: 2 }}>
      <MUILink component={RouterLink} underline="hover" color="inherit" to="/">
        Inicio
      </MUILink>

      {catLabel && (
        <MUILink
          component={RouterLink}
          underline="hover"
          color="inherit"
          to={`/?category=${encodeURIComponent(category!)}`}
        >
          {catLabel}
        </MUILink>
      )}

      {brand && (
        <MUILink
          component={RouterLink}
          underline="hover"
          color="inherit"
          to={`/?brand=${encodeURIComponent(brand)}`}
        >
          {brand}
        </MUILink>
      )}

      <Typography color="text.primary" noWrap title={title} sx={{ maxWidth: { xs: '100%', md: 520 } }}>
        {truncate(title, 80)}
      </Typography>
    </Breadcrumbs>
  );
}
