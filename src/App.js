import { ThemeProvider } from "@mui/material";
import { Routes, Route} from "react-router-dom";
import theme from "./Components/theme";
import "./App.css";
import Main from "./Components/Main.jsx";
import Form from "./Components/Form.jsx";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/register" element={<Form />} />

        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
