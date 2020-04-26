import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { VitalSignsDisplay } from './VitalSignsDisplay'
import { EVASuitDisplay } from './EVASuitDisplay'
import socket from '../../Socket'

interface AppProps {
  className?: string;
};

const UBme: React.FC<AppProps> = (props) => {
  const [ firstOpensVS, setFirstOpensVS ] = useState<boolean>(true);
  function updateFirstConsoleVSOpen(event: React.MouseEvent<any>) {
    if (firstOpensVS) {
      socket.emit('FIRST_CONSOLE_OPEN', 'bme-vs')
      setFirstOpensVS(false);
    }
  }
  return (
    <Tab.Container id="bme-tabs" defaultActiveKey="EVASuit">
      <Row className={props.className}>
        <Col id="bme-content" sm={10}>
          <Tab.Content>
            <Tab.Pane eventKey="EVASuit">
              <EVASuitDisplay />
            </Tab.Pane>
            <Tab.Pane onClick={updateFirstConsoleVSOpen} eventKey="vitalSigns">
              <VitalSignsDisplay />
            </Tab.Pane>
          </Tab.Content>
        </Col>
        <Col id="bme-buttons" sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="EVASuit">EVA Suit</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={updateFirstConsoleVSOpen} eventKey="vitalSigns">Vital Signs</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Tab.Container>

  );
}

export const Bme = styled(UBme)`
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