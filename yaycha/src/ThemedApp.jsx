/* eslint-disable no-unused-vars */
import { createContext, useState,useContext } from "react"
import {
  CssBaseline,
  ThemeProvider,
  createTheme,
 } from "@mui/material";
import App from "./App";
export const AppContext = createContext();
function ThemedApp() {
    const [mode,setMode] = useState("dark");
  return (
    <AppContext.Provider value={{mode,setMode}}>
        <App/>
    </AppContext.Provider>
    
  )
}

export default ThemedApp