import light from "../assets/light.svg"
import dark from "../assets/dark.svg"
import { useContext } from "react";
import { ThemeContext } from "../App";

const Header = () => {
  const {darkMode, setDarkMode} = useContext(ThemeContext);
  

  function theme() {
    const body = document.querySelector("body");
    setDarkMode(!darkMode);
    if(!darkMode){
      body.classList.add(`dark`)
    } else {
      body.classList.remove('dark')
    }
  }

  return(
    <div className="header">
      
      <h1>Where in the world?</h1>
      <button onClick={theme}>
        {darkMode ? (<><img src={dark} alt="" />
        <h3>Light Mode</h3></>) : (<><img src={light} alt="" />
        <h3>Dark Mode</h3></>)}
        
      </button>
    </div>
  )
}

export default Header;