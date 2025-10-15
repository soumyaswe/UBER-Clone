import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

export const CaptainDataContext = createContext();

export const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [isOnline, setIsOnline] = useState(false);
    const [currentLocation, setCurrentLocation] = useState(null);
    const [activeRide, setActiveRide] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                if (response.status === 200) {
                    setCaptain(response.data.captain);
                }
            }).catch(err => {
                console.log(err);
            });
        }
    }, []);

    const updateCaptainStatus = (status) => {
        setIsOnline(status);
    };

    const updateLocation = (location) => {
        setCurrentLocation(location);
    };

    const updateActiveRide = (ride) => {
        setActiveRide(ride);
    };

    const value = {
        captain,
        setCaptain,
        isOnline,
        updateCaptainStatus,
        currentLocation,
        updateLocation,
        activeRide,
        updateActiveRide
    };

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
};

export default CaptainContext;