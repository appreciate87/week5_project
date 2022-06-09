import React from "react";
import './App.css';
import {  
  Routes, 
  Route, 
} from "react-router-dom";
import { auth } from "./components/shared/firebase";
import Header from "./components/layout/Header";
import HeaderLogin from "./components/layout/HeaderLogin";
// import Styled from "styled-components";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Write from "./components/Write";
import Detail from "./components/Detail";
import { onAuthStateChanged } from "firebase/auth";





function App() {

  const [is_login, setIs_login] = React.useState(false);

  console.log(auth.currentUser);

    const loginCheck = async (user) => {
      if (user) {
        setIs_login(true);
      } else {
        setIs_login(false);
      }
    }
    React.useEffect(()=>{
      onAuthStateChanged(auth, loginCheck);
    },[]);
  

  return (
    <div className="App">
            
        {is_login === false ? (
          <><Header/></>) : (<><HeaderLogin/></>)}          
        <Routes>
              <Route path="/" element={<Home />}/> 
              <Route path="/signup" element={<SignUp />}/>
              <Route path="/Login" element={<Login />}/> 
              <Route path="/write" element={<Write/>}/>
              <Route path="/detail" element={<Detail />}/>
        </Routes>
    </div>
  );
}





export default App;
