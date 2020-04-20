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
    <>
      <WarningSummary />
      <SignalDisplay />
      {/* <ButtonsDisplay /> */}
    </>
  );
}

export const Capcom = styled(capcom)`
  width: 100%;
  height: 100%;
  position: absolute;
`;