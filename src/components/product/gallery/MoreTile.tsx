import { Box, Typography } from '@mui/material';

type Props = { count: number; previewUrl: string; onClick: () => void };

export default function MoreTile({ count, previewUrl, onClick }: Props) {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: 64,
        height: 64,
        borderRadius: 1,
        border: '1px solid #e0e0e0',
        cursor: 'pointer',
        position: 'relative',
        bgcolor: '#fff',
        overflow: 'hidden',
        flex: '0 0 auto',
      }}
      role="button"
      tabIndex={0}
      title={`Ver ${count} más`}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          bgcolor: 'rgba(0,0,0,0.45)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h4" sx={{ color: '#fff', fontWeight: 700, fontSize: '12px' }}>
          +{count}
        </Typography>
      </Box>
      <img src={previewUrl} alt="more" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    </Box>
  );
}
