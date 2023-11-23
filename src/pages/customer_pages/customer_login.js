export const CustomerLoginPage=()=>{
    return(
    <>
    <div class="container">
    <input type="checkbox" id="check"/>
    <div class="login form">
      <header>Login</header>
      <form action="#">
        <input type="text" placeholder="Enter your email or mobilenumber"/>
        <input type="password" placeholder="Enter your password"/>
        <a href="#">Forgot password?</a>
        <input type="button" class="button" value="Login"/>
      </form>
      <div class="signup">
        <span class="signup">Don't have an account?
         <label for="check"><a href="signup">signup</a></label> | <label for="check"><a href="home">home</a></label>
        </span>
      </div>
    </div>
    </div>
    </>);
  }