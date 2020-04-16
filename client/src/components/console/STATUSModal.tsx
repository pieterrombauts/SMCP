import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { STATUS } from './STATUS'

interface AppProps {
  className?: string;
  show: boolean;
  closeFunction: () => void;
  lobbyID: string;
  userRole: string;
  time: string;
};

const USTATUSModal: React.FC<AppProps> = ( props ) => {
  function handleOverlayClick(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      props.closeFunction();
    }
  }
  return(
    <div id="status-modal" className={props.className}>
      <div id="modal-overlay-status" onMouseUp={handleOverlayClick}>
        <div id="modal-content-status">
          <STATUS lobbyID={props.lobbyID} userRole={props.userRole} time={props.time} closeFunction={props.closeFunction}/>
        </div>
      </div>
    </div>
  );
}

export const STATUSModal = styled(USTATUSModal)`
  visibility: hidden;
  #modal-overlay-status {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9;
    background-color: rgba(0,0,0,0.5);
  }

  #modal-content-status {
    background-color: #FFF;
    position: absolute;
    width: 75%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    padding: 20px;
    z-index: 10;
  }
`;