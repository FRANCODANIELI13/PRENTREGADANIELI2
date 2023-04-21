import React from "react";
import  { Navbar }  from "./components/Navbar";
import "boxicons";
import {BrowserRouter as Router } from "react-router-dom";
import {Paginas} from "./components/paginas";
import { Dataprovider } from "./context/Dataprovider";
function App() {
  return (
    <Dataprovider>
        <div className="app">
          <Router>
            <Navbar/>
            <Paginas/>
          </Router>
        </div>
    </Dataprovider>
  );
}

export default App;
