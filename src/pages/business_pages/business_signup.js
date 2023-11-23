import React, { useState } from 'react';
import MapComponent from '../../components/map';

export const BusinessSignpPage = () =>{
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
      const handleMapPosition = (newPosition) => {
        setPosition(newPosition);
      };
  return(<>
  <div className='businessSignupContainer'>
    <div class="businessSignupForm">
    <header>Signup</header>
        <form>
        <input type="text" placeholder="Enter your username"/>
        <input type="number" placeholder="Enter your mobilenumber"/>
        <input type="email" placeholder="Enter your email"/>
        <input type="password" placeholder="Enter Your password"/>
        <input type="number" placeholder="Enter your zipcode"/>
        <input type="text" placeholder="Enter your street"/>
        <input type="text" placeholder="Enter your city"/>
        <input type="text" placeholder="Enter your state"/>
        <input type="text" placeholder="Enter your country"/>
        <label>Location:</label>
          <MapComponent setPosition={handleMapPosition} />
          </form>
        </div>
        </div>
  </>);
}