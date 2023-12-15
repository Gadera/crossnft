import React from 'react'
import { createRoot } from "react-dom/client";
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './utils/useContext.jsx'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
const activeChain = "ethereum"
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



// import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Login from './components/Login';
// import Signup from './components/Signup';
// const App = () => {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/login">Login</Link>
//             </li>
//             <li>
//               <Link to="/signup">Signup</Link>
//             </li>
//           </ul>
//         </nav>
//         <Switch>
//           <Route path="/login" component={Login} />
//           <Route path="/signup" component={Signup} />
//         </Switch>
//       </div>
//     </Router>
//   );
// };
// export default App;
