import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import socket from '../../Socket'
import { consoleUsers } from '../../console/customTypes';

interface AppProps {
  className?: string;
  roomID: string;
};

const UTutor: React.FC<AppProps> = ( props ) => {
  const [ consoleUsers, setConsoleUsers ] = useState<consoleUsers>({spartan: [], cronus: [], ethos: [], flight: [], capcom: [], bme: []})
  const [ tutorLog, setTutorLog ] = useState<string[]>([]);
  useEffect(() => {
    socket.off('UPDATE_CONSOLE_USERS');
    socket.off('TUTOR_LOG');
    socket.on('UPDATE_CONSOLE_USERS', ( users: consoleUsers ) => {
      setConsoleUsers(users);
    })
    socket.on('TUTOR_LOG', ( logMessage: string ) => {
      var currentMessages = tutorLog;
      var newMessages = [...currentMessages, logMessage];
      setTutorLog(newMessages);
    })
  }, [tutorLog])
  return(
    <div id="tutor-container" className={props.className}>
      <div id="tutor-table-container">
        <Table id="report-table" bordered>
          <thead>
            <tr>
              <th className="tutor-header-col">SPARTAN</th>
              <th className="tutor-header-col">CRONUS</th>
              <th className="tutor-header-col">ETHOS</th>
              <th className="tutor-header-col">FLIGHT</th>
              <th className="tutor-header-col">CAPCOM</th>
              <th className="tutor-header-col">BME</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{consoleUsers.spartan.length >= 1 && consoleUsers.spartan[0]}</td>
              <td>{consoleUsers.cronus.length >= 1 && consoleUsers.cronus[0]}</td>
              <td>{consoleUsers.ethos.length >= 1 && consoleUsers.ethos[0]}</td>
              <td>{consoleUsers.flight.length >= 1 && consoleUsers.flight[0]}</td>
              <td>{consoleUsers.capcom.length >= 1 && consoleUsers.capcom[0]}</td>
              <td>{consoleUsers.bme.length >= 1 && consoleUsers.bme[0]}</td>
            </tr>
            <tr>
            <td>{consoleUsers.spartan.length === 2 && consoleUsers.spartan[1]}</td>
              <td>{consoleUsers.cronus.length === 2 && consoleUsers.cronus[1]}</td>
              <td>{consoleUsers.ethos.length === 2 && consoleUsers.ethos[1]}</td>
              <td>{consoleUsers.flight.length === 2 && consoleUsers.flight[1]}</td>
              <td>{consoleUsers.capcom.length === 2 && consoleUsers.capcom[1]}</td>
              <td>{consoleUsers.bme.length === 2 && consoleUsers.bme[1]}</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div id="tutor-log-container">
        {tutorLog.map((logEntry) => {
          return (<><p key={logEntry}>{logEntry}</p><hr /></>)
        })}
      </div>
    </div>
  );
}

export const Tutor = styled(UTutor)`
  height: 80%;
  width: 85%;
  margin-top: 5%;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 5px;
  .tutor-header-col {
    width: 16%;
  }
  tbody > tr > td {
    vertical-align: middle;
    height: 50px;
  }
  #tutor-log-container {
    padding: 10px;
    min-height: 60vh;
    max-height: 60vh;
    overflow: auto;
    border-radius: 5px;
    border: 1px solid grey;
  }
  #tutor-log-container > p {
    margin-bottom: 5px;
  }
  #tutor-log-container > hr {
    margin-bottom: 5px;
    margin-top: 5px;
  }
`;