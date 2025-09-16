import { Box } from '@mui/material';

type Props = { url: string; active?: boolean; onClick?: () => void };

export default function ThumbTile({ url, active, onClick }: Props) {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: 64,
        height: 64,
        borderRadius: 1,
        border: active ? '2px solid #3483FA' : '1px solid #e0e0e0',
        cursor: 'pointer',
        overflow: 'hidden',
        bgcolor: '#fff',
        flex: '0 0 auto',
      }}
      role="button"
      tabIndex={0}
    >
      <img
        src={url}
        alt="thumb"
        style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
      />
    </Box>
  );
}
