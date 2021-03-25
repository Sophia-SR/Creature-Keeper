import React from 'react'

const addSightings= () => {

    const [descr]
    
    return (
        <>
        <div class="user-detail">
    <h2>Add New Sighting</h2>
    <form >
          <label>Animal Name</label>
          <input type="text" placeholder="Animal Name" name="fullName" required/>
          <label>Sighting Date</label>
          <input type="email" placeholder="Enter Email Address" name="emailAddress" />
          <label>Sighting Location</label>
          <input type="city" placeholder="Enter Full City" name="city" required/>
          <label>Healthy</label>
          <input type="text" placeholder="Enter Full Country" name="country" required/>
          <label>Contact</label>
          <input type="text" placeholder="Enter Full Country" name="country" required/>
          <button type="submit">Submit</button>
          </form>
        </div>
        </>
    )
}

export default addSightings;
