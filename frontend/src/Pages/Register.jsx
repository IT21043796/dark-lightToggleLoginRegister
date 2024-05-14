import { useEffect, useState } from "react";
import { Toggle } from "../components/Toggle";
import { useNavigate } from "react-router-dom"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import './Register.css';
import axios from 'axios'

function Register() {
  const [name, setName] = useState();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [rePwd, setRePwd] = useState();
  
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate(); 
  
  const HandleSubmit = (e) =>{
    e.preventDefault()
    console.log(password)
    if(password==rePwd){
      axios.post('http://127.0.0.1:3001/register',{name,username,email,password})
        .then(result=> {
            console.log(result)
            if(result.data !="exist"){
              alert("User registered successfully!");
                navigate('/')
            }
        })
        .catch(err=>console.log(err))
    } else{
      console.log("passwordDoenst match")
    }
    
  }

  const toggleTheme = () => {
    setIsDark(prevIsDark => !prevIsDark);
  };

  useEffect(() => {
    document.body.dataset.theme = isDark ? "dark" : "light";
  }, [isDark]);

  const goToLogin = () => {
    navigate("/");
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
            <h1 className="Title_01">Welcome!</h1>
            <h3 className="Title_02">Let's setup your Account</h3>
          <form onSubmit={HandleSubmit}>
            <label className="custom-input">
              < DriveFileRenameOutlineOutlinedIcon className="icon"/>
              <input 
                type="Text" 
                placeholder="Full Name"
                name="fName"
                onChange={(e) => setName(e.target.value)}  
              >
              </input>
            </label>
            <br/>
            <label className="custom-input">
              <AlternateEmailOutlinedIcon className="icon"/>
              <input 
                type="Text" 
                placeholder="adam@email.com"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              >
              </input>
            </label>
            <label className="custom-input">
              <PersonOutlineOutlinedIcon className="icon"/>
              <input 
                type="Text" 
                placeholder="username"
                name="username"
                onChange={(e)=> setUserName(e.target.value)}  
              >
              </input>
            </label>
            <label className="custom-input">
              <FontAwesomeIcon icon={faKey} className="icon"/>
              <input 
                type="password" 
                placeholder="Password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              >
              </input>
            </label>
            <label className="custom-input">
              <FontAwesomeIcon icon={faKey} className="icon"/>
              <input 
                type="password"   
                placeholder="Re enter password"
                name="rePWd"
                onChange={(e) => setRePwd(e.target.value)}
              >
              </input>
            </label>
            <button className="activeButton btn">SIGN UP</button>
            <button className="inactiveButton btn" onClick={goToLogin}>LOG IN</button>    
          </form>      
        </center>
      </div>
    </div>
  );
}

export default Register;
