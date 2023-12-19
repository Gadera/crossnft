import { createContext, useEffect, useState, useRef } from 'react'
import { Web5 } from "@tbd54566975/web5";

const useContext = createContext();

const protocolStr = 'https://54codes.xyz/nft-metadata';

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
console.log('user DID',foundData)

const createProtocolDefinition = () => {
  return {
    protocol: `${protocolStr}`,
    published: true,
    types: {
      metadata: {
        schema: `${protocolStr}/data`,
        dataFormats: [`application/json`],
      },
      holder: {
        schema: `${protocolStr}/holder`,
        dataFormats: [`text/plain`],
      },
    },
    structure: {
      metadata: {
        $actions: [
          { who: `anyone`, can: `write` },
          { who: `author`, of: `transaction`, can: `read` },
          { who: `recipient`, of: `transaction`, can: `read` },
        ],
      },
      holder: {
        $actions: [{ who: `author`, of: `transaction`, can: `read` }],
      },
    },
  };
};

const queryProtocolDefinition = async (foundData.web5, foundData.did) => {
  return await web5.dwn.protocols.query({
    message: {
      filter: {
        protocol: `${protocolStr}`,
      },
    },
  });
};

const installProtocolLocally = async (web5, protocolDefinition) => {
  return await web5.dwn.protocols.configure({
    message: {
      definition: protocolDefinition,
    },
  });
};

const configureProtocol = async (web5, did) => {
  const protocolDefinition = await createProtocolDefinition();

  const { protocols: localProtocol, status: localProtocolStatus } =
    await queryProtocolDefinition(web5);

  console.log({ localProtocol, localProtocolStatus });

  if (localProtocolStatus.code !== 200 || localProtocol.length === 0) {
    const { protocol, status } = await installProtocolLocally(
      web5,
      protocolDefinition
    );

    console.log(`Protocol installed locally`, protocol, status);

    const { status: configureRemoteStatus } = await protocol.send(did);

    console.log(
      `Did the protocol install on the remote DWN?`,
      configureRemoteStatus
    );
  } else {
    console.log(`Protocol already installed`);
  }
};

const writeToDwn = async (metadata) => {
  const response = await foundData.web5.dwn.records.write({
    data: metadata.data,
    message: {
      protocol: `${protocolStr}`,
      protocolPath: `metadata`,
      schema: `${protocolStr}/data`,
      recipients: metadata.data.recipient,
    },
  });

  console.log(response);
  return response.record;
};

const sendRecord = async (record, recipient) => {
  return await record.send(recipient);
};

      const values = {
        foundData
       
        };
    return <useContext.Provider value={values}>{children}</useContext.Provider>;
}s
export default useContext;