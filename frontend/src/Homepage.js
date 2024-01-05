import React, {useEffect} from "react";
import axios from "axios";



function Homepage() {
  


  useEffect(function fetchData() {
    async function getArtists() {
      const res = await axios.get(`https://api.jamendo.com/v3.0/artists/?client_id=c85b065b&format=jsonpretty&limit=10`);
      console.log(res.data)
    }
    getArtists()
  },[])


  return (
    <div>
      <h1>Welcome!!!</h1>
    </div>
  )
}

export default Homepage;