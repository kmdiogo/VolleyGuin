import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#a71930',
        },
        secondary: {
            light: '#A0A0A0',
            main: '#6d6d6d',
            contrastText: '#000',
        },
        contrastThreshold: 3,
        tonalOffset: 0.2,
    },
});