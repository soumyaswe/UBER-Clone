import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setVehiclePanel(false);
        }}
        className="text-center"
      >
        <i className="text-2xl ri-arrow-down-wide-line"></i>
      </h5>
      <div className="text-2xl font-semibold mb-4">Choose a Ride</div>
      {/* car */}
      <div
        onClick={() => {
          props.setConfirmRide(true);
          props.setVehicleType('car');
        }}
        className="flex justify-between items-center mb-3 w-full px-4 py-2 border-2 border-white active:border-black rounded-xl"
      >
        <img
          className="h-12"
          src="https://imgs.search.brave.com/wtpH-N99a8_OkMZ2p-swZAHAYVRzIqz00GPla9gMrYk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjkv/OTE0LzczMy9zbWFs/bC93aGl0ZS1jaXR5/LWNhci1pc29sYXRl/ZC1vbi10cmFuc3Bh/cmVudC1iYWNrZ3Jv/dW5kLTNkLXJlbmRl/cmluZy1pbGx1c3Ry/YXRpb24tZnJlZS1w/bmcucG5n"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="font-medium text-lg">
            UberGo{" "}
            <span>
              <i className="ri-user-3-fill"></i>
            </span>{" "}
            4
          </h4>
          <h5 className="font-medium text-base">2 mins away</h5>
          <p className="text-xs font-normal text-gray-600">
            Affordable, compact rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹ {props.fare.car}</h2>
      </div>

      {/* bike */}
      <div
        onClick={() => {
          props.setConfirmRide(true);
          props.setVehicleType('moto');
        }}
        className="flex justify-between items-center mb-3 w-full px-4 py-2 border-2 border-white active:border-black rounded-xl"
      >
        <img
          className="h-12"
          src="https://imgs.search.brave.com/IEcSJgS_4PwRVpz7tzb1Z7zs1mc276_FTkDuNFW5378/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDQv/MjQyLzc5OC9zbWFs/bC9hLXNsZWVrLXll/bGxvdy1zcG9ydHMt/YmlrZS1zdGFuZHMt/cmVhZHktZm9yLWFj/dGlvbi1wbmcucG5n"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="font-medium text-lg">
            Moto{" "}
            <span>
              <i className="ri-user-3-fill"></i>
            </span>{" "}
            1
          </h4>
          <h5 className="font-medium text-base">3 mins away</h5>
          <p className="text-xs font-normal text-gray-600">
            Affordable motorcycle rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹ {props.fare.moto}</h2>
      </div>

      {/* auto */}
      <div
        onClick={() => {
          props.setConfirmRide(true);
          props.setVehicleType('auto');
        }}
        className="flex justify-between items-center mb-3 w-full px-4 py-2 border-2 border-white active:border-black rounded-xl"
      >
        <img
          className="h-12"
          src="https://imgs.search.brave.com/RPmauLigyx8Bx0KNNFkjabTwk-o0lKSRpmRdkKySzQc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL2F1dG8tcmlj/a3NoYXctcG5nLWNv/dmVyLWFydC0zMDAu/cG5n"
          alt=""
        />
        <div className="w-1/2">
          <h4 className="font-medium text-lg">
            UberAuto{" "}
            <span>
              <i className="ri-user-3-fill"></i>
            </span>{" "}
            3
          </h4>
          <h5 className="font-medium text-base">4 mins away</h5>
          <p className="text-xs font-normal text-gray-600">
            Affordable Auto rides
          </p>
        </div>
        <h2 className="text-lg font-semibold">₹ {props.fare.auto}</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
