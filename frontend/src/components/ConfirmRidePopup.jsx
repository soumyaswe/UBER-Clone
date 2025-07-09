import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ConfirmRidePopup = (props) => {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    if(otp) {
        navigate("/captain-riding");
    }

    setOtp("");
  };
  return (
    <div>
      <div className="text-2xl font-semibold mb-4 ">
        Confirm this Ride to Start
      </div>

      <div className="flex justify-between flex-col">
        {/* customer details */}
        <div className="flex items-center justify-between w-full mb-3 bg-gray-100 p-2 rounded-lg">
          <div className="text-left flex items-center justify-between gap-3 mt-2">
            <img
              className="bg-black h-10 w-10 rounded-lg"
              src="https://imgs.search.brave.com/4SoF5hcvkH7zUr6-0G7rFSFpMGULDJ0xSVDXsCkGz9Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdj/ZG4uc3RhYmxlZGlm/ZnVzaW9ud2ViLmNv/bS8yMDI1LzEvMTQv/MWIxODBiYzUtZDU3/Yy00OTc5LWJlMmIt/MjEyMzY5ZTVhODM1/LmpwZw"
              alt=""
            />
            <div>
              <h4 className="text-xl font-semibold">Test Customer</h4>
              <p className="text-sm text-gray-600">Cash</p>
            </div>
          </div>

          <div className="text-right">
            <h4 className="text-xl font-semibold">2.2 km</h4>
          </div>
        </div>

        <div className="w-full mb-3">
          {/* pickup */}
          <div className="flex flex-col text-left gap-4 p-3 border-b-2">
            <div className="text-sm text-gray-600">PICK UP</div>
            <div className="-mt-4">
              <h3 className="text-lg font-semibold">KCAP</h3>
              <p className="text-sm text-gray-600">
                Subhashpalli, Madhyamgram Municipality Ward 22, Kolkata, West
                Bengal 700129
              </p>
            </div>
          </div>

          {/* destination */}
          <div className="flex flex-col text-left  gap-4 p-3 border-b-2">
            <div className="text-sm text-gray-600">DROP OFF</div>
            <div className="-mt-4">
              <h3 className="text-lg font-semibold">Debottam Apartments</h3>
              <p className="text-sm text-gray-600">
                Madhyamgram Municipality Ward 19, South Bankimpally,
                Madhyamgram, Kolkata, West Bengal 700129
              </p>
            </div>
          </div>

          {/* payment */}
          <div className="flex flex-col gap-4 p-3 border-b-2">
            <div className="text-sm text-gray-600">EARNING</div>

            <div className="-mt-4">
              <h3 className="text-lg font-semibold">₹ 193.20</h3>
              <p className="text-sm text-gray-600">Cash</p>
            </div>
          </div>
        </div>

        {/* otp input + confirm/cancel buttons*/}
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <input
            required
            type="number"
            value={otp}
            onChange={(e) => {
              setOtp(e.target.value);
            }}
            className="bg-[#eeeeee] w-full px-12 py-3 mb-2 rounded font-mono border text-lg placeholder:text-base"
            placeholder="Enter OTP"
          />

          {/* confirm button */}
          <button className="w-full text-xl text-black bg-yellow-400 font-bold mb-2 rounded-lg p-2">
            Confirm
          </button>

          {/* cancel button */}
          <button
            onClick={() => {
              props.setRidePopupPanel(false);
              props.setConfirmRidePopupPanel(false);
            }}
            className="w-full text-xl text-red-600 bg-gray-300 font-bold mb-2 rounded-lg p-2"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConfirmRidePopup;
