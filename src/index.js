import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import { CustomerOtpVerifyPage } from "./pages/customer_pages/customer_otp_verify";
import App from "./App";
import MapComponent from "./pages/business_pages/business_signup";
import { BusinessRegistrationForm } from "./pages/business_pages/business_login";



const root=ReactDOM.createRoot(document.getElementById("root"))



export const GoToCustomerOtpVerifyPage=()=>{
  root.render(<CustomerOtpVerifyPage/>)
}


root.render(<App></App>)