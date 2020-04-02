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

interface AppProps {
  className?: string;
};

const defaultValues = {
  compNet: {
    time: '053/05:25:01',
    standardCmds: 10466,
    loadCmds: 11248
  },
  sBand: {
    elevationGimbal: 0,
    azimuthGimbal: 0
  },
  vComms1: {
    elevationGimbal: 0,
    crossElevationGimbal: 0
  }
}

const Cronus: React.FC<AppProps> = ( props ) => {
  var [values, setValues] = useState(defaultValues)
  const intervalRef = useRef(0);

  useEffect(() => {
    if (intervalRef.current !== 0) {
      clearInterval(intervalRef.current);
    }
    const id = setInterval(() => {
      var newValues = {
        compNet: {
          time: '053/05:25:01',
          standardCmds: 10466,
          loadCmds: 11248
        },
        sBand: {
          elevationGimbal: generateRandVal(45, 90).toFixed(2),
          azimuthGimbal: generateRandVal(1.59, 103.5).toFixed(2)
        },
        vComms1: {
          elevationGimbal: generateRandVal(27, 48).toFixed(2),
          crossElevationGimbal: generateRandVal(36, 45).toFixed(2),
        }
      }
      setValues(newValues);
    }, 5000);
    intervalRef.current = id;
  },[])
  return(
    <Tab.Container id="cronus-tabs" defaultActiveKey="comp-net">
      <Row className={props.className}>
        <Col id="cronus-content" sm={10}>
          <Tab.Content>
            <Tab.Pane eventKey="comp-net">
              <CronusCompNetDisplay values={values}/>
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
              <Nav.Link eventKey="uhf-comms">UHF COMMS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="s-band-comms">S-BAND COMMS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="vid-comms-1">VIDEO COMMS 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="vid-comms-2">VIDEO COMMS 2</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export const Cronus1 = styled(Cronus)`
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