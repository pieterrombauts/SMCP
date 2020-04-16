import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import socket from '../Socket'
import { statusReport } from '../console/customTypes';

interface AppProps {
  className?: string;
};

const UFlight: React.FC<AppProps> = ( props ) => {
  const [reports, setReports] = useState<statusReport[]>([]);
  useEffect(() => {
    socket.off('UPDATE_REPORTS');
    socket.on('UPDATE_REPORTS', ( report: statusReport ) => {
      addReport(report);
    })
  }, [])
  function addReport(report: statusReport) {
    console.log(reports);
    var updatedReports = reports;
    updatedReports.push(report);
    setReports(updatedReports)
  }
  return(
    <div id="flight-container" className={props.className}>
      <div id="table-container">
        <Table id="report-table" striped bordered>
          <thead>
            <tr>
              <th>From</th>
              <th>Subject</th>
              <th>Status</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, i) => {
              return (
                <tr key={i}>
                  <td>{report.sender.toUpperCase}</td>
                  <td>{report.subject}</td>
                  <td>{report.status}</td>
                  <td>{report.time + " GMT"}</td>
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
    max-height: 100%;
    overflow: auto;
  }
`;