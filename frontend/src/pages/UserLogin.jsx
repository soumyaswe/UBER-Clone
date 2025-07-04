import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {user, setUser} = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const userData = {
      email: email,
      password: password,
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);

    if(response.status == 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate("/home");
    }


    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-6 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-14 mb-6"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-lg font-medium mb-2">What's your email ?</h3>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="email@example.com"
            className="bg-[#eeeeee] w-full px-5 py-3 mb-5 rounded border text-lg placeholder:text-sm"
          />

          <h3 className="text-lg font-medium mb-2">Enter your password</h3>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="********"
            className="bg-[#eeeeee] w-full px-5 py-3 mb-5 rounded border text-lg placeholder:text-sm"
          />

          <button className="bg-black text-white w-full px-5 py-3 mt-2 mb-5 rounded-md text-xl">
            Login
          </button>
        </form>

        <p className="text-center ">
          New here ?{" "}
          <Link to="/signup" className="text-blue-600 hover:underline">
            Create new account
          </Link>
        </p>
      </div>

      <div>
        <Link
          to="/captain-login"
          className="flex items-center justify-center bg-[#06d026] hover:bg-[#059e1d] text-white w-full px-5 py-3 mb-4 rounded-md font-bold text-xl"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
