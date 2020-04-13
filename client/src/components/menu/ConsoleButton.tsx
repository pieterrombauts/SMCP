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
  count: number;
}

const mapState = (state: RootState ) => ({
  lobbyID: state.lobbyPositionsReducer.lobbyID,
  userRole: state.lobbyPositionsReducer.userRole
})

const connector = connect(mapState, { updateUserRole })
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & ConsoleButtonProps

const UConsoleButton: React.FC<Props> = ( props ) => {
  var variant = "";
  const buttonType = props.count === 0 ? "outline-light" : "light";
  if (props.count == 1) {
    variant = "takenOne";
  }
  const disabled = (props.count == 2 || (props.userRole !== ""))
  function handleSelectConsole(e: React.MouseEvent<HTMLButtonElement>) {
    if (e) {
      const target = e.currentTarget as HTMLButtonElement
      console.log(target);
      socket.emit('SELECT_CONSOLE', props.lobbyID, target.value);
      props.updateUserRole({ userRole: target.value})
    }
  }
  
  return (
    <Button 
      variant={buttonType} 
      className={props.className + " " + variant} 
      value={props.console} 
      onClick={handleSelectConsole} 
      disabled={disabled}>
        <span>{props.console.toUpperCase()}</span>
    </Button>
  );
};

const ConsoleButton = styled(UConsoleButton)`
    min-width: 200px;
    min-height: 50px;
    margin: 10px 10px;
    opacity: ${props => (props.userRole === props.console) ? 1 : 0.8} !important;
`;

export default connector(ConsoleButton);