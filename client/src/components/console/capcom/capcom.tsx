import React from 'react';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tab from 'react-bootstrap/Tab'
import WarningSummary from './WarningSummary'
import ButtonsDisplay from './ButtonsDisplay'
import SignalDisplay from './SignalDisplay'

interface AppProps {
  className?: string;
};

const capcom: React.FC<AppProps> = (props) => {
  return (
    <Tab.Container id="campcom-tab" defaultActiveKey="capcom">
      <Row className={props.className}>
        <Col id="capcom-content" sm={10}>
          <Tab.Content>

            <Tab.Pane eventKey="capcom"> */}
              <WarningSummary />
              <ButtonsDisplay />
            </Tab.Pane>

          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
   
  );
}

export const Capcom = styled(capcom)`
width: 100%;
  height: 100%;
  position: absolute;

  #capcom-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #capcom-buttons .nav {
    margin-left: 20px;
    max-width: 300px;
    background-color: #f8f9fa;
    border-radius: 3px;
  }

  #capcom-buttons .nav-item a {
    padding: 20px 30px;
  }
`;