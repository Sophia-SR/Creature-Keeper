import React from 'react'

const AddSightings = () => {

const[animalName, setAnimalName] = React.useState("");
const[sightDate, setSightDate] = React.useState(""); 
const[sightLoc, setSightLoc] = React.useState(""); 
const[healthy, setHealthy] = React.useState(""); 
const[contact, setContact] = React.useState(""); 

const onSubmitForm = async e =>{
    e.preventDefault();
    try{
        const body = { "animal_name": animalName, "sighting_date": sightDate, "sighting_location": sightLoc, "healthy": healthy, "contact": contact  } 
        console.log(JSON.stringify(body));
        const response = await fetch("http://localhost:3001/sightings", {
            method: "POST", 
            headers: { "Content-Type" : "application/json",
                       "Accept": "application/json"
                    },body: JSON.stringify(body)
        });
        console.log(response)
        return response.json();
    } catch (err) {
        console.error(err.message); 
    }
};

    return (
        <>
        <div>
    <h2>Add New Sighting</h2>
    <form onSubmit={onSubmitForm}>
          <label>Animal Name</label>
          <input type="text" placeholder="Animal Name"  value={animalName} onChange={e => setAnimalName(e.target.value)}/>
          <label>Sighting Date</label>
          <input type="text" placeholder="Sighting Date" value={sightDate} onChange={e => setSightDate(e.target.value)} />
          <label>Sighting Location</label>
          <input type="" placeholder="Sighting Location" value={sightLoc} onChange={e => setSightLoc(e.target.value)} />
          <label>Healthy</label>
          <input type="radio" placeholder="Healthy"  value={healthy} onChange={e => setHealthy(e.target.value)} />
          <label>Contact</label>
          <input type="text" placeholder="" value={contact} onChange={e => setContact(e.target.value)} />
          <button type="submit">Submit</button>
          </form>
        </div>
        </>
    )
}

export default AddSightings;
