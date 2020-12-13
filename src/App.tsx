import React from 'react';
import './App.css';
import { Route } from "react-router-dom";

import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import HabitsPage from "./pages/habits/habits.component";
import ThemeProvider from "./components/theme-provider/theme-provider.component";


function App() {
  return (
    <div className="App">
        <ThemeProvider >
        <Route exact path="/habits" component={HabitsPage} />
        </ThemeProvider>
    </div>
  );
}

export default App;
