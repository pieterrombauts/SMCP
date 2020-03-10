import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyle } from './components/GlobalStyle';
import { StarBackground } from './components/StarBackground'
import Menu from './components/menu/Menu'
import 'bootstrap/dist/css/bootstrap.min.css';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import spartan_1 from "./media/Spartan_1.png"
import spartan_2 from "./media/Spartan_2.png"
import {Spartan} from './components/console/spartan';
import {Capcom} from './components/console/capcom';
import {Cronos} from './components/console/cronos';
import {Ethos} from './components/console/ethos';
import {Flight} from './components/console/flight';
import {Bme} from './components/console/bme';

interface AppProps {};

const App: React.FC<AppProps> = () => {
  return(
    <>
      <GlobalStyle />
      {/* <Menu /> */}

      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example"  className="flex-column">
        
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


      <StarBackground />
    </>
  )
};

export default App;