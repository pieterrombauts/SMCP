import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import socket from '../Socket';
import { connect, ConnectedProps } from 'react-redux';
import { animateMenus } from '../../slices/menuAnimationSlice'
import { RootState } from '../../reducers';
import { updateLobbyID, updateConsoles, updateUserRole } from '../../slices/lobbySlice';

interface TutorLoginProps {
  className?: string;
};

const mapState = (state: RootState ) => ({
  joinState: state.menuAnimationReducer.join
})

const connector = connect(mapState, { animateMenus, updateLobbyID, updateConsoles, updateUserRole })
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & TutorLoginProps

const UTutorLogin: React.FC<Props> = ( props ) => {
  function createLobby() {
    socket.emit('GET_ROOMS', (data: object) => {
      var roomID: string = Math.floor(100000 + Math.random() * 899999).toString();      // Generate a random 6 digit room ID
      while(data.hasOwnProperty(roomID)) {                       // If room ID already exists or is equal to secret backdoor
        roomID = Math.floor(100000 + Math.random() * 899999).toString();                // Then calculate a new room ID
      }
      socket.emit('CREATE_ROOM', roomID);                                               // Emit socket event to create a new room
      props.updateLobbyID({ lobbyID: roomID })
      props.updateUserRole({ userRole: "display" })                                     // Animate menus and set room ID and user role
      props.animateMenus({ home: 'hide', tutorlogin: 'hide', join: 'hide', lobby: 'show', game: 'hide'})
    });
  }
  
  function handleJoinCancel() {
    props.animateMenus({ home: 'show', tutorlogin: 'hide', join: 'hide', lobby: 'hide', game: 'hide'})
    const textbox = document.querySelector("#tutor-login-pin-input") as HTMLInputElement;
    if (textbox) { textbox.value = "" }
  }

  function getConsoleAvailability(roomID: string) {
    socket.emit('GET_CONSOLES', roomID, (data: object) => {
      props.updateConsoles({ consoles: data })
    })
  }

  function handleJoinSubmit() {
    const roomIDTextbox = document.querySelector('#tutor-login-pin-input') as HTMLInputElement;
    socket.emit('GET_ROOMS', (data: object) => {
      if (data.hasOwnProperty(roomIDTextbox.value)) {
        socket.emit('TUTOR_JOIN_ROOM', roomIDTextbox.value);
        props.updateLobbyID({ lobbyID: roomIDTextbox.value })
        props.updateUserRole({ userRole: "tutor"})
        getConsoleAvailability(roomIDTextbox.value);
        props.animateMenus({ home: 'hide', tutorlogin: 'hide', join: 'hide', lobby: 'show', game: 'hide'})
        roomIDTextbox.value = "";
      } else {
        alert('Error: Room does not exist!');
      }
    });
  }

  return (
    <div id='tutor-login-container' className={props.className}>
      <Button variant="outline-light" onClick={createLobby}>Create New Session</Button>
      <p><small>OR</small></p>
      <label>Enter the simulation code</label>
      <input id='tutor-login-pin-input' type="text" maxLength={6}/>
      <div id='tutor-login-join-buttons'>
        <Button variant="outline-light" onClick={handleJoinCancel}>Cancel</Button>
        <Button variant="outline-light" onClick={handleJoinSubmit}>Join</Button>
      </div>
    </div>
  );
}

export const TutorLogin = styled(UTutorLogin)`
  color: #f8f9fa;
  z-index: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    margin: 20px  10px;
    min-width: 100px;
  }

  #tutor-login-pin-input {
    color: #f8f9fa;
    border: 1px solid #f8f9fa;
    border-radius: 0.25rem;
    background: transparent;
    padding: 10px 10px;
    width: 220px;
    font-size: 40px;
    font-weight: bolder;
    text-align: center;
  }
`;

export default connector(TutorLogin)
