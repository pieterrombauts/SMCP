import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import bme_1 from "./../../media/Bme_1.png"
import bme_2 from "./../../media/Bme_2.png"

interface AppProps {};

const bme: React.FC<AppProps> = () => {
  return(
         <Tabs defaultActiveKey="Spartan_console" id="uncontrolled-tab-example"  >
        
          <Tab eventKey="BME_1" title="Astronaut Health">
            <img src={bme_1} style={{width:"300px"}}/> 
          </Tab>

          <Tab eventKey="BME_2" title="Astronaut Vitals">
          <img src={bme_2} style={{width:"300px"}}/> 

          </Tab>
        </Tabs>
  );
}

export const Bme = bme;