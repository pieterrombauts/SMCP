import React from 'react';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bme_1 from "./../../media/Bme_1.png"
import bme_2 from "./../../media/Bme_2.png"

interface AppProps {
  className?: string;
};

const bme: React.FC<AppProps> = ( props ) => {
  return(
    <Tab.Container id="bme-tabs" defaultActiveKey="video">
      <Row className={props.className}>
        <Col id="bme-content" sm={10}>
          <Tab.Content>
            <Tab.Pane eventKey="video">
              <img src={bme_1} style={{width:"600px"}}/>
            </Tab.Pane>
            <Tab.Pane eventKey="info">
              <img src={bme_2} style={{width:"600px"}}/> 
            </Tab.Pane>
          </Tab.Content>
        </Col>
        <Col id="bme-buttons" sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="video">VIDEO</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="info">INFO</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Tab.Container>

        // <Tabs defaultActiveKey="Spartan_console" id="uncontrolled-tab-example" style={{ float: "right"}} >
        
        // <Tab eventKey="BME_1" title="Astronaut Health">
        // <img src={bme_1} style={{width:"300px"}}/> 
        // </Tab>

        // <Tab eventKey="BME_2" title="Astronaut Vitals">
        // <img src={bme_2} style={{width:"300px"}}/> 

        // </Tab>
        // </Tabs> 
  );
}

export const Bme = styled(bme)`
  width: 100%;
  height: 100%;
  position: absolute;

  #bme-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #bme-buttons .nav {
    margin-left: 20px;
    max-width: 300px;
    background-color: #f8f9fa;
    border-radius: 3px;
  }

  #bme-buttons .nav-item a {
    padding: 20px 30px;
  }
`;