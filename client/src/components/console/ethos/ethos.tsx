import React, { useState } from 'react';
import styled from 'styled-components'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import EthosLifeSupportDisplay from './EthosLifeSupportDisplay';
import EthosThermalSystemDisplay from './EthosThermalSystemDisplay';
import EthosRegenLifeSupportDisplay from './EthosRegenLifeSupportDisplay';
import socket from '../../Socket';

interface AppProps {
  className?: string;
};

const UEthos: React.FC<AppProps> = ( props ) => {
  const [ firstOpensEthos, setFirstOpensEthos ] = useState<{ts: boolean, rls: boolean}>({ts: true, rls: true});
  function updateFirstConsoleOpenEthos(event: React.MouseEvent<any>) {
    switch(event.currentTarget.id) {
      case 'ethos-tabs-tab-thermal-system':
        if (firstOpensEthos.ts) {
          socket.emit('FIRST_CONSOLE_OPEN', 'ethos-ts')
          var newFirstOpens = firstOpensEthos;
          newFirstOpens['ts'] = false;
          setFirstOpensEthos(newFirstOpens);
        }
        break;
      case 'ethos-tabs-tab-regenerative-life-support':
        if (firstOpensEthos.rls) {
          socket.emit('FIRST_CONSOLE_OPEN', 'ethos-rls')
          var newFirstOpens = firstOpensEthos;
          newFirstOpens['rls'] = false;
          setFirstOpensEthos(newFirstOpens);
        }
        break;
    }
  }
  return (
    <Tab.Container id="ethos-tabs" defaultActiveKey="life-support">
      <Row className={props.className}>
        <Col id="ethos-content" sm={10}>
          <Tab.Content>
            <Tab.Pane eventKey="life-support" className="tab-content-flex-centered">
              <EthosLifeSupportDisplay />
            </Tab.Pane>
            <Tab.Pane eventKey="thermal-system">
              <EthosThermalSystemDisplay />
            </Tab.Pane>
            <Tab.Pane eventKey="regenerative-life-support">
            <EthosRegenLifeSupportDisplay />
            </Tab.Pane>
          </Tab.Content>
        </Col>
        <Col id="ethos-buttons" sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="life-support">LIFE SUPPORT</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={updateFirstConsoleOpenEthos} eventKey="thermal-system">THERMAL SYSTEM</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={updateFirstConsoleOpenEthos} eventKey="regenerative-life-support">REGENERATIVE LIFE SUPPORT</Nav.Link>
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