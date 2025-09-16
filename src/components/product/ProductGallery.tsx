import { useMemo, useState, useCallback, useEffect } from 'react';
import { Box } from '@mui/material';
import VerticalThumbs from './gallery/VerticalThumbs';
import MobileThumbs from './gallery/MobileThumbs';
import MainImage from './gallery/MainImage';
import ViewerDialog from './gallery/ViewerDialog';
import { MAIN_H, THUMB } from './gallery/constants';
import type { Picture } from '../../interfaces/types';

type Props = { pictures: Picture[] };

export default function ProductGallery({ pictures }: Props) {
  const pics = useMemo<Picture[]>(
    () => (pictures?.length ? pictures : [{ id: 'ph', url: 'https://dummyimage.com/800x800/eeeeee/333333&text=A55' }]),
    [pictures]
  );

  const [i, setI] = useState(0);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [origin, setOrigin] = useState<'center center' | string>('center center');
  const [hover, setHover] = useState(false);

  const go = (dir: number) => setI((prev) => (prev + dir + pics.length) % pics.length);

  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setOrigin(`${x}% ${y}%`);
  }, []);

  useEffect(() => {
    if (!viewerOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') go(-1);
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'Escape') setViewerOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [viewerOpen, pics.length]);

  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: `${THUMB + 20}px 1fr` },
          columnGap: { xs: 0, md: 2 },
          rowGap: 1,
          alignItems: 'start',
        }}
      >
        <VerticalThumbs
          pics={pics}
          activeIndex={i}
          onPick={(idx) => { setI(idx); setViewerOpen(true); }}
          onOpenAll={() => setViewerOpen(true)}
        />

        <MainImage
          src={pics[i].url}
          hover={hover}
          origin={origin}
          onEnter={() => setHover(true)}
          onLeave={() => setHover(false)}
          onMove={onMove}
          onPrev={(e) => { e.stopPropagation(); go(-1); }}
          onNext={(e) => { e.stopPropagation(); go(1); }}
          onOpen={() => setViewerOpen(true)}
        />

        <MobileThumbs
          pics={pics}
          activeIndex={i}
          onPick={(idx) => { setI(idx); setViewerOpen(true); }}
          onOpenAll={() => setViewerOpen(true)}
        />
      </Box>

      <ViewerDialog
        open={viewerOpen}
        pics={pics}
        index={i}
        onClose={() => setViewerOpen(false)}
        onPrev={() => go(-1)}
        onNext={() => go(1)}
        onPick={(idx) => setI(idx)}
        hover={hover}
        origin={origin}
        onEnter={() => setHover(true)}
        onLeave={() => setHover(false)}
        onMove={onMove}
      />
    </>
  );
}
