import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { OSTPV } from './OSTPV'

interface AppProps {
  className?: string;
  lobbyID: string;
  show: boolean;
  closeFunction: () => void;
};

const UOSTPVModal: React.FC<AppProps> = ( props ) => {
  function handleOverlayClick(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      props.closeFunction();
    }
  }
  return(
    <div id="ostpv-modal" className={props.className}>
      <div id="modal-overlay" onMouseUp={handleOverlayClick}>
        <div id="modal-content">
          <OSTPV lobbyID={props.lobbyID}/>
        </div>
      </div>
    </div>
  );
}

export const OSTPVModal = styled(UOSTPVModal)`
  visibility: hidden;
  #modal-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9;
    background-color: rgba(0,0,0,0.5);
  }

  #modal-content {
    background-color: #FFF;
    position: absolute;
    width: 75%;
    height: 80%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    padding: 20px;
    z-index: 10;
  }
`;