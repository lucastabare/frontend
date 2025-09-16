import { Stack } from '@mui/material';
import ThumbTile from './ThumbTile';
import MoreTile from './MoreTile';
import { MAX_VISIBLE_THUMBS } from './constants';
import type { Picture } from '../../../interfaces/types';
import { MAIN_H } from './constants';

type Props = {
  pics: Picture[];
  activeIndex: number;
  onPick: (idx: number) => void;
  onOpenAll: () => void;
};

export default function VerticalThumbs({ pics, activeIndex, onPick, onOpenAll }: Props) {
  const hasOverflow = pics.length > MAX_VISIBLE_THUMBS;
  const visible = hasOverflow ? pics.slice(0, MAX_VISIBLE_THUMBS - 1) : pics;
  const overflowCount = hasOverflow ? pics.length - (MAX_VISIBLE_THUMBS - 1) : 0;
  const previewUrl = pics[Math.min(MAX_VISIBLE_THUMBS - 2, pics.length - 1)].url;

  return (
    <Stack
      spacing={1}
      sx={{
        display: { xs: 'none', md: 'flex' },
        maxHeight: {MAIN_H},
        overflowY: 'auto',
        pr: 0.5,
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        '&::-webkit-scrollbar': { display: 'none' },
      }}
    >
      {visible.map((p, idx) => (
        <ThumbTile key={p.id ?? idx} url={p.url} active={idx === activeIndex} onClick={() => onPick(idx)} />
      ))}
      {hasOverflow && <MoreTile count={overflowCount} previewUrl={previewUrl} onClick={onOpenAll} />}
    </Stack>
  );
}
