import React, { useState } from "react";
import Header from "./Header";
import Image from "../assets/bg-2.png";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignup = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={Image} alt="" />
      </div>

      <form className="absolute w-96 p-10 bg-[rgba(0,0,0,0.8)] m-36 mx-auto right-0 left-0 rounded-lg">

        <h1 className="font-bold text-white text-3xl p-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        
        {!isSignInForm &&(
          <input
          type="text"
          placeholder="Full Name"
          className="p-3 m-4  w-full bg-gray-700 text-white"
        />
        )}

        <input
          type="Email"
          placeholder="Email Address"
          className="p-3 m-4  w-full bg-gray-700 text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 m-4 w-full bg-gray-700 text-white"
        />

        <button className="p-3 m-4 bg-red-700 text-white w-full cursor-pointer rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-white py-4 cursor-pointer" onClick={toggleSignup}>
        {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
