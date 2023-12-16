import {createUserWithEmailAndPassword} from "firebase/auth";
import React, { useState } from "react";
// import { auth, SignUpWithEmailAndPassword } from "../firebase/firebase"; // Adjust the path as needed
import { auth, SignUpWithEmailAndPassword } from "../firebase/firebase"; // Adjust the path as needed


const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  // Handle input changes
  const getUserData = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const email =event.target.email;
    setUser({ ...user, [name]: value });
  };

  // Handle the sign-in process
  const SignUp = (e) => {
    e.preventDefault();

    const { name,email, password } = user;

    if (name && password&&email) {
        createUserWithEmailAndPassword(auth, name,user.email, password) // Use SignUpWithEmailAndPassword function from Firebase
        .then((userCredential) => {
          console.log(userCredential);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      alert("Please fill in all data.");
    }
  };

  return (
    <div className="container">
      <form className="hi" onSubmit={SignUp}> {/* Use onSubmit to handle form submission */}
        <h1 className="heading">SignUp</h1>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          className="tt"
          placeholder="Enter your Name"
          value={user.name}
          onChange={getUserData}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          className="tt"
          placeholder="Enter your email"
          value={user.email}
          onChange={getUserData}
          required
        />
        <label htmlFor="password">Password</label> {/* Correct the "htmlFor" attribute */}
        <input
          type="password"
          name="password"
          className="tt"
          placeholder="Enter your password"
          value={user.password}
          onChange={getUserData}
          required
        />
        <input className="check" type="checkbox" value="" id="flexCheckDefault" />
        <label className="form-check-label" htmlFor="flexCheckDefault">Do you agree with terms and conditions</label> {/* Correct the "for" attribute */}
        <button type="submit">Submit</button>
        <p>Already registered <a href="/Signin">Click here</a></p>
      </form>
    </div>
  );
}

export default SignUp;
