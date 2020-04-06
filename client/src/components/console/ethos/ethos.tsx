import React from 'react';
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import EthosLifeSupportDisplay from './EthosLifeSupportDisplay';
import ethos_2 from "./../../../media/Ethos_2.png"
import ethos_3 from "./../../../media/Ethos_3.png"

interface AppProps {
  className?: string;
};

const UEthos: React.FC<AppProps> = ( props ) => {
  return(
        <Tab.Container id="ethos-tabs" defaultActiveKey="life-support">
        <Row className={props.className}>
          <Col id="ethos-content" sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="life-support" className="tab-content-flex-centered">
                <EthosLifeSupportDisplay />
              </Tab.Pane>
              <Tab.Pane eventKey="thermal-system">
                <img src={ethos_2} style={{width:"1200px"}}/> 
              </Tab.Pane>
              <Tab.Pane eventKey="regenerative-life-support">
                <img src={ethos_3} style={{width:"1200px"}}/> 
              </Tab.Pane>
            </Tab.Content>
          </Col>
          <Col id="ethos-buttons" sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="life-support">LIFE SUPPORT</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="thermal-system">THERMAL SYSTEM</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="regenerative-life-support">REGENERATIVE LIFE SUPPORT</Nav.Link>
              </Nav.Item>
              
            </Nav>
          </Col>
        </Row>
      </Tab.Container>
  );
}

export const Ethos = styled(UEthos)`
  width: 100%;
  height: 100%;
  position: absolute;

  #ethos-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #ethos-buttons .nav {
    margin-left: 20px;
    max-width: 300px;
    background-color: #f8f9fa;
    border-radius: 3px;
  }

  #ethos-buttons .nav-item a {
    padding: 20px 30px;
  }
`;