import { createTheme } from "@mui/material";

const theme = createTheme({
  
   palette: {
    mode: "dark",
    primary: {
      main: "#00E5FF",       // neon cyan
      contrastText: "#000",  // black text inside cyan buttons
    },
    secondary: {
      main: "#FF4081",       // neon pink
      contrastText: "#fff",  // white text inside pink buttons
    },
    background: {
      default: "#0A0A0F",    // near-black page background
      paper: "#121212",      // cards/sections
      selection1: "#1C1F26"
    },
    text: {
      primary: "#E0E0E0",    // main text
      secondary: "#9E9E9E",  // muted text
    },
    divider: "rgba(255,255,255,0.12)",
  },
  typography: {
    fontFamily: "Inter, Roboto, sans-serif",
    h1: { fontFamily: "Orbitron, sans-serif" , fontSize:'6rem'},
    h2: { fontFamily: "Orbitron, sans-serif" },
    h3: { fontFamily: "Orbitron, sans-serif" },
    h4: { fontFamily: "Orbitron, sans-serif" },
    h5: { fontFamily: "Orbitron, sans-serif" },
    h6: { fontFamily: "Orbitron, sans-serif" },
  },
  shape: { borderRadius: 16 },
});

export default theme;
