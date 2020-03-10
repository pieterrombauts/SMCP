import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import capcom_1 from "./../../media/Capcom_1.png"

interface AppProps {};

const capcom: React.FC<AppProps> = () => {
  return(
         <Tabs defaultActiveKey="Spartan_console" id="uncontrolled-tab-example" style={{ float: "right"}} >
        
          <Tab eventKey="CAPCOM_1" title="Script">
            <img src={capcom_1} style={{width:"300px"}}/> 
          </Tab>

         
        </Tabs>
  );
}

export const Capcom = capcom;