import React from 'react';
import './App.css';
import { Route } from "react-router-dom";

import 'react-pro-sidebar/dist/css/styles.css';
import HabitsPage from "./pages/habits/habits.component";
import InhouseThemeProvider from "./components/theme-provider/theme-provider.component";
import Feedback from "./components/feedback/feeckback.component";

const App = () => {
    return (
        <div className="App">
            <InhouseThemeProvider  >
                <Route path="/habits" component={HabitsPage} />
                <Feedback />
            </InhouseThemeProvider>
        </div>
    );
};
export default App;
