import React from "react";

const LocationSearchPanel = (props) => {
  const { suggestions = [], onSuggestionClick } = props;

  return (
    <div className="overflow-y-scroll">
      {suggestions.length === 0 && (
        <div className="text-gray-400 text-center py-4">No suggestions</div>
      )}
      {suggestions.map((elem, idx) => (
        <div
          key={idx}
          onClick={() => {
            onSuggestionClick(elem.description || elem);
            props.setPanelOpen(true);
          }}
          className="flex items-center justify-start border-2 border-white active:border-black rounded-xl my-2 p-3 gap-3 cursor-pointer"
        >
          <h2 className="bg-[#eeeeee] h-10 w-16 rounded-full flex items-center justify-center">
            <i className="font-semibold ri-map-pin-2-line"></i>
          </h2>
          <h4 className="font-medium">{elem.description || elem}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
