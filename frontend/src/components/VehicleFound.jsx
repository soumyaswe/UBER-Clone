import React from "react";

const VehicleFound = (props) => {
  return (
    <div className="rounded-lg">
      <h5
        onClick={() => {
          props.setVehicleFound(false);
        }}
        className="text-center"
      >
        <i className="text-2xl ri-arrow-down-wide-line"></i>
      </h5>
      <div className="text-2xl font-semibold mb-4">Looking for a Driver</div>

      <div className="flex justify-between flex-col">
        <img
          className="h-32 w-32 mx-auto"
          src="https://imgs.search.brave.com/wtpH-N99a8_OkMZ2p-swZAHAYVRzIqz00GPla9gMrYk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjkv/OTE0LzczMy9zbWFs/bC93aGl0ZS1jaXR5/LWNhci1pc29sYXRl/ZC1vbi10cmFuc3Bh/cmVudC1iYWNrZ3Jv/dW5kLTNkLXJlbmRl/cmluZy1pbGx1c3Ry/YXRpb24tZnJlZS1w/bmcucG5n"
          alt=""
        />

        <div className="w-full mb-3">
          {/* pickup */}
          <div className="flex items-center gap-4 p-3 border-b-2">
            <h2 className="text-lg">
              <i className="ri-map-pin-3-fill"></i>
            </h2>
            <div>
              <h3 className="text-lg font-semibold">KCAP</h3>
              <p className="text-sm text-gray-600">
                {props.pickup}
              </p>
            </div>
          </div>

          {/* destination */}
          <div className="flex items-center gap-4 p-3 border-b-2">
            <h2 className="text-lg">
              <i className="ri-square-fill"></i>
            </h2>
            <div>
              <h3 className="text-lg font-semibold">Debottam Apartments</h3>
              <p className="text-sm text-gray-600">
                {props.destination}
              </p>
            </div>
          </div>

          {/* payment */}
          <div className="flex items-center gap-4 p-3 ">
            <h2 className="text-lg">
              <i className="ri-bank-card-2-fill"></i>
            </h2>

            <div>
              <h3 className="text-lg font-semibold">₹ {props.fare}</h3>
              <p className="text-sm text-gray-600">Cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleFound;
