import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import socket from '../Socket';
import { RootState } from '../../reducers';
import { connect, ConnectedProps } from 'react-redux';
import { animateMenus } from '../../slices/menuAnimationSlice'
import { updateConsoles, updateLobbyID, updateUserRole } from '../../slices/lobbySlice'
import ConsoleButton from './ConsoleButton'

interface LobbyProps {
  className?: string;
};

const mapState = (state: RootState ) => ({
  lobbyState: state.menuAnimationReducer.home,
  joinState: state.menuAnimationReducer.join,
  consoles: state.lobbyPositionsReducer.consoles,
  lobbyID: state.lobbyPositionsReducer.lobbyID,
  userRole: state.lobbyPositionsReducer.userRole
})

const connector = connect(mapState, { animateMenus, updateConsoles, updateLobbyID, updateUserRole })
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & LobbyProps

const ULobby: React.FC<Props> = ( props ) => { 
  const [connections, setConnections] = useState<{name: string, console: boolean}[]>([]);
  useEffect(() => {
    socket.off('STUDENT_NO_CONSOLE').on('STUDENT_NO_CONSOLE', () => {
      alert('Could not start game. There are students in the session who have not selected a console.')
    })
    socket.off('UPDATE_CONSOLES').on('UPDATE_CONSOLES', ( data: object ) => {
      props.updateConsoles({ consoles: data })
    })
    socket.off('HOST_LEFT').on('HOST_LEFT', () => {
      window.location.reload();
    })
    socket.off('SHOW_DISPLAY').on('SHOW_DISPLAY', ()=> {
      props.animateMenus({ home: 'hide', tutorlogin: 'hide', join: 'hide', lobby: 'hide', game: 'show'})
    })
    socket.off('JOIN_CONNECTION').on('JOIN_CONNECTION', (conn: string, console_conns: string[])=> {
      let updated_conns = [...connections, {name: conn, console: false}];
      setConnections(updated_conns.map((connection) => { return {name: connection.name, console: console_conns.includes(connection.name)} }));
    })
    socket.off('SELECT_CONNECTION').on('SELECT_CONNECTION', (console_conns: string[])=> {
      let updated_conns = connections;
      setConnections(updated_conns.map((connection) => { return {name: connection.name, console: console_conns.includes(connection.name)} }));
    })
    socket.off('LEAVE_CONNECTION').on('LEAVE_CONNECTION', (conn: string, console_conns: string[])=> {
      let updated_conns = [...connections].filter((connection) => { return connection.name !== conn });
      setConnections(updated_conns.map((connection) => { return {name: connection.name, console: console_conns.includes(connection.name)} }));
    })
    socket.off('DC_CONNECTION').on('DC_CONNECTION', (conn: string, console_conns: string[])=> {
      let updated_conns = [...connections].filter((connection) => { return connection.name !== conn });
      setConnections(updated_conns.map((connection) => { return {name: connection.name, console: console_conns.includes(connection.name)} }));
    })
  }, [ props.lobbyID, connections ])
  
  function handleLobbyExit() {
    socket.emit('LEAVE_ROOM', props.lobbyID)
    if (props.userRole === "display" || props.userRole === "tutor") {
      props.animateMenus({ home: 'hide', tutorlogin: 'show', join: 'hide', lobby: 'hide', game: 'hide'})
    } else {
      props.animateMenus({ home: 'hide', tutorlogin: 'hide', join: 'show', lobby: 'hide', game: 'hide'})
    }
    props.updateLobbyID({ lobbyID: "" })
    props.updateUserRole({ userRole: "" })
  }

  function handleGameLaunch() {
    socket.emit('GAME_START', props.lobbyID)
  }
  
  return (
    <div id='lobby-container' className={props.className}>
      <div id="lobby-conn-monitor">
        { props.userRole === "display" && connections.map((connection) => {
          return (
            <p className={connection.console ? "green" : "red"}>{connection.name}</p>
          )
        })}
      </div>
      <div className='console-row'>
        <h1 id='game-pin-display'>Simulator Code: {props.lobbyID !== "" && props.lobbyID}</h1>
      </div>
      {props.userRole !== 'display' && 
      <div className='console-row'>
        <label>Please pick your assigned console:</label>
      </div>}
      <div className='console-row'>
        <ConsoleButton console={"spartan"} count={props.consoles.spartan} />
        <ConsoleButton console={"cronus"} count={props.consoles.cronus} />
        <ConsoleButton console={"ethos"} count={props.consoles.ethos} />
      </div>
      <div className='console-row'>
        <ConsoleButton console={"flight"} count={props.consoles.flight} />
        <ConsoleButton console={"capcom"} count={props.consoles.capcom} />
        <ConsoleButton console={"bme"} count={props.consoles.bme} />
      </div>
      <div className='console-row'>
        <Button variant='outline-light' className='cancel-btn' onClick={handleLobbyExit}>Cancel</Button>
      </div>
      {props.userRole === "display" &&
      <div className="console-row">
        <Button variant='light' className='launch-btn' onClick={handleGameLaunch}>GO FOR LAUNCH</Button>
      </div>
      }
    </div>
  );
}

const Lobby = styled(ULobby)`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #f8f9fa;

  #lobby-conn-monitor {
    display: flex;
  }
  .console-row {
    display: flex;
    justify-content: center;
  }

  .cancel-btn {
    margin-top: 30px;
  }

  .launch-btn {
    padding: 20px;
    margin-top: 30px;
  }

  button:disabled, button[disabled] {
    cursor: default;
  }

  .takenOne, .takenOne[disabled]:hover {
    background: repeating-linear-gradient(
      45deg,
      #f8f9fa,
      #f8f9fa 10px,
      rgba(248,249,250,0.7) 10px,
      rgba(248,249,250,0.7) 20px
    ) !important;
  }

  .takenOne > span {
    padding: 2px 5px;
    background-color: #f8f9fa;
    border-radius: 5px;
  }

  .takenOne:hover {
    background-color: #f8f9fa !important;
  }

  .red {
    color: red;
    margin: 5px 10px;
  }
  .green {
    color: green;
    margin: 5px 10px;
  }
`;

export default connector(Lobby);