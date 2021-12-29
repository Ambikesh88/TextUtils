import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm';
 import About from './components/About';
 import React, { useState } from 'react';
 import Alert from './components/Alert';
 
 import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
// import About from './components/About';
function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState('null');

  const showalert=(message,type)=>{
         setAlert({
           msg: message, 
           type: type
         })
         setTimeout(() => {
           setAlert(null);
         },1500);

         
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showalert("Dark Mode has been enabled","Success");
      document.title="TextUtils - Dark Mode";

    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showalert("Light Mode has been enabled","Success");
      document.title="TextUtils - Light Mode";



      
    }
  }
  return (
    // <div className="blank">Lovely</div>
    <>
      <Router>
    <Navbar title="TextUtils88" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">

    <Routes>
          <Route exact path="/about" element= {<About/>}/>

            {/* {<About />}
            </Route> */}
          <Route exact path="/" element={<TextForm  showalert={showalert} heading="Enter the text to analyse" mode={mode}/> }/>
    {/* {<TextForm  showalert={showalert} heading="Enter the text to analyse" mode={mode}/> } */}
          {/* </Route> */}
    </Routes>
    </div>
        </Router>
    {/* <About/> */}
    </>
  );
}
 
export default App;
