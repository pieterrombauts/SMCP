import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import {Spartan} from './spartan';
import {Capcom} from './capcom';
import {Cronos} from './cronos';
import {Ethos} from './ethos';
import {Flight} from './flight';
import {Bme} from './bme';

interface AppProps {};

const console: React.FC<AppProps> = () => {
  return(
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example"  
      className="flex-column"
      style={{width: "200px",
              backgroundColor: "Black"}}  >
      <Tab eventKey="SPARTAN" title="SPARTAN">
        <Spartan />
      </Tab>
      <Tab eventKey="CRONOS" title="CRONOS">
        <Cronos />
      </Tab>
      <Tab eventKey="ETHOS" title="ETHOS">
        <Ethos />
      </Tab>
      <Tab eventKey="FLIGHT" title="FLIGHT">
      <Flight />
      </Tab>
      <Tab eventKey="CAPCOM" title="CAPCOM">
        <Capcom />
      </Tab>
      <Tab eventKey="BME" title="BME">
        <Bme />
      </Tab>
   
  </Tabs>
  );
}

export const Console = console;