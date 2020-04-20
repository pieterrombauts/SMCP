import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { statusReport } from './customTypes'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import socket from '../Socket';
import FormControl from 'react-bootstrap/FormControl';

interface AppProps {
  className?: string;
  reports: statusReport[];
  efnID: string;
  closeFunction: () => void;
};

const UEFNDetails: React.FC<AppProps> = ( props ) => {
  return(
    <div className={props.className}>
      {props.reports.map((report) => {
        if (report._ID === props.efnID) {
          return (
            <div key={props.efnID}>
              <h3>{report._ID}</h3>
              <p>{report._sender}</p>
              <p>{report._subject}</p>
              <p>{report._content}</p>
              <p>{report._status}</p>
            </div>
          )
        } else {
          return null;
        }
      })}
    </div>
  );
}

export const EFNDetails = styled(UEFNDetails)``;