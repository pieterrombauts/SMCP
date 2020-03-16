import React from 'react';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import spartan_1 from "./../../media/Spartan_1.png";
import spartan_2 from "./../../media/Spartan_2.png";
import {SpartanExtThermal} from "./spartanExtThermal"
import {SpartanPower} from "./spartanPower"

interface AppProps {
  className?: string;
};

const spartan: React.FC<AppProps> = ( props ) => {
  return(
    <Tab.Container id="spartan-tabs" defaultActiveKey="power">
      <Row className={props.className}>
        <Col id="spartan-content" sm={10}>
          <Tab.Content>
            <Tab.Pane eventKey="power">
              < SpartanPower />
            </Tab.Pane>
            <Tab.Pane eventKey="ext-thermal">
              < SpartanExtThermal />
            </Tab.Pane>
          </Tab.Content>
        </Col>
        <Col id="spartan-buttons" sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="power">POWER CONSOLE</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="ext-thermal">EXT. THERMAL CONTROL</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Tab.Container>
        //  <Tabs defaultActiveKey="Spartan_console" id="uncontrolled-tab-example" style={{ float: "right"}}  >
        
        //   <Tab eventKey="SPARTAN_1" title="Power Console">
        //     <img src={spartan_1} style={{width:"300px"}}/> 
        //   </Tab>

        //   <Tab eventKey="SPARTAN_2" title="External Thermal Control">
        //   <img src={spartan_2} style={{width:"300px"}}/> 

        //   </Tab>
        // </Tabs>
  );
}

export const Spartan = styled(spartan)`
  width: 100%;
  height: 100%;
  position: absolute;

  #spartan-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #spartan-buttons .nav {
    margin-left: 20px;
    max-width: 300px;
    background-color: #f8f9fa;
    border-radius: 3px;
  }

  #spartan-buttons .nav-item a {
    padding: 20px 30px;
  }
`;