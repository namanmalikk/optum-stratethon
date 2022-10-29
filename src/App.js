import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Conditions from "./scenes/conditions";
import Immunisations from "./scenes/immunisations";
import Medications from "./scenes/medications";
import Observations from "./scenes/observations";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <>
    <ColorModeContext.Provider value={colorMode}>
       <ThemeProvider theme={theme}>
         <CssBaseline />
        <div className="app" >
          <main className="component">
            <Topbar/>
            <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/observations" element={<Observations/>} />
                <Route path="/immunisations" element={<Immunisations/>} />
                <Route path="/conditions" element={<Conditions/>} />
                <Route path="/medications" element={<Medications/>} />
            </Routes>
          </main>
        </div>
       </ThemeProvider>
     </ColorModeContext.Provider>
    </>
    
  )
}

export default App