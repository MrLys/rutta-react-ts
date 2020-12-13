import React from 'react';
import './App.css';
import { Route } from "react-router-dom";

import 'react-pro-sidebar/dist/css/styles.css';
import HabitsPage from "./pages/habits/habits.component";
import {MuiThemeProvider} from "@material-ui/core";
import theme from "./theme";
import InhouseThemeProvider from "./components/theme-provider/theme-provider.component";
import CssBaseline from "@material-ui/core/CssBaseline";


function App() {
  return (
    <div className="App">
            <InhouseThemeProvider  >
        <Route exact path="/habits" component={HabitsPage} />
            </InhouseThemeProvider>
    </div>
  );
}

export default App;
