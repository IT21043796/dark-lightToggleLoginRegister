import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import { Toggle } from "../components/Toggle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Login.css'
import axios from 'axios'


function Login() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://127.0.0.1:3001/login',{userName,password})
    .then(result=> {
        console.log(result.data)
        if(result.data === "True"){
            alert("User authenticated");
            console.log("Okay user!");
        }else {
          console.log(result.data);
        }
        
    })
    .catch(err=>console.log(err))
} 

  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const toggleTheme = () => {
    setIsDark(prevIsDark => !prevIsDark);
  };

  useEffect(() => {
    document.body.dataset.theme = isDark ? "dark" : "light";
  }, [isDark]);

  // Function to navigate to the register page when the inactive button is clicked
  const goToRegister = () => {
    navigate("/register", { state: { isDark } });
  };

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Toggle
        isChecked={isDark}
        handleChange={toggleTheme}
      />
      <div className="ImageContaianer">
        <center>
          <div className="image"></div>
        </center>
      </div>

      <div className="Content">
        
        <center>
          <form onSubmit={handleSubmit}>
            <h1 className="Title_01">Welcome!</h1>
            <h3 className="Title_02">Sign in to your Account</h3>
            <label className="custom-input">
              <FontAwesomeIcon icon={faUser} className="icon"/>
              <input 
                type="Text" 
                placeholder="Username"
                name="uname"
                onChange={(e) => setUserName(e.target.value)}
              >
              </input>
            </label>
            <br/>
            <label className="custom-input">
              <FontAwesomeIcon icon={faKey} className="icon"/>
              <input 
                type="Password" 
                placeholder="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              >
              </input>
            </label>
            <h4 className="Title_01">Forgot Password</h4>
            <button className="activeButton btn">LOG IN</button>
            {/* Use onClick event to trigger the goToRegister function */}
            <button className="inactiveButton btn" onClick={goToRegister}>SIGN UP</button>
          </form>
          <br/>
          <h5 className="shade">OR LOGIN  WITH</h5>
          <table>
            <tr>
              <td><FacebookRoundedIcon fontSize="large" className="icon"/></td>
              <td><GoogleIcon fontSize="large" className="icon"/></td>
              <td><LinkedInIcon fontSize="large" className="icon"/></td>
            </tr>
          </table>
        </center>
      </div>
    </div>
  );
}

export default Login;
