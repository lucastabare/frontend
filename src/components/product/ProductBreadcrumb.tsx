import { Breadcrumbs } from '@mui/material';
import ALink from '../ui/ALink';

type Props = {
  category?: string;
  brand?: string;
  title?: string;
  currentHref?: string; // opcional, si querés controlar el href del último ítem
};

const CATEGORY_LABELS: Record<string, string> = {
  cellphone: 'Celulares y Teléfonos',
  tv: 'TVs',
  notebook: 'Notebooks',
  audio: 'Audio',
};

function labelCategory(cat?: string) {
  if (!cat) return undefined;
  return CATEGORY_LABELS[cat] ?? capitalize(cat.replace(/[-_]/g, ' '));
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function truncate(s = '', max = 80) {
  return s.length > max ? s.slice(0, max - 1) + '…' : s;
}

export default function ProductBreadcrumb({ category, brand, title, currentHref }: Props) {
  const catLabel = labelCategory(category);
  const lastHref = currentHref || window.location.pathname;

  return (
    <Breadcrumbs aria-label="breadcrumb" separator="›" sx={{ mb: 2 }}>
      <ALink to="/" title="Inicio" />

      {catLabel && (
        <ALink
          to={`/?category=${encodeURIComponent(category!)}`}
          title={catLabel}
        />
      )}

      {brand && (
        <ALink
          to={`/?brand=${encodeURIComponent(brand)}`}
          title={brand}
        />
      )}

      <ALink
        to={lastHref}
        title={truncate(title, 80)}
      />
    </Breadcrumbs>
  );
}
