export const HomePage=()=>{
    return(
    <>
    <div class="homepagecontainer">
    <input type="checkbox" id="check"/>
    <div class="login form">
    <a href="customer/login">
    <button class="buttonhome" value="customer account">customer account</button></a>
    <a href="business/login">
    <button class="buttonhome" value="business account">business account</button>
    </a>
    </div>
    </div>
    </>);
  }