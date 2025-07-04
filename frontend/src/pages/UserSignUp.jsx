import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../context/UserContext";

const UserSignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const {user, setUser} = React.useContext(UserDataContext);


  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
    };


    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

    if(response.status == 201) {
      const data = response.data;

      setUser(data.user);
      localStorage.setItem('token', data.token);

      navigate("/home");
    }

    setFirstName("");
    setLastName("");
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
          <h3 className="text-lg font-medium mb-2">What's your name ?</h3>
          <div className="flex gap-3 mb-5">
            <input
              required
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              placeholder="First Name"
              className="bg-[#eeeeee] w-1/2 px-5 py-3 rounded border text-lg placeholder:text-sm"
            />

            <input
              required
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              placeholder="Last Name"
              className="bg-[#eeeeee] w-1/2 px-5 py-3 rounded border text-lg placeholder:text-sm"
            />
          </div>

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
            Register
          </button>
        </form>

        <p className="text-center ">
          Already have an account ?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>

      <div>
        <p className="text-sm leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default UserSignUp;
