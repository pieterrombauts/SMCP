import React, { useEffect } from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import socket from './Socket';
import { RootState } from '../reducers';
import { connect, ConnectedProps } from 'react-redux';
import { animateMenus } from '../slices/menuAnimationSlice'
import { updateConsoles, updateLobbyID, updateUserRole } from '../slices/lobbySlice'
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
  useEffect(() => {
    socket.off('update consoles');
    socket.off('host disconnect');
    socket.on('update consoles', ( data: object ) => {
      console.log("Update function ran... again")
      props.updateConsoles({ consoles: data })
    })
    socket.on('host disconnect', () => {
      handleLobbyExit()
    })
  }, [ props.lobbyID ])
  
  function handleLobbyExit() {
    if (props.userRole === "display") {
      socket.emit('host leave room', props.lobbyID, props.userRole);
      props.animateMenus({home: "show", join: "hide", lobby: "hide"})
    } else {
      socket.emit('leave room', props.lobbyID, props.userRole);
      props.animateMenus({home: "hide", join: "show", lobby: "hide"})
    }
    props.updateLobbyID({ lobbyID: "" })
    props.updateUserRole({ userRole: "" })
  }

  function handleGameLaunch() {

  }
  
  return (
    <div id='lobby-container' className={props.className}>
            <div className='console-row'>
              <h1 id='game-pin-display'>Game PIN: {props.lobbyID !== "" && props.lobbyID}</h1>
            </div>
            {props.userRole !== 'display' && 
            <div className='console-row'>
              <label>Please pick a position to play as:</label>
            </div>}
            <div className='console-row'>
              <ConsoleButton console={"flight"} taken={props.consoles.flight} />
              <ConsoleButton console={"capcom"} taken={props.consoles.capcom} />
            </div>
            <div className='console-row'>
              <ConsoleButton console={"cosmo"} taken={props.consoles.cosmo} />
              <ConsoleButton console={"spartan"} taken={props.consoles.spartan} />
              <ConsoleButton console={"cronus"} taken={props.consoles.cronus} />
              <ConsoleButton console={"ethos"} taken={props.consoles.ethos} />
              <ConsoleButton console={"payload"} taken={props.consoles.payload} />
            </div>
            <div className='console-row'>
              <ConsoleButton console={"ops"} taken={props.consoles.ops} />
              <ConsoleButton console={"adco"} taken={props.consoles.adco} />
              <ConsoleButton console={"robo"} taken={props.consoles.robo} />
              <ConsoleButton console={"eva"} taken={props.consoles.eva} />
              <ConsoleButton console={"bme"} taken={props.consoles.bme} />
            </div>
            <div className='console-row'>
              <Button variant='outline-light' className='cancel-btn' onClick={handleLobbyExit}>Cancel</Button>
            </div>
            {Object.values(props.consoles).every(Boolean) && props.userRole === "display" &&
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
`;

export default connector(Lobby);