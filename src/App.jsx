import './App.css'
import Header from './components/Header'
import { createContext, useState } from 'react'

export const ThemeContext = createContext({});

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext value={{darkMode, setDarkMode}}>
      <Header />
    </ThemeContext>
  )
}

export default App
