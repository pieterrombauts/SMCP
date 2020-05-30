import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tab from 'react-bootstrap/Tab'
import WarningSummary from './WarningSummary'
import ButtonsDisplay from './ButtonsDisplay'
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../../reducers';

interface AppProps {
  className?: string;
};

const mapState = (state: RootState ) => ({
  time: state.dataReducer.time,
})

const connector = connect(mapState)
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & AppProps

export const UCapcom: React.FC<Props> = (props) => {
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

const ConCapcom = styled(UCapcom)`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const Capcom = connector(ConCapcom);