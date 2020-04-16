import React from 'react'
import styled from 'styled-components'
import { CallRequest } from './CallRequest'

interface CallReqGroupProps {
  className?: string;
  callRequests: {
    spartan: boolean;
    cronus: boolean;
    ethos: boolean;
    flight: boolean;
    capcom: boolean;
    bme: boolean;
  };
  onHide: (sender: "spartan" | "cronus" | "ethos" | "flight" | "capcom" | "bme") => void;
};

const UCallRequestGroup: React.FC<CallReqGroupProps> = ( props ) => { 
  return (
    <div className={props.className}>
        <CallRequest sender="spartan" show={props.callRequests["spartan"]} onHide={props.onHide}/>
        <CallRequest sender="cronus" show={props.callRequests["cronus"]} onHide={props.onHide}/>
        <CallRequest sender="ethos" show={props.callRequests["ethos"]} onHide={props.onHide}/>
        <CallRequest sender="flight" show={props.callRequests["flight"]} onHide={props.onHide}/>
        <CallRequest sender="capcom" show={props.callRequests["capcom"]} onHide={props.onHide}/>
        <CallRequest sender="bme" show={props.callRequests["bme"]} onHide={props.onHide}/>
    </div>
  );
}

export const CallRequestGroup = styled(UCallRequestGroup)`
  position: absolute;
  top: 20px;
  right: 20px;

  .fade:not(.show) {
    display: none;
  }
`;
