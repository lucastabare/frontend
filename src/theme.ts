import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: { main: '#FFE600', contrastText: '#333' },
        secondary: { main: '#3483FA' },
        background: { default: '#f5f5f5' },
    },
    typography: {
        fontFamily: ['Proxima Nova', 'Inter', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    },
});
