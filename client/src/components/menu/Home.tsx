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
  function handleTutorLoginClick() {
    props.animateMenus({ home: 'hide', tutorlogin: 'show', join: 'hide', lobby: 'hide', game: 'hide'})
  }
  
  function handleJoinRoomClick() {
    props.animateMenus({ home: 'hide', tutorlogin: 'hide', join: 'show', lobby: 'hide', game: 'hide'})
  }

  return (
    <div id="home-container" className={props.className}>
      <h2>Mission Control Center Simulator</h2>
      <div id="home-buttons">
        <Button variant="outline-light" onClick={handleTutorLoginClick}>Tutor Login</Button>
        <Button variant="outline-light" onClick={handleJoinRoomClick}>Student Login</Button>
      </div>
    </div>
  );
}

export const Home = styled(UHome)`
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
