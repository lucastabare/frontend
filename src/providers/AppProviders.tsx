import { ReactNode, useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { theme } from '../theme';

type Props = { children: ReactNode };

export default function AppProviders({ children }: Props) {
    const [qc] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: false,
                        retry: 1,
                        staleTime: 60 * 1000,
                    },
                },
            })
    );

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <QueryClientProvider client={qc}>
                {children}
            </QueryClientProvider>
        </ThemeProvider>
    );
}
