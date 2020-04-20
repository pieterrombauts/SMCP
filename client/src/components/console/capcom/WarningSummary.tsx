import React from 'react'
import Table from 'react-bootstrap/Table'
import styled from 'styled-components';

interface warningSystemProps {
    className?: string;
};

const UWarningSummary: React.FC<warningSystemProps> = (props) => {
    return (
        <div className={props.className}>
            <Table striped bordered hover variant ="dark" size="sm">
                <thead>
                    <tr id="white">
                        <th>EVENT#</th>
                        <th>ANNUN</th>
                        <th>CL</th>
                        <th>ACK</th>
                        <th>SYS</th>
                        <th>C&W MESSAGE TEXT</th>
                    </tr>
                </thead>
                <tbody>
                    <tr id="yellow">
                        <td>9413</td>
                        <td>SUPP</td>
                        <td>C</td>
                        <td> </td>
                        <td>TCS</td>
                        <td>Thermal Safing Load Shed Inhibited-LAB</td>                        
                    </tr>

                    <tr id="yellow">
                        <td>12288</td>
                        <td>SUPP</td>
                        <td>C</td>
                        <td> </td>
                        <td>TCS</td>
                        <td>Thermal Thermal Safing Node 2 LTL Load Shed Timer Started-Node2</td>                        
                    </tr>

                    <tr id="yellow">
                        <td>13463</td>
                        <td>SUPP</td>
                        <td>C</td>
                        <td> </td>
                        <td>CDH</td>
                        <td>DMS Mission Management Computer (MMC) Failure - COL</td>                       
                    </tr>

                    <tr id="red">
                        <td>13527</td>
                        <td>SUPP</td>
                        <td>W</td>
                        <td> </td>
                        <td>ECL</td>
                        <td>Total Pressure Sensor 3 Low -COL</td>                        
                    </tr>

                    <tr id="yellow">
                        <td>13598</td>
                        <td>ENA</td>
                        <td>C</td>
                        <td> </td>
                        <td>EPS</td>
                        <td>Power Distribution Unit (PDU2) Output Overcurrent Trip - COL</td>                       
                    </tr>

                    <tr id="yellow">
                        <td>13568</td>
                        <td>SUPP</td>
                        <td>C</td>
                        <td> </td>
                        <td>CDH</td>
                        <td>DMS System Bus Failure - COL</td>                       
                    </tr>

                    <tr id="yellow">
                        <td>13578</td>
                        <td>ENA</td>
                        <td>C</td>
                        <td> </td>
                        <td>EPS</td>
                        <td>Power Distribution Unit (PDU1) Nominal Controller Failure - COL</td>                       
                    </tr>

                    <tr id="yellow">
                        <td>12592</td>
                        <td>SUPP</td>
                        <td>C</td>
                        <td> </td>
                        <td>ECL</td>
                        <td>Cabin Smoke Detector 2 Fail - COL</td>                       
                    </tr>

                    <tr id="red">
                        <td>13535</td>
                        <td>SUPP</td>
                        <td>W</td>
                        <td> </td>
                        <td>TCS</td>
                        <td>Cooling Loop Delta Pressure Sensor 2 Low - COL</td>                        
                    </tr>

                    <tr id="yellow">
                        <td>5049</td>
                        <td>SUPP</td>
                        <td>C</td>
                        <td> </td>
                        <td>TCS</td>
                        <td>Thermal Saffing Partial LTL Load Shed Timer Started</td>                       
                    </tr>

                    <tr id="yellow">
                        <td>5050</td>
                        <td>SUPP</td>
                        <td>C</td>
                        <td> </td>
                        <td>TCS</td>
                        <td>Thermal Saffing Partial MTL Load Shed Timer Started</td>                       
                    </tr>

                    <tr id="red">
                        <td>4012</td>
                        <td>ENA</td>
                        <td>W</td>
                        <td> </td>
                        <td>TCS</td>
                        <td>ETCS Loop B Rad Erw Temp Cold Expect Loop Shutdown and Vent-P1</td>                        
                    </tr>

                    <tr id="yellow">
                        <td>13529</td>
                        <td>SUPP</td>
                        <td>C</td>
                        <td> </td>
                        <td>ECL</td>
                        <td>ppO2 Sensor 2 Low - COL</td>                       
                    </tr>

                    <tr id="red">
                        <td>4012</td>
                        <td>ENA</td>
                        <td>EF</td>
                        <td> </td>
                        <td>ECL</td>
                        <td>FIRE - Cabin Smoke Detector 2-Node 2</td>                        
                    </tr>

                    <tr id="yellow">
                        <td>13558</td>
                        <td>SUPP</td>
                        <td>C</td>
                        <td> </td>
                        <td>ECL</td>
                        <td>Loss of IMV Supply Function - COL</td>                       
                    </tr>

                    <tr id="red">
                        <td>13501</td>
                        <td>ENA</td>
                        <td>EF</td>
                        <td> </td>
                        <td>ECL</td>
                        <td>FIRE Smoke Detector 2 Cabin - COL</td>                        
                    </tr>

                    <tr id="yellow">
                        <td>4173</td>
                        <td>ENA</td>
                        <td>C</td>
                        <td> </td>
                        <td>TCS</td>
                        <td>ETCS Loop B PCVP Loss of Comm-P1</td>                       
                    </tr>

                    <tr id="yellow">
                        <td>10472</td>
                        <td>ENA</td>
                        <td>C</td>
                        <td>X</td>
                        <td>TCS</td>
                        <td>ETCS Loop B Radiator Environment Temp Too Cold-P1</td>                       
                    </tr>

                    <tr id="yellow">
                        <td>4248</td>
                        <td>ENA</td>
                        <td>C</td>
                        <td>X</td>
                        <td>TCS</td>
                        <td>ETCS Loop B TRRJ Switchover Sequence Failure-P1</td>                       
                    </tr>

                    <tr id="yellow">
                        <td>5100</td>
                        <td>SUPP</td>
                        <td>C</td>
                        <td>X</td>
                        <td>CNT</td>
                        <td>Loss of Active IAC Handover to Backup IAC</td>                       
                    </tr>

                    <tr id="yellow">
                        <td>11099</td>
                        <td>ENA</td>
                        <td>C</td>
                        <td>X</td>
                        <td>EPS</td>
                        <td>RPCM S32B_A Observed vs Last Commanded State Discrepancy-S3</td>                       
                    </tr>


                </tbody>
            </Table>
        </div>
    )
};

const WarningSummary = styled(UWarningSummary)`
  table {
    width: 100%;
    height: 100%;
    margin-top: 20px;
    color: black;
    line-height: 8px;
  }

  #white {
      color: white;
  }


  #yellow {
      background-color: #fcea5d;

  }

  #red {
    background-color: #f54242;
    color: white;
  }
`;

export default WarningSummary;