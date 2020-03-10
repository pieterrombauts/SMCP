import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import flight_1 from "./../../media/Flight_1.png"

interface AppProps {};

const flight: React.FC<AppProps> = () => {
  return(
         <Tabs defaultActiveKey="Spartan_console" id="uncontrolled-tab-example" style={{ float: "right"}}  >
        
          <Tab eventKey="FLIGHT_1" title="Mission Status">
            <img src={flight_1} style={{width:"300px"}}/> 
          </Tab>

        </Tabs>
  );
}

export const Flight = flight;