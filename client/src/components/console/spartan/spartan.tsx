import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {SpartanExtThermal} from "./spartanExtThermal";
import {SpartanPower} from "./spartanPower";
import socket from '../../Socket';

interface AppProps {
  className?: string;
};

const USpartan: React.FC<AppProps> = ( props ) => {
  const [ firstOpensETC, setFirstOpensETC ] = useState<boolean>(true);
  function updateFirstConsoleETCOpen(event: React.MouseEvent<any>) {
    if (firstOpensETC) {
      socket.emit('FIRST_CONSOLE_OPEN', 'spartan-etc')
      setFirstOpensETC(false);
    }
  }
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
              <Nav.Link onClick={updateFirstConsoleETCOpen} eventKey="ext-thermal">EXT. THERMAL CONTROL</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export const Spartan = styled(USpartan)`
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