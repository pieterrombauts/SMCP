import React from 'react';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tab from 'react-bootstrap/Tab'
import WarningSummary from './WarningSummary'
import ButtonsDisplay from './ButtonsDisplay'

interface AppProps {
  className?: string;
  time: string;
};

const capcom: React.FC<AppProps> = (props) => {
  return (
    <Tab.Container id="campcom-tab" defaultActiveKey="capcom">
      <Row className={props.className}>
        <Col id="capcom-content" sm={10}>
              <WarningSummary />
              <ButtonsDisplay time={props.time}/>
        </Col>
      </Row>
    </Tab.Container>
   
  );
}

export const Capcom = styled(capcom)`
  width: 100%;
  height: 100%;
  position: absolute;
`;