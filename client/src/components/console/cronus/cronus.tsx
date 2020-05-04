import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CronusCompNetDisplay from './CronusCompNetDisplay'
import CronusUHFCommsDisplay from './CronusUHFCommsDisplay'
import CronusSBandCommsDisplay from './CronusSBandCommsDisplay'
import CronusVidComm1Display from './CronusVidComm1Display'
import CronusVidComm2Display from './CronusVidComm2Display'
import { generateRandVal } from '../../../dataGenerator';
import socket from '../../Socket';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../../reducers';
import { decreaseValue } from '../../../dataDecreaser';

interface AppProps {
  className?: string;
};

const mapState = (state: RootState ) => ({
  time: state.dataReducer.time,
})

const connector = connect(mapState)
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & AppProps

const defaultValues = {
  compNet: {
    time: '',
    standardCmds: 10466,
    loadCmds: 11248
  },
  sBand: {
    elevationGimbal: 60,
    azimuthGimbal: 2
  },
  vComms1: {
    elevationGimbal: 48,
    crossElevationGimbal: 45
  }
}

const Cronus: React.FC<Props> = ( props ) => {
  var [values, setValues] = useState(defaultValues);
  const intervalRef = useRef(0);
  useEffect(() => {
    if (intervalRef.current !== 0) {
      clearInterval(intervalRef.current);
    }
    const id = setInterval(() => {
      var newValues = {
        compNet: {
          time: "",
          standardCmds: 10466,
          loadCmds: 11248
        },
        sBand: {
          elevationGimbal:  parseFloat(decreaseValue(values.sBand.elevationGimbal).toFixed(2)),
          azimuthGimbal: parseFloat(decreaseValue(values.sBand.azimuthGimbal).toFixed(2))
        },
        vComms1: {
          elevationGimbal: parseFloat(decreaseValue(values.vComms1.elevationGimbal).toFixed(2)),
          crossElevationGimbal: parseFloat(decreaseValue(values.vComms1.crossElevationGimbal).toFixed(2))
        }
      }
      setValues(values = newValues);
    }, 5000);
    intervalRef.current = id;
  },[])
  const [ firstOpensCronus, setFirstOpensCronus ] = useState<{uhf: boolean, sband: boolean, vc1: boolean, vc2: boolean}>({uhf: true, sband: true, vc1: true, vc2: true});
  function updateFirstConsoleOpenCronus(event: React.MouseEvent<any>) {
    switch(event.currentTarget.id) {
      case 'cronus-tabs-tab-uhf-comms':
        if (firstOpensCronus.uhf) {
          socket.emit('FIRST_CONSOLE_OPEN', 'cronus-uhf')
          var newFirstOpens = firstOpensCronus;
          newFirstOpens['uhf'] = false;
          setFirstOpensCronus(newFirstOpens);
        }
        break;
      case 'cronus-tabs-tab-s-band-comms':
        if (firstOpensCronus.sband) {
          socket.emit('FIRST_CONSOLE_OPEN', 'cronus-sband')
          var newFirstOpens = firstOpensCronus;
          newFirstOpens['sband'] = false;
          setFirstOpensCronus(newFirstOpens);
        }
        break;
      case 'cronus-tabs-tab-vid-comms-1':
        if (firstOpensCronus.vc1) {
          socket.emit('FIRST_CONSOLE_OPEN', 'cronus-vc1')
          var newFirstOpens = firstOpensCronus;
          newFirstOpens['vc1'] = false;
          setFirstOpensCronus(newFirstOpens);
        }
        break;
      case 'cronus-tabs-tab-vid-comms-2':
        if (firstOpensCronus.vc2) {
          socket.emit('FIRST_CONSOLE_OPEN', 'cronus-vc2')
          var newFirstOpens = firstOpensCronus;
          newFirstOpens['vc2'] = false;
          setFirstOpensCronus(newFirstOpens);
        }
        break;
    }
  }
  return(
    <Tab.Container id="cronus-tabs" defaultActiveKey="comp-net">
      <Row className={props.className}>
        <Col id="cronus-content" sm={10}>
          <Tab.Content>
            <Tab.Pane eventKey="comp-net">
              <CronusCompNetDisplay values={values} time={props.time} />
            </Tab.Pane>
            <Tab.Pane eventKey="uhf-comms">
              <CronusUHFCommsDisplay />
            </Tab.Pane>
            <Tab.Pane eventKey="s-band-comms">
              <CronusSBandCommsDisplay values={values} />
            </Tab.Pane>
            <Tab.Pane eventKey="vid-comms-1">
              <CronusVidComm1Display values={values} />
            </Tab.Pane>
            <Tab.Pane eventKey="vid-comms-2">
              <CronusVidComm2Display />
            </Tab.Pane>
          </Tab.Content>
        </Col>
        <Col id="cronus-buttons" sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="comp-net">COMPUTER NETWORK</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={updateFirstConsoleOpenCronus} eventKey="uhf-comms">UHF COMMS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={updateFirstConsoleOpenCronus} eventKey="s-band-comms">S-BAND COMMS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={updateFirstConsoleOpenCronus} eventKey="vid-comms-1">VIDEO COMMS 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link onClick={updateFirstConsoleOpenCronus} eventKey="vid-comms-2">VIDEO COMMS 2</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Tab.Container>
  );
}

const ConCronus1 = styled(Cronus)`
  width: 100%;
  height: 100%;
  position: absolute;

  #cronus-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #cronus-buttons .nav {
    margin-left: 20px;
    max-width: 300px;
    background-color: #f8f9fa;
    border-radius: 3px;
  }

  #cronus-buttons .nav-item a {
    padding: 20px 30px;
  }

`;

export const Cronus1 = connector(ConCronus1);
