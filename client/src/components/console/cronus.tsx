import React from 'react';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import cronus_1 from "./../../media/Cronus_1.png"
import cronus_2 from "./../../media/Cronus_2.png"
import cronus_3 from "./../../media/Cronus_3.png"
import cronus_4 from "./../../media/Cronus_4.png"
import cronus_5 from "./../../media/Cronus_5.png"

interface AppProps {
  className?: string;
};

const cronus: React.FC<AppProps> = ( props ) => {
  return(
    <Tab.Container id="cronus-tabs" defaultActiveKey="comp-net">
      <Row className={props.className}>
        <Col id="cronus-content" sm={10}>
          <Tab.Content>
            <Tab.Pane eventKey="comp-net">
              <img src={cronus_1} style={{width:"1200px"}}/>
            </Tab.Pane>
            <Tab.Pane eventKey="uhf-comms">
              <img src={cronus_2} style={{width:"1200px"}}/> 
            </Tab.Pane>
            <Tab.Pane eventKey="s-band-comms">
              <img src={cronus_3} style={{width:"1200px"}}/> 
            </Tab.Pane>
            <Tab.Pane eventKey="vid-comms-1">
              <img src={cronus_4} style={{width:"1200px"}}/> 
            </Tab.Pane>
            <Tab.Pane eventKey="vid-comms-2">
              <img src={cronus_5} style={{width:"1200px"}}/> 
            </Tab.Pane>
          </Tab.Content>
        </Col>
        <Col id="cronus-buttons" sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="comp-net">COMPUTER NETWORK</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="uhf-comms">UHF COMMS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="s-band-comms">S-BAND COMMS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="vid-comms-1">VIDEO COMMS 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="vid-comms-2">VIDEO COMMS 2</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Tab.Container>

        //  <Tabs  defaultActiveKey="Cronus_console" id="uncontrolled-tab-example" style={{ float: "right"}} >
        
        //   <Tab eventKey="CRONUS_1" title="Computer Network">
        //     <img src={cronus_1} style={{width:"300px"}}/> 
        //   </Tab>

        //   <Tab eventKey="CRONUS_2" title="UHF Communication">
        //     <img src={cronus_2} style={{width:"300px"}}/> 
        //   </Tab>

        //   <Tab eventKey="CRONUS_3" title="S-Band Communication">
        //     <img src={cronus_3} style={{width:"300px"}}/> 
        //   </Tab>

        //   <Tab eventKey="CRONUS_4" title="Video Communication">
        //     <img src={cronus_4} style={{width:"300px"}}/> 
        //   </Tab>

        //   <Tab eventKey="CRONUS_5" title="Video Communication 2">
        //     <img src={cronus_5} style={{width:"300px"}}/> 
        //   </Tab>

         
        // </Tabs>
  );
}

export const Cronus = styled(cronus)`
  width: 100%;
  height: 100%;
  position: absolute;

  #cronus-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #cronus-buttons .nav {
    margin-left: 20px;
    max-width: 300px;
    background-color: #f8f9fa;
    border-radius: 3px;
  }

  #cronus-buttons .nav-item a {
    padding: 20px 30px;
  }
`;