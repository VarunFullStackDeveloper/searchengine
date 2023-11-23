export const CustomerOtpVerifyPage=()=>{
    return(
    <>
    <div class="container">
    <input type="checkbox" id="check"/>
    <div class="login form">
      <header>Login</header>
      <form action="#">
        <label></label>
        <input type="number" placeholder="Enter your 6 digit otp"/>
        <input type="button" class="button" value="Verify OTP"/>
      </form>
      <div class="signup">
        <span class="signup">Go back to signup page?
        <label for="check"><a href="customer_signup">click here!</a></label> | <label for="check"><a href="home">home</a></label>
        </span>
      </div>
    </div>
    </div>
    </>);
  }