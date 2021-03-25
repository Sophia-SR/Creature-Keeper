import React from 'react'; 

const viewSightings = () => {
    
   const apiFetch = () =>{

        
        fetch('http://localhost:3001/sightings')
        .then((response) => response.json())
        .then((json) => console.log(json))

   }
    return(
        <div>
            Animal Sightings <br/>
            <button onClick ={apiFetch}>Get Data</button>
        </div>
    );
}

export default viewSightings;