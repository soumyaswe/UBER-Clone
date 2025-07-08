import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">

      <Link to="/home" className="fixed h-10 w-10 rounded-full bg-white top-2 right-3 flex items-center justify-center">
        <i className="text-lg font-semibold ri-home-5-line"></i>
      </Link>

      <div className="h-1/2">
        <img
          src="https://imgs.search.brave.com/jK1glZ46aRnMBCp3Bqv7YWCuqyKXawBDiB0s1mPwES0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaW1v/bnBhbi5jb20vd3At/Y29udGVudC90aGVt/ZXMvc3BfcG9ydGZv/bGlvL2Fzc2V0cy91/YmVyLW5vdC1waWNr/dXAuanBn"
          alt=""
        />
      </div>

      <div className="h-1/2 p-4 mb-2">
        <div className="flex items-center justify-between">
          <img
            className="h-20"
            src="https://imgs.search.brave.com/wtpH-N99a8_OkMZ2p-swZAHAYVRzIqz00GPla9gMrYk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjkv/OTE0LzczMy9zbWFs/bC93aGl0ZS1jaXR5/LWNhci1pc29sYXRl/ZC1vbi10cmFuc3Bh/cmVudC1iYWNrZ3Jv/dW5kLTNkLXJlbmRl/cmluZy1pbGx1c3Ry/YXRpb24tZnJlZS1w/bmcucG5n"
            alt=""
          />

          <div className="text-right ">
            <h4 className="text-lg font-medium -mt-1">Soumya</h4>
            <h3 className="text-xl font-bold -mt-1 -mb-1">WB 04 1234</h3>
            <p className="text-sm text-gray-600 ">Maruti Suzuki Alto</p>
          </div>
        </div>

        <div className="w-full">
          {/* destination */}
          <div className="flex items-center gap-4 p-3 border-b-2">
            <h2 className="text-lg">
              <i className="ri-square-fill"></i>
            </h2>
            <div>
              <h3 className="text-lg font-semibold">Debottam Apartments</h3>
              <p className="text-sm text-gray-600">
                Madhyamgram Municipality Ward 19, South Bankimpally,
                Madhyamgram, Kolkata, West Bengal 700129
              </p>
            </div>
          </div>

          {/* payment */}
          <div className="flex items-center gap-4 p-3 ">
            <h2 className="text-lg">
              <i className="ri-bank-card-2-fill"></i>
            </h2>

            <div>
              <h3 className="text-lg font-semibold">₹ 193.20</h3>
              <p className="text-sm text-gray-600">Cash</p>
            </div>
          </div>
        </div>

        <button className="w-full text-xl text-white bg-black font-semibold rounded-lg p-2">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
