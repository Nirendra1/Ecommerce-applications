import React, { useState } from "react";
import "./Css/Loginsignup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import Signup from "./Signup";
const Signup = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [mobile, setmobile] = useState("");
    const [password, setpassword] = useState("");

    const navigate = useNavigate();
    // console.log(name,email,mobile,password)

    
    function handleSubmit() {
        if (!validateForm()) {
            return;
        }
     
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('mobile', mobile);
        localStorage.setItem('password', password);
        
        navigate("/login");
    }

    function validateForm() {
        // const nameRegex = /^[a-zA-Z]+$/;
        var nameRegex = /^[A-Z][a-z,.'-]+(?: [A-Z][a-z,.'-]+)*$/;
        var phoneNumRegex = /^\+?([0-9]{3})\)?[ -]?([0-9]{3})[ -]?([0-9]{4})$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        if (!nameRegex.test(name)) {
            alert("Invalid first name");
            return false;
        }
        if (!phoneNumRegex.test(mobile)) {
            alert("Input your mobile number")
            return false;
        }
        if (!emailRegex.test(email)) {
            alert("Invalid email");
            return false;
        }
        if (!passwordRegex.test(password)) {
            alert(
                "Invalid password. Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, and one digit."
            );
            return false;
        }
        return true;
    }
    
    return (
        <>
            <div className="loginsignup">
                <div className="loginsignup-container">
                    <h1>Sign-Up</h1>
                    <div className="loginsignup-fields">
                        <input type="text " placeholder="Your Name" id="name" onChange={(e) => setname(e.target.value)} />
                        <input type="email " placeholder="Email Address" id="email" onChange={(e) => setemail(e.target.value)} />
                        <input type="mobile" placeholder="Mobile Number" id="mobile" onChange={(e) => setmobile(e.target.value)} />
                        <input type="text" placeholder="Password" id="password" onChange={(e) => setpassword(e.target.value)} />
                    </div>
                    <button onClick={handleSubmit}>Signup</button>
                    <Link to="/login">
                        <p className="loginsignup-login">Already have a account? <span>Login here</span></p>
                    </Link>
                    <div className="loginsignup-agree">
                        <input type="checkbox" name="" id="" />
                        <p>By Continue i agree to the term of use & privacy policy</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;