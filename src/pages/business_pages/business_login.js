import React, { useState } from 'react';
import MapComponent from '../../components/map';

export const BusinessLoginPage =()=>{
    const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
    const handleMapPosition = (newPosition) => {
        setPosition(newPosition);
      };
    return(
    <>
    <div class="container">
    <input type="checkbox" id="check"/>
    <div class="login form">
      <header>Login</header>
      <form action="#">
        <input type="text" placeholder="Enter your email or mobilenumber"/>
        <input type="password" placeholder="Enter your password"/>
        <a href="businesslogin">
        <button class="buttonbusineesslogin" value="business account">Login</button></a>
      </form>
      {/* <div>
          <label>Location:</label>
          <MapComponent setPosition={handleMapPosition} />
        </div> */}
        <div class="signup">
        <span class="signup">Don't have an account?
         <label for="check"><a href="signup">signup</a></label> | <label for="check"><a href="home">home</a></label>
        </span>
      </div>
    </div>
    </div>
    </>);
  }