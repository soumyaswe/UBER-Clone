import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CaptainSignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapactiy, setVehicleCapactiy] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  const {captain, setCaptain} = useContext(CaptainDataContext);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle : {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapactiy,
        vehicleType: vehicleType,
      }
    };

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, captainData);

    if(response.status == 201) {
      const data = response.data;

      setCaptain(data.captain);

      localStorage.setItem('token', data.token);

      navigate('/captain-home');

    }

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setVehicleCapactiy("");
    setVehicleColor("");
    setVehiclePlate("");
    setVehicleType("");
  };

  return (
    <div className="px-4 py-2 h-screen flex flex-col justify-between">
      
      {/* Div for the uber logo, form input, submit button */}
      <div>
        <img
          className="w-16 mb-1"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt=""
        />
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >

          {/* Name Section */}
          <h3 className="text-lg font-medium mb-2">What's your name ?</h3>
          <div className="flex gap-3 mb-3">
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

          {/* Email Section */}
          <h3 className="text-lg font-medium mb-2">What's your email ?</h3>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="email@example.com"
            className="bg-[#eeeeee] w-full px-5 py-3 mb-3 rounded border text-lg placeholder:text-sm"
          />

          {/* Password Section */}
          <h3 className="text-lg font-medium mb-2">Enter your password</h3>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="********"
            className="bg-[#eeeeee] w-full px-5 py-3 mb-3 rounded border text-lg placeholder:text-sm"
          />

          {/* Vehicle Type */}
          <h3 className="text-lg font-medium mb-2">Vehicle Type</h3>
          <div className="flex gap-3 mb-3">
            <input
              required
              type="text"
              placeholder="Vehicle Color"
              className="bg-[#eeeeee] w-1/2 px-5 py-3 rounded border text-lg placeholder:text-sm"
              value={vehicleColor}
              onChange={(e) => {
                setVehicleColor(e.target.value);
              }}
            />

            <input
              required
              type="text"
              placeholder="Vehicle Plate"
              className="bg-[#eeeeee] w-1/2 px-5 py-3 rounded border text-lg placeholder:text-sm"
              value={vehiclePlate}
              onChange={(e) => {
                setVehiclePlate(e.target.value);
              }}
            />
          </div>

          <div className="flex gap-3 mb-3">
            <input
              required
              type="number"
              placeholder="Vehicle Capacity"
              className="bg-[#eeeeee] w-1/2 px-5 py-3 rounded border text-lg placeholder:text-sm"
              value={vehicleCapactiy}
              onChange={(e) => {
                setVehicleCapactiy(e.target.value);
              }}
            />

            <select
              required
              className="bg-[#eeeeee] w-1/2 px-5 py-3 rounded border text-sm"
              value={vehicleType}
              onChange={(e) => {
                setVehicleType(e.target.value);
              }}
            >
              <option value="" disabled>
                Select Vehicle Type
              </option>
              <option value="car">
                Car
              </option>
              <option value="auto">
                Auto
              </option>
              <option value="moto">
                Moto
              </option>
            </select>
          </div>

          <button className="bg-black text-white w-full px-5 py-3 mt-2 mb-3 rounded-md text-xl">
            Register
          </button>
        </form>

        <p className="text-center ">
          Already have an account ?{" "}
          <Link to="/captain-login" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>

      {/* <div>
        <p className="text-xs leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply</span>.
        </p>
      </div> */}
    </div>
  );
};

export default CaptainSignUp;
