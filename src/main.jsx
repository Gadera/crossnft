import React from 'react';
import { createRoot } from "react-dom/client";
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './utils/useContext.jsx';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';

const activeChain = "ethereum";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThirdwebProvider activeChain={activeChain} desiredChainId={ChainId.Mainnet}>
    <UserProvider>
    <App />
    </UserProvider>
    </ThirdwebProvider>
    </BrowserRouter>
    
  </React.StrictMode>,
);



