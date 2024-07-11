import React from 'react';
import './Login.css';
import 'bootstrap'
import LoginSignInForm from './LoginSignInForm';
import { useStore2 } from '../../Component/Zustand';
import UserDashboard from '../User/UserDashboard/UserDashboard';
// import LoginImage from  "../../assets/Images/LoginImage.jpg";


function Login() {

  const {isloggedin}=useStore2();
  return (
  <>{isloggedin?<UserDashboard/>:<LoginSignInForm/>}
      </>
  );
}

export default Login;