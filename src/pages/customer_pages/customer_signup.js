import {  GoToCustomerOtpVerifyPage } from "../..";
export const CustomerSignupPage=()=>{
    return(
    <>
   <div class="container">
    <input type="checkbox" id="check"/>
    <div class="login form">
      <header>Signup</header>
      <form action="#">
        <input type="text" placeholder="Enter your username"/>
        <input type="number" placeholder="Enter your email or mobilenumber"/>
        <input type="button" class="button" onClick={GoToCustomerOtpVerifyPage} value="Signup"/>
      </form>
      <div class="signup">
        <span class="signup">Already have an account?
        <label for="check"><a href="login">login</a></label> | <label for="check"><a href="home">home</a></label>
        </span>
      </div>
    </div>
    </div>
    </>);
}