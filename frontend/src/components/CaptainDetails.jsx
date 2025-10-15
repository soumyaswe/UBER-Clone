import React, { useContext } from 'react'
import { CaptainDataContext } from '../context/CaptainContext'

const CaptainDetails = () => {

  const {captain} = useContext(CaptainDataContext);
  console.log(captain)

  if (!captain) {
    return (
      <div className="flex items-center justify-center h-full">
        <div>Loading captain details...</div>
      </div>
    );
  }

  return (
    <div>
        {/* driver details  */}
        <div className="flex items-center justify-between w-full">
          <div className="text-left flex items-center justify-between gap-3 mt-2">
            <img
              className="bg-black h-10 w-10 rounded-full"
              src="https://imgs.search.brave.com/EajNAYL47iy8AbQd57UlGKj5IFQQ-4RQv8tlPBrOoWA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdj/ZG4uc3RhYmxlZGlm/ZnVzaW9ud2ViLmNv/bS8yMDI1LzIvMTYv/OTBjZDkxYzMtN2E2/Zi00NDRlLWJkYTUt/NWM0NDRjYzkwZDIy/LmpwZw"
              alt=""
            />
            <div>
              <h4 className="text-xl font-semibold">{captain.fullname.firstname + " " + captain.fullname.lastname}</h4>
              <p className="text-sm text-gray-600">Basic Level</p>
            </div>
          </div>

          <div className="text-right">
            <h4 className="text-xl font-semibold">₹325.00</h4>
            <p className="text-sm text-gray-600">Earned</p>
          </div>
        </div>

        {/*driver stats section */}
        <div className="mt-8 p-3 w-full bg-yellow-400 rounded-lg flex items-center justify-between">
          <div className="text-center">
            <i className="text-3xl text-gray-500 font-thin ri-time-line"></i>
            <h3 className="text-lg font-bold mt-3">10.2</h3>
            <p className="text-sm text-gray-600">HOURS ONLINE</p>
          </div>

          <div className="text-center">
            <i className="text-3xl text-gray-500 font-thin ri-speed-up-line"></i>
            <h3 className="text-lg font-bold mt-3">30 KM</h3>
            <p className="text-sm text-gray-600">TOTAL DISTANCE</p>
          </div>

          <div className="text-center">
            <i className="text-3xl text-gray-500 font-thin ri-bookmark-fill"></i>
            <h3 className="text-lg font-bold mt-3">20</h3>
            <p className="text-sm text-gray-600">TOTAL JOBS</p>
          </div>
        </div>
    </div>
  )
}

export default CaptainDetails