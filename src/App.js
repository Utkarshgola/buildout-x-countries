import Countries from "./Countries"
import { useEffect, useState } from "react";


function App() {
  const [countries,setCountries] = useState([]);

   useEffect(()=>{
    fetchCountries()
   },[])

    const fetchCountries = async ()=>{
      try {
       const res = await fetch("https://xcountries-backend.azurewebsites.net/all");
       const data = await res.json();
       setCountries(data);
        
      } catch (error) {
        console.error("Error fetching data: ",error )
      }
    };

  return (
    <div className="App" >
    
    <div className="country-list" style={{
      display:"flex",
      flexWrap:"wrap",
      gap:"10px"
    }}>
      {countries.map((country) => (
        <Countries 
          name={country.name} 
          flag={country.flag} 
          abbr={country.abbr} 
          key={country.abbr} // Assuming abbreviation is unique
        />
      ))}
    </div>
  </div>
  );
}

export default App;


