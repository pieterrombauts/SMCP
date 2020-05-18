import React from 'react'
import styled from 'styled-components'
import Button from 'react-bootstrap/Button';
import socket from '../Socket';
import { connect, ConnectedProps } from 'react-redux';
import { animateMenus } from '../../slices/menuAnimationSlice'
import { RootState } from '../../reducers';
import { updateLobbyID, updateConsoles } from '../../slices/lobbySlice';

interface JoinProps {
  className?: string;
};

const mapState = (state: RootState ) => ({
  joinState: state.menuAnimationReducer.join
})

const connector = connect(mapState, { animateMenus, updateLobbyID, updateConsoles })
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & JoinProps

const UJoin: React.FC<Props> = ( props ) => {
  function handleJoinCancel() {
    props.animateMenus({ home: 'show', tutorlogin: 'hide', join: 'hide', lobby: 'hide', game: 'hide'})
    const textbox = document.querySelector("#game-pin-input") as HTMLInputElement;
    if (textbox) { textbox.value = "" }
  }

  function getConsoleAvailability(roomID: string) {
    socket.emit('GET_CONSOLES', roomID, (data: object) => {
      props.updateConsoles({ consoles: data })
    })
  }

  function handleJoinSubmit() {
    const roomIDTextbox = document.querySelector('#game-pin-input') as HTMLInputElement;
    const usernameTextbox = document.querySelector('#username-input') as HTMLInputElement;
    socket.emit('GET_ROOMS', (data: object) => {
      if (data.hasOwnProperty(roomIDTextbox.value)) {
        socket.emit('JOIN_ROOM', roomIDTextbox.value, usernameTextbox.value);
        props.updateLobbyID({ lobbyID: roomIDTextbox.value })
        getConsoleAvailability(roomIDTextbox.value);
        props.animateMenus({ home: 'hide', tutorlogin: 'hide', join: 'hide', lobby: 'show', game: 'hide'})
        roomIDTextbox.value = "";
      } else {
        alert('Error: Room does not exist!');
      }
    });
  }

  return (
    <div id='join-container' className={props.className}>
      <label>Enter a username</label>
      <input id='username-input' type='text'/>
      <label>Enter the simulation code</label>
      <input id='game-pin-input' type="text" maxLength={6}/>
      <div id='join-buttons'>
        <Button variant="outline-light" onClick={handleJoinCancel}>Cancel</Button>
        <Button variant="outline-light" onClick={handleJoinSubmit}>Join</Button>
      </div>
    </div>
  );
}

const Join = styled(UJoin)`
  color: #f8f9fa;
  z-index: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;

  #join-buttons button {
    margin: 20px  10px;
    min-width: 100px;
  }

  #username-input {
    color: #f8f9fa;
    border: 1px solid #f8f9fa;
    border-radius: 0.25rem;
    background: transparent;
    padding: 10px 10px;
    width: 220px;
    text-align: center;
    margin-bottom: 15px;
  }

  #game-pin-input {
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

export default connector(Join)
