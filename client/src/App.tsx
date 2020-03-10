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

interface AppProps {};

const App: React.FC<AppProps> = () => {
  return(
    <>
      <GlobalStyle />
      {/* <Menu /> */}

      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example"  className="flex-column">
        
        <Tab eventKey="SPARTAN" title="SPARTAN">

         <Tabs defaultActiveKey="Spartan_console" id="uncontrolled-tab-example"  >
        
          <Tab eventKey="SPARTAN_1" title="Power Console">
            <img src={spartan_1} style={{width:"300px"}}/> 
          </Tab>


          <Tab eventKey="SPARTAN_2" title="External Thermal Control">
          <img src={spartan_2} style={{width:"300px"}}/> 

          </Tab>
          
         
        
        </Tabs>

          {/* <img src={spartan_1} style={{width:"300px"}}/>  */}
        </Tab>
        <Tab eventKey="CRONOS" title="CRONOS">
         <p> Title 2 </p>
        </Tab>
        <Tab eventKey="ETHOS" title="ETHOS">
          <p> Title 3 </p>
        </Tab>
        <Tab eventKey="FLIGHT" title="FLIGHT">
          <p> Title 3 </p>
        </Tab>
        <Tab eventKey="CAPCOM" title="CAPCOM">
          <p> Title 3 </p>
        </Tab>
        <Tab eventKey="BME" title="BME">
          <p> Title 3 </p>
        </Tab>
       
      </Tabs>


      <StarBackground />
    </>
  )
};

export default App;