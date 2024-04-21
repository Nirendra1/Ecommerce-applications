import React, { useState } from "react";
// import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import "../Pages/Css/Login.css";
import { useNavigate } from "react-router-dom";

 const Login = () => {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigate = useNavigate();
    function handleSubmit() {
        if (!validateForm()) {
            return;
        }
        const storedEmail = localStorage.getItem("email");
        const storedPassword = localStorage.getItem("password");

        if (email === storedEmail && password === storedPassword) {
            
            // Store user ID in local storage (you may want to use a more secure method in a real application)
            localStorage.setItem("userId", email);
            alert("Logged in successfully!");
            
        navigate("/Navbar")
        
    } else {
            alert("Invalid credentials. Please try again.");
        }
    }

    function validateForm() {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
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
            <div className="forms">
                <h1 className="logo">Log!n</h1>
                <div className="email">
                    <label>Email</label><br></br>
                    <input type="text" id="email" placeholder="Enter your email addres" onChange={((e) => setemail(e.target.value))} />
                </div>
                <div className="password">
                    <label>Password</label><br></br>
                    <input type="text" id="password" placeholder="Enter your password" onChange={((e) => setpassword(e.target.value))} /><br></br>

                </div>
                <div className="buttons">
                    <button className="submit" onClick={handleSubmit} >submit</button>
                    <Link to="/signup"><button className="signup">Signup</button></Link>
                </div>
                <img
                    alt=""
                    src="" />

            </div>
        </>
    )
}
export default Login;