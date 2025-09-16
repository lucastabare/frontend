import { Box, type BoxProps } from '@mui/material';

export default function WhiteBox({ sx, ...rest }: BoxProps) {
    return (
        <Box
            sx={{
                p: 2,
                bgcolor: '#fff',
                borderRadius: 1,
                ...sx,
            }}
            {...rest}
        />
    );
}
