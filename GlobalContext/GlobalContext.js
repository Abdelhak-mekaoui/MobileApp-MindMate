import React, { createContext, useContext, useState } from 'react';

const IpAddressContext = createContext();
const UserContext = createContext();
// Define more contexts if needed

export const GlobalProvider = ({ children }) => {
  const [ipAddress, setIpAddress] = useState('http://192.168.100.34:8000');
  const [user, setUser] = useState(null);
  // Initialize other states if needed

  return (
    <IpAddressContext.Provider value={{ ipAddress, setIpAddress }}>
      <UserContext.Provider value={{ user, setUser }}>
        {/* Provide other contexts */}
        {children}
      </UserContext.Provider>
    </IpAddressContext.Provider>
  );
};

export const useIpAddressContext = () => useContext(IpAddressContext);
export const useUserContext = () => useContext(UserContext);
// Export other context hooks if needed
