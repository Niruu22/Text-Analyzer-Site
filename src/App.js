import { useState } from "react";
import "./App.css";
// import About from './components/About';
// import Form1 from './components/Form1';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");

  const [alert, setalert] = useState(null);

  const showAlert = (message,type)=>{
    setalert({
      msg : message,
      type : type
    })

    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setmode("dark");
      document.body.style.backgroundColor= "#053667";
      showAlert("Dark mode has been enabled","success");
    }else{
      setmode("light");
      document.body.style.backgroundColor= "white";
      showAlert("Light mode has been enabled","success");
    }
  }

  const toggleRed = ()=>{
    if(mode === 'light'){
      setmode("dark");
      document.body.style.backgroundColor= "red";
      showAlert("Dark mode has been enabled","success");
    }else{
      setmode("light");
      document.body.style.backgroundColor= "white";
      showAlert("Light mode has been enabled","success");
    }
  }

  const toggleGreen =()=>{
    if(mode === 'light'){
      setmode("dark");
      document.body.style.backgroundColor= "green";
      showAlert("Dark mode has been enabled","success");
    }else{
      setmode("light");
      document.body.style.backgroundColor= "white";
      showAlert("Light mode has been enabled","success");
    }
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title="Text Analyzer" about="About Us" mode={mode} toggleMode={toggleMode} redMode={toggleRed} greenMode={toggleGreen} to/>

      <Alert alert={alert} />

      <div className="container m-3">
      {/* <Routes> */}
          {/* <Route path="/about" element={<About/>}>
            
          </Route> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
        {/* </Routes> */}
        
      </div>
      {/* </Router> */}
      {/* <div className="container">
    <About/>
    </div> */}






      {/* <div className="container">
    <Form1 heading="Enter the text to analyze" summary="Your text summary"/>
    </div> */}
    </>
  );
}

export default App;
