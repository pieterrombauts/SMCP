import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import spartan_1 from "./../../media/Spartan_1.png"
import spartan_2 from "./../../media/Spartan_2.png"

interface AppProps {};

const bme: React.FC<AppProps> = () => {
  return(
         <Tabs defaultActiveKey="Spartan_console" id="uncontrolled-tab-example"  >
        
          <Tab eventKey="SPARTAN_1" title="Power Console">
            <img src={spartan_1} style={{width:"300px"}}/> 
          </Tab>

          <Tab eventKey="SPARTAN_2" title="External Thermal Control">
          <img src={spartan_2} style={{width:"300px"}}/> 

          </Tab>
        </Tabs>
  );
}

export const Bme = bme;