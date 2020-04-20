import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import socket from '../Socket';
import { connect, ConnectedProps } from 'react-redux';
import { animateMenus } from '../../slices/menuAnimationSlice'
import { updateLobbyID, updateUserRole } from '../../slices/lobbySlice'
import { RootState } from '../../reducers';

interface HomeProps {
  className?: string;
};

const mapState = (state: RootState ) => ({
  homeState: state.menuAnimationReducer.home
})

const connector = connect(mapState, { animateMenus, updateLobbyID, updateUserRole })
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & HomeProps

const UHome: React.FC<Props> = ( props ) => {
  function createLobby() {
    socket.emit('GET_ROOMS', (data: object) => {
      var roomID: string = Math.floor(100000 + Math.random() * 899999).toString();      // Generate a random 6 digit room ID
      while(data.hasOwnProperty(roomID) || roomID === '200769') {                       // If room ID already exists or is equal to secret backdoor
        roomID = Math.floor(100000 + Math.random() * 899999).toString();                // Then calculate a new room ID
      }
      socket.emit('CREATE_ROOM', roomID);                                               // Emit socket event to create a new room
      props.updateLobbyID({ lobbyID: roomID })
      props.updateUserRole({ userRole: "display" })                                     // Animate menus and set room ID and user role
      props.animateMenus({ home: "hide", join: "hide", lobby: "show"})
    });
  }

  function handleJoinRoomClick() {
    props.animateMenus({ home: "hide", join: "show", lobby: "hide"})
  }

  return (
    <div id="home-container" className={props.className}>
      <h2>Mission Control Center Simulator</h2>
      <div id="home-buttons">
        <Button variant="outline-light" onClick={createLobby}>Create a New Game</Button>
        <Button variant="outline-light" onClick={handleJoinRoomClick}>Join an Existing Game</Button>
      </div>
    </div>
  );
}

const Home = styled(UHome)`
  z-index: 3;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #f8f9fa;

  #home-buttons button {
    margin: 20px 10px;
  }
`;


export default connector(Home)
