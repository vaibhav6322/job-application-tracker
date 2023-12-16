import React, { useState } from "react";
// import { auth, signInWithEmailAndPassword } from "../firebase/firebase"; // Adjust the path as needed
import { auth, signInWithEmailAndPassword } from "../firebase/firebase"; // Adjust the path as needed



const Signin = () => {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  // Handle input changes
  const getUserData = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUser({ ...user, [name]: value });
  };


  // Handle the sign-in process
  const signIn = (e) => {
    e.preventDefault();

    const { name, password } = user;

    if (name && password) {
      signInWithEmailAndPassword(auth, name, password) // Use signInWithEmailAndPassword function from Firebase
        .then((userCredential) => {
          console.log(userCredential);
          alert("login success");
          window.location.replace("/dashboard");
        })
        .catch((error) => {
          console.error(error);
          alert(error);
        });
    } else {
      alert("Please fill in all data.");
    }
  };

  return (
    <div className="container">
      <form className="hi" onSubmit={signIn}> {/* Use onSubmit to handle form submission */}
        <h1 className="heading">Login</h1>
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
        <div>Don't have an account?<a href="/SignUp">Click here</a> </div>

      </form>
    </div>
  );
}

export default Signin;
