import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import api from '../../service/api';
import type { AdBanner } from '../../interfaces/types';

const INTERVAL_MS = 4000;

export default function ProductSponsored() {
  const [ads, setAds] = useState<AdBanner[]>([]);
  const [i, setI] = useState(0);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const data = await api.workflow.getAds();
        if (alive) setAds(data || []);
      } catch (e) { 
        console.log("Error => ", e.message)
       }
    })();
    return () => { alive = false; };
  }, []);

  useEffect(() => {
    if (ads.length <= 1) return;
    const t = setInterval(() => setI(prev => (prev + 1) % ads.length), INTERVAL_MS);
    return () => clearInterval(t);
  }, [ads.length]);

  if (!ads.length) return null;
  const ad = ads[i];

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom>Publicidad</Typography>
      <a
        href={ad.href || '#'}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'block' }}
        title={ad.alt || 'Publicidad'}
      >
        <img
          src={ad.image}
          alt={ad.alt || 'ad'}
          style={{
            width: '100%',
            display: 'block',
            borderRadius: 8,
            objectFit: 'cover',
            aspectRatio: '16/9'
          }}
        />
      </a>
    </Box>
  );
}
