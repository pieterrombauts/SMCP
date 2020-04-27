import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import socket from '../Socket'
import { statusReport, OptionType } from '../console/customTypes';
import Button from 'react-bootstrap/Button';
import Select, { ValueType, ActionMeta } from 'react-select';
import moment from 'moment'

interface AppProps {
  className?: string;
  reports: statusReport[];
  handleView: (efnID: string) => void;
};

const options: OptionType[] = [
  { value: 'open', label: 'Open'},
  { value: 'closed', label: 'Closed'},
  { value: 'safety-issue', label: 'Safety Issue'},
  { value: 'info-only', label: 'Info Only'},
  { value: 'approved', label: 'Approved'}
]

const UFlight: React.FC<AppProps> = ( props ) => {
  function updateEFNStatus(selectedStatus: ValueType<OptionType>, actionMeta: ActionMeta) {
    var newValue = selectedStatus as OptionType;
    socket.emit('UPDATE_EFN_STATUS', actionMeta.name, newValue.value);
  }
  function handleViewButtonPress(e: React.MouseEvent<HTMLButtonElement>) {
    props.handleView(e.currentTarget.name);
  }
  return(
    <div id="flight-container" className={props.className}>
      <div id="table-container">
        <Table id="report-table" bordered>
          <thead>
            <tr>
              <th>EFN ID</th>
              <th>Sender</th>
              <th>Subject</th>
              <th>Status</th>
              <th>Time</th>
              <th>View Content</th>
            </tr>
          </thead>
          <tbody>
            {props.reports.map((report) => {
              var selectValue = options.filter((efn) => efn.value === report._status )[0]
              console.log(report);
              return (
                <tr key={report._ID} className={report._status}>
                  <td>{report._ID}</td>
                  <td>{report._sender.toUpperCase()}</td>
                  <td>{report._subject}</td>
                  <td><Select name={report._ID} options={options} onChange={(newValue: ValueType<OptionType>, actionMeta) => {updateEFNStatus(newValue, actionMeta)}} value={selectValue}/></td>
                  <td>{moment(report._time).format('DDDD/HH:mm') + " GMT"}</td>
                  <td><Button name={report._ID} onClick={handleViewButtonPress}>View</Button></td>
                </tr>
              )
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export const Flight = styled(UFlight)`
  height: 80%;
  width: 85%;
  margin-top: 5%;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 5px;

  #table-container {
    height: 100%;
    max-height: 100%;
    overflow: auto;
  }
  tbody > tr > td {
    vertical-align: middle;
  }

  tbody > tr > td:last-child {
    text-align: center;
  }

  tbody > tr.open {
    background-color: rgba(0,0,0,0)
  }

  tbody > tr.closed {
    background-color: rgba(0,0,0,.05)
  }

  tbody > tr.approved {
    background-color: rgba(0,128,0,.1)
  }

  tbody > tr.info-only {
    background-color: rgba(173,216,230,.3)
  }

  tbody > tr.safety-issue {
    background-color: rgba(255,165,0,.15)
  }
`;