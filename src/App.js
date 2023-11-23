import { Routes, Route, BrowserRouter } from "react-router-dom";
import { CustomerLoginPage } from "./pages/customer_pages/customer_login";
import { CustomerSignupPage } from "./pages/customer_pages/customer_signup";
import { HomePage } from "./pages/home";
import { BusinessLoginPage } from "./pages/business_pages/business_login";
import { BusinessSignpPage } from "./pages/business_pages/business_signup";
const App = () =>{
    return(
        <>
        <div>
        <BrowserRouter>
        <Routes>
            <Route index element={<HomePage></HomePage>} />
            <Route path="/home" element={<HomePage></HomePage>}></Route>
            <Route path="/customer/login" element={<CustomerLoginPage></CustomerLoginPage>}></Route>
            <Route path="/customer/signup" element={<CustomerSignupPage></CustomerSignupPage>}></Route>
            <Route path="/business/login" element={<BusinessLoginPage></BusinessLoginPage>}></Route>
            <Route path="/business/signup" element={<BusinessSignpPage></BusinessSignpPage>}></Route>
        </Routes>
        </BrowserRouter>
        </div>
        </>);
}
export default App;