import React from "react";
import styled from 'styled-components';
import Button from "react-bootstrap/Button";
import socket from '../Socket';
import { RootState } from '../../reducers';
import { connect, ConnectedProps } from 'react-redux';
import { updateUserRole } from '../../slices/lobbySlice'

interface ConsoleButtonProps {
  className?: string;
  console: string;
  taken: boolean;
}

const mapState = (state: RootState ) => ({
  lobbyID: state.lobbyPositionsReducer.lobbyID,
  userRole: state.lobbyPositionsReducer.userRole
})

const connector = connect(mapState, { updateUserRole })
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & ConsoleButtonProps

const UConsoleButton: React.FC<Props> = ( props ) => {
  const variant = props.taken ? 'light' : 'outline-light';
  const disabled = (props.taken || (props.userRole !== ""))
  const text = props.taken ? props.console.toUpperCase() + " is GO" : props.console.toUpperCase();
  function handleSelectConsole(e: React.MouseEvent<HTMLButtonElement>) {
    if (e) {
      const target = e.target as HTMLButtonElement
      console.log(target.value);
      props.updateUserRole({ userRole: target.value})
      socket.emit('join room', props.lobbyID, target.value);
    }
  }
  
  return (
    <Button variant={variant} className={props.className} value={props.console} onClick={handleSelectConsole} disabled={disabled}>{text}</Button>
  );
};

const ConsoleButton = styled(UConsoleButton)`
    min-width: 200px;
    min-height: 50px;
    margin: 10px 10px;
    opacity: ${props => (props.userRole === props.console) ? 1 : 0.8} !important;
`;

export default connector(ConsoleButton);