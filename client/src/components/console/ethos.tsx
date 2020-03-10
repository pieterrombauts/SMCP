import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import ethos_1 from "./../../media/Ethos_1.png"
import ethos_2 from "./../../media/Ethos_2.png"
import ethos_3 from "./../../media/Ethos_3.png"

interface AppProps {};

const ethos: React.FC<AppProps> = () => {
  return(
         <Tabs defaultActiveKey="Spartan_console" id="uncontrolled-tab-example" style={{ float: "right"}} >
        
          <Tab eventKey="ETHOS_1" title="Life Support System ">
            <img src={ethos_1} style={{width:"300px"}}/> 
          </Tab>

          <Tab eventKey="Ethos_2" title="Thermal System Display">
            <img src={ethos_2} style={{width:"300px"}}/> 
          </Tab>

          <Tab eventKey="ETHOS_3" title="Regenerative Life Support ">
            <img src={ethos_3} style={{width:"300px"}}/> 
          </Tab>

        </Tabs>
  );
}

export const Ethos = ethos;