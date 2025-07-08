import React from "react";

const LocationSearchPanel = (props) => {
  {/* sample location data */}
  const locations = [
    "KCAP Kolkata Creative Art Performers, Subhashpalli, Madhyamgram Municipality Ward 22, Kolkata, West Bengal 700129",
    "Debottam Apartments, Madhyamgram Municipality Ward 19, South Bankimpally, Madhyamgram, Kolkata, West Bengal 700129",
    "Madhyamgram Chowmatha, 380/14, Jessore Rd, Madhyamgram, Kolkata, West Bengal 700129",
    "Koborkhola more, PF6V+FQ4, Nehali, Kolkata, West Bengal 700124",
  ];

  return (
    <div className="overflow-scroll">

      {locations.map((elem, idx) => {
        return (
          <div
            key={idx}
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            className="flex items-center justify-start border-2 border-white active:border-black rounded-xl my-2 p-3  gap-3"
          >
            <h2 className="bg-[#eeeeee] h-10 w-16 rounded-full flex items-center justify-center">
              <i className="font-semibold ri-map-pin-2-line"></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
