import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import styled from 'styled-components';
import { tableEntry } from '../customTypes'
import { RootState } from '../../../reducers';
import { connect, ConnectedProps } from 'react-redux';
import moment from 'moment';

interface warningSystemProps {
    className?: string;
};

const mapState = (state: RootState ) => ({
    time: state.dataReducer.time
})
  
const connector = connect(mapState, {})
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & warningSystemProps

const tableUpdateTimes: string[] = ['2019-11-15T15:04:00',
                                    '2019-11-15T15:07:02',
                                    '2019-11-15T15:11:04',
                                    '2019-11-15T15:14:06',
                                    '2019-11-15T15:20:08',
                                    '2019-11-15T15:23:10',
                                    '2019-11-15T15:31:12',
                                    '2019-11-15T15:37:14',
                                    '2019-11-15T15:40:16',
                                    '2019-11-15T15:47:18',
                                    '2019-11-15T15:51:20',
                                    '2019-11-15T15:58:22',
                                    '2019-11-15T16:02:24',
                                    '2019-11-15T16:10:26',
                                    '2019-11-15T16:17:28',
                                    '2019-11-15T16:23:30',
                                    '2019-11-15T16:27:32'];

const pendingTableEntries: tableEntry[] = [
    {eventNum: "9413", annun: "SUPP", cl: "C", ack: false, sys: "TCS", message: "Thermal Safing Load Shed Inhibited - LAB"},
    {eventNum: "12288", annun: "SUPP", cl: "C", ack: false, sys: "TCS", message: "Thermal Thermal Safing Node 2 LTL Load Shed Timer Started - Node2"},
    {eventNum: "13463", annun: "SUPP", cl: "C", ack: false, sys: "CDH", message: "DMS Mission Management Computer (MMC) Failure - COL"},
    {eventNum: "13598", annun: "ENA", cl: "C", ack: false, sys: "EPS", message: "Power Distribution Unit (PDU2) Output Overcurrent Trip - COL"},
    {eventNum: "13568", annun: "SUPP", cl: "C", ack: false, sys: "CDH", message: "DMS System Bus Failure - COL"},
    {eventNum: "13578", annun: "ENA", cl: "C", ack: false, sys: "EPS", message: "Power Distribution Unit (PDU1) Nominal Controller Failure - COL"},
    {eventNum: "12592", annun: "SUPP", cl: "C", ack: false, sys: "ECL", message: "Cabin Smoke Detector 2 Fail - COL"},
    {eventNum: "5049", annun: "SUPP", cl: "C", ack: false, sys: "TCS", message: "Thermal Saffing Partial LTL Load Shed Timer Started"},
    {eventNum: "5050", annun: "SUPP", cl: "C", ack: false, sys: "TCS", message: "Thermal Saffing Partial MTL Load Shed Timer Started"},
    {eventNum: "13529", annun: "SUPP", cl: "C", ack: false, sys: "ECL", message: "ppO2 Sensor 2 Low - COL"},
    {eventNum: "13558", annun: "SUPP", cl: "C", ack: false, sys: "ECL", message: "Loss of IMV Supply Function - COL"},
    {eventNum: "4173", annun: "ENA", cl: "C", ack: false, sys: "TCS", message: "ETCS Loop B PCVP Loss of Comm - P1"},
    {eventNum: "13535", annun: "SUPP", cl: "W", ack: false, sys: "TCS", message: "Cooling Loop Delta Pressure Sensor 2 Low - COL"},
    {eventNum: "10472", annun: "ENA", cl: "C", ack: true, sys: "TCS", message: "ETCS Loop B Radiator Environment Temp Too Cold - P1"},
    {eventNum: "4248", annun: "ENA", cl: "C", ack: true, sys: "TCS", message: "ETCS Loop B TRRJ Switchover Sequence Failure - P1"},
    {eventNum: "5100", annun: "SUPP", cl: "C", ack: true, sys: "CNT", message: "Loss of Active IAC Handover to Backup IAC"},
    {eventNum: "11099", annun: "ENA", cl: "C", ack: true, sys: "EPS", message: "RPCM S32B_A Observed vs Last Commanded State Discrepancy - S3"}
];

const UWarningSummary: React.FC<Props> = (props) => {
    const [ tableEntries, setTableEntries ] = useState<tableEntry[]>([]);
    useEffect(() => {
        if (moment.utc(props.time).isAfter(moment.utc(tableUpdateTimes[tableEntries.length]))) {
            setTableEntries([...tableEntries, pendingTableEntries[0]]);
            pendingTableEntries.shift();
        }
    }, [tableEntries, pendingTableEntries, props.time])
    
    return (
        <div className={props.className}>
            <Table bordered hover variant ="dark" size="sm">
                <thead>
                    <tr className="white">
                        <th style={{width: '100px'}}>EVENT#</th>
                        <th style={{width: '100px'}}>ANNUN</th>
                        <th style={{width: '100px'}}>CL</th>
                        <th style={{width: '100px'}}>ACK</th>
                        <th style={{width: '100px'}}>SYS</th>
                        <th>C&W MESSAGE TEXT</th>
                    </tr>
                </thead>
                <tbody>
                    {tableEntries.map((entry) => {
                        return(
                            <tr key={entry.eventNum} className={entry.cl === "W" ? "red" : "yellow"}>
                                <td>{entry.eventNum}</td>
                                <td>{entry.annun}</td>
                                <td>{entry.cl}</td>
                                <td>{entry.ack ? "X" : ""}</td>
                                <td>{entry.sys}</td>
                                <td>{entry.message}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
};

const WarningSummary = styled(UWarningSummary)`
  min-height: 50%;
  background-color: rgba(57, 57, 57, 0.5);
  border-radius: 5px;
  
  table {
    table-layout: fixed;
    width: 100%;
    height: 100%;
    margin-top: 20px;
    color: black;
    line-height: 8px;
  }

  table td, table th {
      height: 25px;
      vertical-align: middle;
  }

  .white {
      color: white;
  }


  .yellow {
      background-color: #fcea5d;
  }

  .red {
    background-color: #f54242;
    color: white;
  }
`;

export default connector(WarningSummary);