import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Roboto, sans-serif',
        h2: {
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
        },
        h4: {
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: 700,
        },
    },
    palette: {
        primary: {
            main: '#1976d2',
        },
        secondary: {
            main: '#ff4081',
        },
        background: {
            default: '#f5f5f5',
            paper: '#ffffff',
        },
    },
});

export default theme;