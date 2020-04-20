import React from 'react';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { VitalSignsDisplay } from './VitalSignsDisplay'
import { EVASuitDisplay } from './EVASuitDisplay'

interface AppProps {
  className?: string;
};

const bme: React.FC<AppProps> = (props) => {
  return (
    <Tab.Container id="bme-tabs" defaultActiveKey="EVASuit">
      <Row className={props.className}>
        <Col id="bme-content" sm={10}>
          <Tab.Content>
            <Tab.Pane eventKey="EVASuit">
              <EVASuitDisplay />
            </Tab.Pane>

            <Tab.Pane eventKey="vitalSigns">
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
              <Nav.Link eventKey="vitalSigns">Vital Signs</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Tab.Container>

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