import React, { useRef, useState } from "react";
import "remixicon/fonts/remixicon.css";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import VehicleFound from "../components/VehicleFound";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRide, setConfirmRide] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRideRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();

    setPickup("");
    setDestination("");
  };

  // find a trip panel animation
  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          paddingLeft: "24px",
          duration: 0.5,
          ease: "power2.inOut",
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
          duration: 0.5,
          ease: "power2.inOut",
        });
      } else {
        gsap.to(panelRef.current, {
          height: 0,
          duration: 0.5,
          ease: "power2.inOut",
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
    },
    [panelOpen]
  );

  // vehicle panel animation
  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
          duration: 0.5,
          ease: "power2.inOut",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
    },
    [vehiclePanel]
  );

  // confirm ride panel animation
  useGSAP(
    function () {
      if (confirmRide) {
        gsap.to(confirmRideRef.current, {
          transform: "translateY(0)",
          duration: 0.5,
          ease: "power2.inOut",
        });
      } else {
        gsap.to(confirmRideRef.current, {
          transform: "translateY(100%)",
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
    },
    [confirmRide]
  );

  // looking for driver panel animation
  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(0)",
          duration: 0.5,
          ease: "power2.inOut",
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(100%)",
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
    },
    [vehicleFound]
  );

  // waiting for driver panel animation
  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0)",
          duration: 0.5,
          ease: "power2.inOut",
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%)",
          duration: 0.5,
          ease: "power2.inOut",
        });
      }
    },
    [waitingForDriver]
  );

  return (
    <div className="h-screen relative overflow-hidden">
      {/* uber logo and profile logo */}
      <div className="flex justify-between">
        <img
          className="w-24 absolute px-4 py-5"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
      </div>
      <div className="absolute top-4 right-4 text-2xl">
        <i className="right-0 ri-user-fill"></i>
      </div>

      {/* temporary bg image */}
      <div>
        <img
          className="h-screen w-screen "
          src="https://imgs.search.brave.com/jK1glZ46aRnMBCp3Bqv7YWCuqyKXawBDiB0s1mPwES0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zaW1v/bnBhbi5jb20vd3At/Y29udGVudC90aGVt/ZXMvc3BfcG9ydGZv/bGlvL2Fzc2V0cy91/YmVyLW5vdC1waWNr/dXAuanBn"
          alt=""
        />
      </div>

      {/* find a trip + recent locations section */}
      <div className="h-screen absolute top-0 w-full flex flex-col justify-end">
        {/* find a trip section */}
        <div className="h-1/3 bg-white rounded-lg px-4 relative">
          <div
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute opacity-0 top-3 right-6 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </div>
          <h4 className="font-bold text-2xl  py-3">Find a trip</h4>

          {/* pickup and destination input */}
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-20 w-1 top-[36%] left-9 rounded-full bg-gray-900"></div>
            <input
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              onClick={() => {
                setPanelOpen(true);
              }}
              className="bg-[#eeeeee] w-full px-12 py-3 mb-5 rounded border text-lg placeholder:text-base"
              type="text"
              placeholder="Add a pickup location"
            />
            <input
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              onClick={() => {
                setPanelOpen(true);
              }}
              className="bg-[#eeeeee] w-full px-12 py-3 mb-5 rounded border text-lg placeholder:text-base"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>

        {/* recent locations panel */}
        <div ref={panelRef} className="h-0 px-4 w-full bg-white">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>

      {/* vehicle confirmation panel */}
      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-10 translate-y-full bg-white bottom-0 px-4 py-4 rounded-lg"
      >
        <VehiclePanel
          setConfirmRide={setConfirmRide}
          setVehiclePanel={setVehiclePanel}
        />
      </div>

      {/* ride confirmation panel */}
      <div
        ref={confirmRideRef}
        className="fixed w-full z-10 translate-y-full bg-white bottom-0 px-4 py-4 rounded-lg"
      >
        <ConfirmRide
          setConfirmRide={setConfirmRide}
          setVehicleFound={setVehicleFound}
        />
      </div>

      {/* looking for a driver panel */}
      <div
        ref={vehicleFoundRef}
        className="fixed w-full z-10 translate-y-full bg-white bottom-0 px-4 py-4 rounded-lg"
      >
        <VehicleFound setVehicleFound={setVehicleFound} />
      </div>

      {/* waiting for a driver panel */}
      <div
        ref={waitingForDriverRef}
        className="fixed w-full z-10  bg-white bottom-0 px-4 py-4 rounded-lg"
      >
        <WaitingForDriver waitingForDriver={waitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
