import React from 'react';
import styled from 'styled-components';
import { cronusVComm1Display } from '../customTypes'

interface CronusVC1DProps {
  className?: string;
  values: cronusVComm1Display;
};

const UCronusVidComm1Display: React.FC<CronusVC1DProps> = ( props ) => {
  return(
    <div className={props.className}>
      <svg preserveAspectRatio='xMidYMid meet' viewBox='0 0 1300 990'>
        <image x={0} y={0} width={1300} height={990} href='/media/Cronus_4.png'></image>
        <rect x="450" y="375" rx="5" ry="5" width="435" height="335" style={{fill:"#36485b",stroke:"#2a3a3f",strokeWidth:"5"}}/>

        <text x="37%" y="45%" fill="white" fontSize="45" fontFamily="Verdana">Ku-Band Status</text>

        <text x="37%" y="50%" fill="white" fontSize="20" fontFamily="Verdana">Downlink 1 Status</text>
        <text x="55%" y="50%" fill="#d6ab62" fontSize="20" fontFamily="Verdana">ACTIVE</text>

        <text x="37%" y="53%" fill="white" fontSize="20" fontFamily="Verdana">Downlink 2 Status</text>
        <text x="55%" y="53%" fill="#d6ab62" fontSize="20" fontFamily="Verdana">ACTIVE</text>

        <text x="37%" y="56%" fill="white" fontSize="20" fontFamily="Verdana">Downlink 3 Status</text>
        <text x="55%" y="56%" fill="#d6ab62" fontSize="20" fontFamily="Verdana">ACTIVE</text>

        <text x="37%" y="59%" fill="white" fontSize="20" fontFamily="Verdana">Downlink 4 Status</text>
        <text x="55%" y="59%" fill="#d6ab62" fontSize="20" fontFamily="Verdana">ACTIVE</text>


        <text x="37%" y="64%" fill="white" fontSize="20" fontFamily="Verdana">Elevation Gimbal</text>
        <text x="58%" y="64%" fill="#d6ab62" fontSize="20" fontFamily="Verdana">{props.values.vComms1.elevationGimbal}</text>
        <text x="63%" y="64%" fill="white" fontSize="20" fontFamily="Verdana">°</text>

        <text x="37%" y="67%" fill="white" fontSize="20" fontFamily="Verdana">Cross-Elevation Gimbal</text>
        <text x="58%" y="67%" fill="#d6ab62" fontSize="20" fontFamily="Verdana">{props.values.vComms1.crossElevationGimbal}</text>
        <text x="63%" y="67%" fill="white" fontSize="20" fontFamily="Verdana">°</text>
      </svg>
    </div>
  )
};

const CronusVidComm1Display = styled(UCronusVidComm1Display)`
  svg {
    width: 100%;
    height: 100%;
  }
`;

export default CronusVidComm1Display;