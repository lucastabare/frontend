import { createTheme } from '@mui/material';

export const theme = createTheme({
    palette: {
        primary: { main: '#FFE600', contrastText: '#333' },
        secondary: { main: '#3483FA' },
        background: { default: '#f5f5f5' },
    },
    typography: {
        fontFamily: ['Inter', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    },
});
