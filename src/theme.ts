import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

let theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: purple[500],
        },
        secondary: {
            main: green[500],
        },
    },
});

let lightTheme = createMuiTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: green[500],
        },
    },
});

theme = responsiveFontSizes(theme);
export const light = responsiveFontSizes(lightTheme);

export default theme;
