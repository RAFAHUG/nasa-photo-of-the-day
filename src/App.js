import React, { useState, useEffect } from "react";
import axios from "axios" ;  
import "./App.css";
import NasaPhoto from "./Components/NasaPhoto";

function App() {

  const [ data, setData ] = useState () ; 

    useEffect ( () => {
      axios.get( 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY' )

      .then( res => {
        setData(res.data);
      })

      .catch ( err => {console.error(err)})

    },  []); 

  return (
    <div className="App">
      { data &&  <NasaPhoto photo = {data}/> }
    </div>
  );
}

export default App;

//https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY

/**data: 
date :"2022-12-08"
explanation :"A camera on board the uncrewed Orion spacecraft captured this view on December 5 as Orion approached its return powered flyby of the Moon.  Below one of Orion's extended solar arrays lies dark, smooth, terrain along the western edge of the Oceanus Procellarum. Prominent on the lunar nearside Oceanus Procellarum, the Ocean of Storms, is the largest of the Moon's lava-flooded maria. The lunar terminator, shadow line between lunar night and day, runs along the left of the frame. The 41 kilometer diameter crater Marius is top center, with ray crater Kepler peeking in at the edge, just right of the solar array wing. Kepler's bright rays extend to the north and west, reaching the dark-floored Marius. Of course the Orion spacecraft is now headed toward a December 11 splashdown in planet Earth's water-flooded Pacific Ocean."
hdurl: "https://apod.nasa.gov/apod/image/2212/art001e002132.jpg"
title: "Orion and the Ocean of Storms"
*/