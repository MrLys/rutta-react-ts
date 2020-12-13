import React, {useState} from 'react';
import './theme-provider.styles.scss';
import {FormControlLabel, MuiThemeProvider} from "@material-ui/core";
import Switch from "@material-ui/core/Switch";
import {createMuiTheme, responsiveFontSizes} from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import CssBaseline from "@material-ui/core/CssBaseline";
import red from "@material-ui/core/colors/red";
const InhouseThemeProvider = (props: any) => {
    const [darkMode, setDarkMode] = useState(true);
    const palletType = darkMode ? 'dark' : 'light';
    const theme = responsiveFontSizes(createMuiTheme({
        palette: {
            type: palletType,
            primary: {
                main: green[500],
            },
            secondary: {
                main: red[500],
            },
            error: {
                main: red[500],
            }
        },
    }));
    console.log(theme);
    return (<div>
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
        <FormControlLabel
            control={
                <Switch
                    checked={darkMode}
                    onChange={() => setDarkMode(!darkMode)}
                    name="checkedB"
                    color="default"
                />
            }
            label="Dark Mode"
        />
        {props.children}
        </MuiThemeProvider>
    </div>)
}

export default InhouseThemeProvider;