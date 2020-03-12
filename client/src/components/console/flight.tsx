import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab'
import flight_1 from "./../../media/Flight_1.png"

interface AppProps {
  className?: string;
};

const flight: React.FC<AppProps> = ( props ) => {
  return(
        <Tab.Container id="flight-tabs" defaultActiveKey="flight">
      <Row className={props.className}>
        <Col id="flight-content" sm={10}>
          <Tab.Content>
            <Tab.Pane eventKey="flight">
              <img src={flight_1} style={{width:"1200px"}}/>
            </Tab.Pane>
           </Tab.Content>
        </Col>
        <Col id="flight-buttons" sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="flight">FLIGHT</Nav.Link>
            </Nav.Item>
           </Nav>
        </Col>
      </Row>
    </Tab.Container>

    //  <Tabs defaultActiveKey="Spartan_console" id="uncontrolled-tab-example" style={{ float: "right"}}  >
        
        //   <Tab eventKey="FLIGHT_1" title="Mission Status">
        //     <img src={flight_1} style={{width:"300px"}}/> 
        //   </Tab>

        // </Tabs>

    
  );
}

export const Flight = styled(flight)`
width: 100%;
  height: 100%;
  position: absolute;

  #flight-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #flight-buttons .nav {
    margin-left: 20px;
    max-width: 300px;
    background-color: #f8f9fa;
    border-radius: 3px;
  }

  #flight-buttons .nav-item a {
    padding: 20px 30px;
  }
`;