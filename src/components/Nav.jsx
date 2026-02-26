import { useState, useEffect } from "react";

const Nav = () => {
  const [county, setCountry] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/independent?status=true")
    .then((response) => response.json())
    .then((data) => setCountry(data))
    .catch((error) => {
      console.log(error);
    })
  })
  return(
    
    <div>
      
    </div>
    
  )
}

export default Nav;