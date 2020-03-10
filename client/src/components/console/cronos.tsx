import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import cronos_1 from "./../../media/Cronos_1.png"
import cronos_2 from "./../../media/Cronos_2.png"
import cronos_3 from "./../../media/Cronos_3.png"
import cronos_4 from "./../../media/Cronos_4.png"
import cronos_5 from "./../../media/Cronos_5.png"

interface AppProps {};

const cronos: React.FC<AppProps> = () => {
  return(
         <Tabs  defaultActiveKey="Cronos_console" id="uncontrolled-tab-example" style={{ float: "right"}} >
        
          <Tab eventKey="CRONOS_1" title="Computer Network">
            <img src={cronos_1} style={{width:"300px"}}/> 
          </Tab>

          <Tab eventKey="CRONOS_2" title="UHF Communication">
            <img src={cronos_2} style={{width:"300px"}}/> 
          </Tab>

          <Tab eventKey="CRONOS_3" title="S-Band Communication">
            <img src={cronos_3} style={{width:"300px"}}/> 
          </Tab>

          <Tab eventKey="CRONOS_4" title="Video Communication">
            <img src={cronos_4} style={{width:"300px"}}/> 
          </Tab>

          <Tab eventKey="CRONOS_5" title="Video Communication 2">
            <img src={cronos_5} style={{width:"300px"}}/> 
          </Tab>

         
        </Tabs>
  );
}

export const Cronos = styled(cronos)`
  #uncontrolled-tab-example {
    width: 200px;
  }
`;