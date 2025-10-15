import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopup from "../components/ConfirmRidePopup";

const CaptainHome = () => {
  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);

  const ridePopupPanelRef = useRef(null);
  const confirmRidePopupPanelRef = useRef(null);

  // ride popup panel animation
  useGSAP(
    function () {
      if (ridePopupPanel) {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(0)",
          duration: 0.5,
          ease: "power2.inOut",
        });
      } else {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(100%)",
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
    },
    [ridePopupPanel]
  );

  // confirm ride popup panel animation
  useGSAP(
    function () {
      if (confirmRidePopupPanel) {
        gsap.to(confirmRidePopupPanelRef.current, {
          transform: "translateY(0)",
          duration: 0.5,
          ease: "power2.inOut",
        });
      } else {
        gsap.to(confirmRidePopupPanelRef.current, {
          transform: "translateY(100%)",
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
    },
    [confirmRidePopupPanel]
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
          to="/captains/logout"
          className="h-10 w-10 rounded-full bg-white flex items-center justify-center"
        >
          <i className="text-lg font-semibold ri-logout-box-r-line"></i>
        </Link>
      </div>

      {/* bg image */}
      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://imgs.search.brave.com/jK1glZ46aRnMBCp3Bqv7YWCuqyKXawBDiB0s1mPwES0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaW1v/bnBhbi5jb20vd3At/Y29udGVudC90aGVt/ZXMvc3BfcG9ydGZv/bGlvL2Fzc2V0cy91/YmVyLW5vdC1waWNr/dXAuanBn"
          alt=""
        />
      </div>

      <div className="h-2/5 p-4 mb-2">
        <CaptainDetails />
      </div>

      {/* ride ignore/accept panel */}
      <div
        ref={ridePopupPanelRef}
        className="fixed w-full z-10 translate-y-full bg-white bottom-0 px-4 py-4 rounded-lg overflow-x-scroll"
      >
        <RidePopUp setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
      </div>

      {/* ride ignore/accept panel */}
      <div
        ref={confirmRidePopupPanelRef}
        className="fixed w-full h-screen z-10 translate-y-full bg-white bottom-0 px-4 py-4 rounded-lg overflow-x-scroll"
      >
        <ConfirmRidePopup setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
      </div>
    </div>
  );
};

export default CaptainHome;
