import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);

  const finishRidePanelRef = useRef(null);

  // finish ride popup panel animation
  useGSAP(
    function () {
      if (finishRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0)",
          duration: 0.5,
          ease: "power2.inOut",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
    },
    [finishRidePanel]
  );

  return (
    <div className="h-screen">
      {/* uber and logout icon */}
      <div className="fixed top-0 p-4 w-screen flex items-center justify-between">
        <img
          className="w-16"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <Link
          to="/home"
          className="h-10 w-10 rounded-full bg-white flex items-center justify-center"
        >
          <i className="text-lg font-semibold ri-logout-box-r-line"></i>
        </Link>
      </div>

      {/* bg image */}
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://imgs.search.brave.com/jK1glZ46aRnMBCp3Bqv7YWCuqyKXawBDiB0s1mPwES0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaW1v/bnBhbi5jb20vd3At/Y29udGVudC90aGVt/ZXMvc3BfcG9ydGZv/bGlvL2Fzc2V0cy91/YmVyLW5vdC1waWNr/dXAuanBn"
          alt=""
        />
      </div>

      {/*ride details and complete ride button  */}
      <div className="bg-yellow-400 h-1/5 rounded-t-xl">
        <h5
          onClick={() => {
            setFinishRidePanel(true);
          }}
          className="text-center"
        >
          <i className="text-2xl ri-arrow-up-wide-line"></i>
        </h5>

        <div className=" flex items-center p-4 justify-between">
          <h4 className="text-lg font-bold">4 KM away</h4>
          <button
            onClick={() => {
              setFinishRidePanel(true);
            }}
            className="w-1/2 text-xl text-white bg-green-600 font-bold mt-2 mb-2 rounded-lg p-2"
          >
            Complete Ride
          </button>
        </div>

        <div
          ref={finishRidePanelRef}
          className="fixed w-full z-10 translate-y-full bg-white bottom-0 px-4 py-4 rounded-lg overflow-y-scroll"
        >
          <FinishRide setFinishRidePanel={setFinishRidePanel} />
        </div>
      </div>
    </div>
  );
};

export default CaptainRiding;
