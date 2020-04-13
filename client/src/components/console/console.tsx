import React, { useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'
import { CSSTransition } from 'react-transition-group'
import { animateCSS } from '../../animation'
import {Spartan} from './spartan/spartan';
import {Capcom} from './capcom';
import {Cronus1} from './cronus/cronus';
import {Ethos} from './ethos/ethos';
import {OSTPVModal} from './OSTPVModal'
import {STATUSModal} from './STATUSModal'
import {Flight} from './flight';
import {Bme} from './bme';

interface AppProps {
  className?: string;
};

const UConsole: React.FC<AppProps> = ( props ) => {
  const [ ostpvModal, setOstpvModal ] = useState(false);
  const [ statusModal, setStatusModal] = useState(false);

  function handleOSTPVOpen(event: React.MouseEvent<HTMLButtonElement>) {
    setOstpvModal(true);
    console.log(document.getElementById("ostpv-modal"));
    document.getElementById("ostpv-modal")!.style.visibility = "visible";
  }
  function handleOSTPVClose() {
    setOstpvModal(false);
    setTimeout(() => {
      document.getElementById("ostpv-modal")!.style.visibility = "hidden";
    }, 500)
  }

  function handleStatusOpen(event: React.MouseEvent<HTMLButtonElement>) {
    setStatusModal(true);
    console.log(document.getElementById("status-modal"));
    document.getElementById("status-modal")!.style.visibility = "visible";
  }
  function handleStatusClose() {
    setStatusModal(false);
    setTimeout(() => {
      document.getElementById("status-modal")!.style.visibility = "hidden";
    }, 500)
  }

  return(
    <div id="game-container">
      <Tab.Container id="console-tabs">
        <Row className={props.className}>
          <Col id="console-buttons" sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="spartan">SPARTAN</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="cronus">CRONUS</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="ethos">ETHOS</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="flight">FLIGHT</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="capcom">CAPCOM</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="bme">BME</Nav.Link>
              </Nav.Item>
            </Nav>
            <Button variant="outline-primary" className={`${ostpvModal ? 'selected' : ''}`} onClick={handleOSTPVOpen}>OSTPV</Button>
            <Button variant="outline-primary" className={`${statusModal ? 'selected' : ''}`} onClick={handleStatusOpen}>STATUS</Button>
          </Col>
          <Col id="console-content" sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="spartan">
                <Spartan />
              </Tab.Pane>
              <Tab.Pane eventKey="cronus">
                <Cronus1 />
              </Tab.Pane>
              <Tab.Pane eventKey="ethos">
                <Ethos />
              </Tab.Pane>
              <Tab.Pane eventKey="flight">
                <Flight />
              </Tab.Pane>
              <Tab.Pane eventKey="capcom">
                <Capcom />
              </Tab.Pane>
              <Tab.Pane eventKey="bme">
                <Bme />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      <CSSTransition 
        in={ostpvModal === true}
        timeout={500}
        classNames="modal"
        onEnter={() => {animateCSS("#modal-overlay", "fadeIn", ["faster"])}}
        onExit={() => {animateCSS("#modal-overlay", "fadeOut", ["faster"])}}
      >
        <OSTPVModal show={ostpvModal} closeFunction={handleOSTPVClose}/>
      </CSSTransition>
      <CSSTransition 
        in={statusModal === true}
        timeout={500}
        classNames="modal"
        onEnter={() => {animateCSS("#modal-overlay-status", "fadeIn", ["faster"])}}
        onExit={() => {animateCSS("#modal-overlay-status", "fadeOut", ["faster"])}}
      >
        <STATUSModal show={statusModal} closeFunction={handleStatusClose}/>
      </CSSTransition>
    </div>
  );
}

export const Console = styled(UConsole)`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  #console-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  #console-buttons .nav, #console-buttons button {
    margin-left: 20px;
    max-width: 150px;
    background-color: #F8F9FA;
    border-radius: 3px;
  }
  #console-buttons .nav-item a, #console-buttons button {
    text-align: center;
    padding: 20px 30px;
  }
  #console-buttons button {
    border-color: #F8F9FA;
    margin-top: 20px;
  }
  #console-buttons button:hover {
    color: #0056B3; 
  }
  .selected {
    color: #F8F9FA !important;
    background-color: #007BFF !important;
    border-color: #007BFF !important;
  }
`;