import React from "react";
import AllRoutes from "./AllRoutes/AllRoutes";
import Navbar from "./component/Navbar/navbar";

import MyContextState from "./Context/MyContextState"
import { BrowserRouter} from "react-router-dom";
import CartContextState from "./Context/CartContextState"

const App = () => {
  return (
    <>
    
      <BrowserRouter>
          
      <MyContextState>

      <CartContextState>

      <Navbar />
        <AllRoutes />
      </CartContextState>

        </MyContextState>
      </BrowserRouter>
    
    </>
  );
};

export default App;
