import React, { useState, useEffect, useRef } from 'react';
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
import {Capcom} from './capcom/capcom';
import {Cronus1} from './cronus/cronus';
import {Ethos} from './ethos/ethos';
import {OSTPVModal} from './OSTPVModal'
import {STATUSModal} from './STATUSModal'
import {ViewEFNModal} from './ViewEFNModal';
import {statusReport, firstConsoleOpens} from './customTypes'
import {Flight} from './flight';
import {Bme} from './bme/bme';
// import { CallRequestGroup } from './CallRequestGroup'
import { RootState } from '../../reducers';
import { updateTime } from '../../slices/dataSlice'
import socket from '../Socket'
import { connect, ConnectedProps } from 'react-redux';
import { Tutor } from './tutor/Tutor';

interface consoleProps {
  className?: string;
};

const mapState = (state: RootState ) => ({
  lobbyID: state.lobbyPositionsReducer.lobbyID,
  userRole: state.lobbyPositionsReducer.userRole
})

const connector = connect(mapState, { updateTime })
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & consoleProps

const UConsole: React.FC<Props> = ( props ) => {
  const [ ostpvModal, setOstpvModal ] = useState(false);
  const [ statusModal, setStatusModal ] = useState(false);
  const [ viewEFNModal, setViewEFNModal ] = useState(false);
  // const [ callRequests, setCallRequests ] = useState({spartan: false, cronus: false, ethos: false, flight: false, capcom: false, bme: false})
  const [ reports, setReports ] = useState<statusReport[]>([])
  const [ efnID, setEfnID ] = useState("");
  const [ firstOpens, setFirstOpens ] = useState<firstConsoleOpens>({spartan: true, cronus: true, ethos: true, flight: true, capcom: true, bme: true, efn: true, ostpv: true});
  useEffect(() => {
    // socket.off('CALL_REQUESTED')
    // socket.on('CALL_REQUESTED', (sender: "spartan" | "cronus" | "ethos" | "flight" | "capcom" | "bme", time: string) => {
    //   showCallRequest(sender);
    // })
    socket.off('UPDATE_TIME').on('UPDATE_TIME', ( time: string ) => {
      props.updateTime({time: time});
    })
    socket.off('UPDATE_REPORTS').on('UPDATE_REPORTS', ( new_reports: statusReport[] ) => {
      setReports(new_reports);
      console.log(new_reports);
    })
  }, [])

  function handleOSTPVOpen(event: React.MouseEvent<HTMLButtonElement>) {
    if (firstOpens.ostpv) {
      socket.emit('FIRST_CONSOLE_OPEN', 'ostpv')
      var newFirstOpens = firstOpens;
      newFirstOpens['ostpv'] = false;
      setFirstOpens(newFirstOpens);
    }
    setOstpvModal(true);
    document.getElementById("ostpv-modal")!.style.visibility = "visible";
  }
  function handleOSTPVClose() {
    setOstpvModal(false);
    setTimeout(() => {
      document.getElementById("ostpv-modal")!.style.visibility = "hidden";
    }, 500)
  }

  function handleStatusOpen(event: React.MouseEvent<HTMLButtonElement>) {
    if (firstOpens.efn) {
      socket.emit('FIRST_CONSOLE_OPEN', 'efn')
      var newFirstOpens = firstOpens;
      newFirstOpens['efn'] = false;
      setFirstOpens(newFirstOpens);
    }
    setStatusModal(true);
    document.getElementById("status-modal")!.style.visibility = "visible";
  }
  function handleStatusClose() {
    setStatusModal(false);
    setTimeout(() => {
      document.getElementById("status-modal")!.style.visibility = "hidden";
    }, 500)
  }

  function handleViewEFNOpen() {
    setViewEFNModal(true);
    document.getElementById("view-efn-modal")!.style.visibility = "visible";
  }
  function handleViewEFNClose() {
    setViewEFNModal(false);
    setTimeout(() => {
      document.getElementById("view-efn-modal")!.style.visibility = "hidden";
    }, 500)
  }

  function handleEFNDetailedView(selectedEfnID: string) {
    setEfnID(selectedEfnID);
    handleViewEFNOpen();
  }

  function updateFirstConsoleOpen(event: React.MouseEvent<any>) {
    switch(event.currentTarget.id) {
      case 'console-tabs-tab-spartan':
        if (firstOpens.spartan) {
          socket.emit('FIRST_CONSOLE_OPEN', 'spartan-pc')
          var newFirstOpens = firstOpens;
          newFirstOpens['spartan'] = false;
          setFirstOpens(newFirstOpens);
        }
        break;
      case 'console-tabs-tab-cronus':
        if (firstOpens.cronus) {
          socket.emit('FIRST_CONSOLE_OPEN', 'cronus-cn')
          var newFirstOpens = firstOpens;
          newFirstOpens['cronus'] = false;
          setFirstOpens(newFirstOpens);
        }
        break;
      case 'console-tabs-tab-ethos':
        if (firstOpens.ethos) {
          socket.emit('FIRST_CONSOLE_OPEN', 'ethos-ls')
          var newFirstOpens = firstOpens;
          newFirstOpens['ethos'] = false;
          setFirstOpens(newFirstOpens);
        }
        break;
      case 'console-tabs-tab-flight':
        if (firstOpens.flight) {
          socket.emit('FIRST_CONSOLE_OPEN', 'flight')
          var newFirstOpens = firstOpens;
          newFirstOpens['flight'] = false;
          setFirstOpens(newFirstOpens);
        }
        break;
      case 'console-tabs-tab-capcom':
        if (firstOpens.capcom) {
          socket.emit('FIRST_CONSOLE_OPEN', 'capcom')
          var newFirstOpens = firstOpens;
          newFirstOpens['capcom'] = false;
          setFirstOpens(newFirstOpens);
        }
        break;
      case 'console-tabs-tab-bme':
        if (firstOpens.bme) {
          socket.emit('FIRST_CONSOLE_OPEN', 'bme-eva')
          var newFirstOpens = firstOpens;
          newFirstOpens['bme'] = false;
          setFirstOpens(newFirstOpens);
        }
        break;
    }
  }
  // function handleCallRequest(event: React.MouseEvent<DropdownItem>) {
  //   const currTarget = event.currentTarget as unknown as HTMLAnchorElement;
  //   socket.emit("CALL_REQUEST", currTarget.text.toLowerCase(), props.userRole, props.lobbyID)
  // }
  // function showCallRequest(sender: "spartan" | "cronus" | "ethos" | "flight" | "capcom" | "bme") {
  //   var newCallRequests = callRequests;
  //   newCallRequests[sender] = true;
  //   setCallRequests(newCallRequests);
  // }
  // function hideCallRequest(sender: "spartan" | "cronus" | "ethos" | "flight" | "capcom" | "bme") {
  //   var newCallRequests = callRequests;
  //   newCallRequests[sender] = false;
  //   console.log(newCallRequests);
  //   setCallRequests(newCallRequests);
  // }

  return(
    <div id="game-container">
      {
      // NO NEED FOR THIS ANY MORE AS FUNCTIONALITY WAS REMOVED FROM REQUIREMENTS
      /* <div style={{position: "relative", zIndex: 20}}>
        <CallRequestGroup callRequests={callRequests} onHide={hideCallRequest}/>
      </div> */}
      <Tab.Container id="console-tabs">
        <Row className={props.className}>
          <Col id="console-buttons" sm={2}>
            {props.userRole === "display" &&
              <Nav id="tutor-button" variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="tutor">TUTOR</Nav.Link>
                </Nav.Item>
              </Nav>
            }
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link onClick={updateFirstConsoleOpen} eventKey="spartan">SPARTAN</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={updateFirstConsoleOpen} eventKey="cronus">CRONUS</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={updateFirstConsoleOpen} eventKey="ethos">ETHOS</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={updateFirstConsoleOpen} eventKey="flight">FLIGHT</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={updateFirstConsoleOpen} eventKey="capcom">CAPCOM</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={updateFirstConsoleOpen} eventKey="bme">BME</Nav.Link>
              </Nav.Item>
            </Nav>
            <Button variant="outline-primary" className={`${ostpvModal ? 'selected' : ''}`} onClick={handleOSTPVOpen}>OSTPV</Button>
            <Button variant="outline-primary" className={`${statusModal ? 'selected' : ''}`} onClick={handleStatusOpen}>EFN</Button>
            {
            // NO NEED FOR THIS ANY MORE AS FUNCTIONALITY WAS REMOVED FROM REQUIREMENTS
            /* <DropdownButton 
              id="call-request-button" 
              title="ALERT "
              drop="right"
              variant="primary"
            >
              <DropdownItem as={DropdownItem} onClick={handleCallRequest}>SPARTAN</DropdownItem>
              <DropdownItem as={DropdownItem} onClick={handleCallRequest}>CRONUS</DropdownItem>
              <DropdownItem as={DropdownItem} onClick={handleCallRequest}>ETHOS</DropdownItem>
              <DropdownItem as={DropdownItem} onClick={handleCallRequest}>FLIGHT</DropdownItem>
              <DropdownItem as={DropdownItem} onClick={handleCallRequest}>CAPCOM</DropdownItem>
              <DropdownItem as={DropdownItem} onClick={handleCallRequest}>BME</DropdownItem>
            </DropdownButton> */}
          </Col>
          <Col id="console-content" sm={10}>
            <Tab.Content id="tab-content">
              {props.userRole &&
                <Tab.Pane eventKey="tutor">
                  <Tutor roomID={props.lobbyID}/>
                </Tab.Pane>
              }
              <Tab.Pane eventKey="spartan">
                <Spartan />
              </Tab.Pane>
              <Tab.Pane eventKey="cronus">
                <Cronus1 />
              </Tab.Pane>
              <Tab.Pane eventKey="ethos">
                <Ethos />
              </Tab.Pane>
              <Tab.Pane eventKey="flight" id="flight-tab">
                <Flight reports={reports} handleView={handleEFNDetailedView}/>
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
        <OSTPVModal lobbyID={props.lobbyID} show={ostpvModal} closeFunction={handleOSTPVClose}/>
      </CSSTransition>
      <CSSTransition 
        in={statusModal === true}
        timeout={500}
        classNames="modal"
        onEnter={() => {animateCSS("#modal-overlay-status", "fadeIn", ["faster"])}}
        onExit={() => {animateCSS("#modal-overlay-status", "fadeOut", ["faster"])}}
      >
        <STATUSModal userRole={props.userRole} lobbyID={props.lobbyID} show={statusModal} closeFunction={handleStatusClose}/>
      </CSSTransition>
      <CSSTransition 
        in={viewEFNModal === true}
        timeout={500}
        classNames="modal"
        onEnter={() => {animateCSS("#modal-overlay-view-efn", "fadeIn", ["faster"])}}
        onExit={() => {animateCSS("#modal-overlay-view-efn", "fadeOut", ["faster"])}}
      >
        <ViewEFNModal lobbyID={props.lobbyID} show={viewEFNModal} reports={reports} selectedEfn={efnID} closeFunction={handleViewEFNClose}/>
      </CSSTransition>
    </div>
  );
}

const Console = styled(UConsole)`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  #tutor-button {
    margin-bottom: 20px;
  }
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
  #console-content, #tab-content, #console-tabs-tabpane-flight {
    height: 100%;
  }
  #call-request-button {
    min-width: 150px;
    color: #007BFF;
  }
`;

export default connector(Console);