import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserProvider } from "./providers/userContext";
import { GlobalStyle } from "./style/global";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyle/>
    <BrowserRouter>
  <UserProvider>

    
   

      <App />
   
    
  </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
