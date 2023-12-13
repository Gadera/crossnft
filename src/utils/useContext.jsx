import { createContext, useEffect, useState, useRef } from 'react'
import { Web5 } from "@tbd54566975/web5";

const useContext = createContext();

export function UserProvider({ children }) {
    const [foundData, setFoundData] = useState({
        web5: undefined,
        did: undefined,
      });

      useEffect(() => {
        const connectWeb5= async () => {
          try {
            const { web5, did } = await Web5.connect();
            console.log("Web5 initialized successfully", web5, did);
            setFoundData({
                web5: web5,
                did: did
            })
          } catch (error) {
            console.error("Error initializing Web5:", error);
          }
        }
        connectWeb5();
      },[])
console.log(foundData)

      const values = {
        foundData
       
        };
    return <useContext.Provider value={values}>{children}</useContext.Provider>;
}
export default useContext;