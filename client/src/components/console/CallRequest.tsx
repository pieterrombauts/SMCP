import React from 'react';
import styled from 'styled-components';
import Toast from 'react-bootstrap/Toast';

interface CallReqProps {
  className?: string;
  sender: "spartan" | "cronus" | "ethos" | "flight" | "capcom" | "bme";
  show: boolean;
  onHide: (sender: "spartan" | "cronus" | "ethos" | "flight" | "capcom" | "bme") => void;
};

const UCallRequest: React.FC<CallReqProps> = ( props ) => { 
  function handleClose() {
    props.onHide(props.sender);
  }
  return (
    <Toast show={props.show} onClose={handleClose} className={props.className}>
      <Toast.Header closeButton={true}>
        <strong>Call request from {props.sender.toUpperCase()}</strong>
      </Toast.Header>
      <Toast.Body>
        {props.sender.toUpperCase()} is requesting a call from you. Please unmute them in Discord!
      </Toast.Body>
    </Toast>
  );
}

export const CallRequest = styled(UCallRequest)`
  .toast-header {
    justify-content: space-between
  }
`;
