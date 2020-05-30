import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { OSTPVEventDetail } from './OSTPVEventDetail'
import { selectedEvent } from '../customTypes';

interface AppProps {
  className?: string;
  show: boolean;
  closeFunction: () => void;
  event: selectedEvent;
  lobbyID: string;
};

const UOSTPVEventModal: React.FC<AppProps> = ( props ) => {
  function handleOverlayClick(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      props.closeFunction();
    }
  }
  return(
    <div id="view-event-modal" className={props.className}>
      <div id="modal-overlay-view-event" onMouseUp={handleOverlayClick}>
        <div id="modal-content-view-event">
          <OSTPVEventDetail lobbyID={props.lobbyID} event={props.event} closeFunction={props.closeFunction}/>
        </div>
      </div>
    </div>
  );
}

export const OSTPVEventModal = styled(UOSTPVEventModal)`
  visibility: hidden;
  #modal-overlay-view-event {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9;
    background-color: rgba(0,0,0,0.5);
  }

  #modal-content-view-event {
    background-color: #FFF;
    position: absolute;
    width: 40%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    padding: 40px;
    z-index: 10;
  }
`;