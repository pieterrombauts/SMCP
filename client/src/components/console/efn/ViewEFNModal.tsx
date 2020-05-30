import React from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { EFNDetails } from './EFNDetails'
import { statusReport } from '../customTypes';

interface AppProps {
  className?: string;
  show: boolean;
  closeFunction: () => void;
  reports: statusReport[];
  selectedEfn: string;
  lobbyID: string;
};

export const UViewEFNModal: React.FC<AppProps> = ( props ) => {
  function handleOverlayClick(event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      props.closeFunction();
    }
  }
  return(
    <div id="view-efn-modal" className={props.className}>
      <div id="modal-overlay-view-efn" onMouseUp={handleOverlayClick}>
        <div id="modal-content-view-efn">
          <EFNDetails lobbyID={props.lobbyID} reports={props.reports} efnID={props.selectedEfn} closeFunction={props.closeFunction}/>
        </div>
      </div>
    </div>
  );
}

export const ViewEFNModal = styled(UViewEFNModal)`
  visibility: hidden;
  #modal-overlay-view-efn {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9;
    background-color: rgba(0,0,0,0.5);
  }

  #modal-content-view-efn {
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