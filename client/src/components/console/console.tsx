import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import {Spartan} from './spartan';
import {Capcom} from './capcom';
import {Cronus1} from './cronus/cronus';
import {Ethos} from './ethos/ethos';
import {Flight} from './flight';
import {Bme} from './bme';

interface AppProps {
  className?: string;
};

const UConsole: React.FC<AppProps> = ( props ) => {
  return(
    <Tab.Container id="console-tabs">
      <Row className={props.className}>
        <Col id="console-buttons" sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="spartan">SPARTAN</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="cronus">CRONUS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="ethos">ETHOS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="flight">FLIGHT</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="capcom">CAPCOM</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="bme">BME</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col id="console-content" sm={10}>
          <Tab.Content>
            <Tab.Pane eventKey="spartan">
              <Spartan />
            </Tab.Pane>
            <Tab.Pane eventKey="cronus">
              <Cronus1 />
            </Tab.Pane>
            <Tab.Pane eventKey="ethos">
              <Ethos />
            </Tab.Pane>
            <Tab.Pane eventKey="flight">
              <Flight />
            </Tab.Pane>
            <Tab.Pane eventKey="capcom">
              <Capcom />
            </Tab.Pane>
            <Tab.Pane eventKey="bme">
              <Bme />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export const Console = styled(UConsole)`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  #console-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  #console-buttons .nav {
    margin-left: 20px;
    max-width: 150px;
    background-color: #f8f9fa;
    border-radius: 3px;
  }
  #console-buttons .nav-item a {
    padding: 20px 30px;
  }
`;