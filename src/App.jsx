import "./App.css";
import Header from "./components/Header";
import { createContext, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";

export const ThemeContext = createContext({});

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:name" element={<CountryDetail />} />
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;