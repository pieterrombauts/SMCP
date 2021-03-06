import React from 'react';
import styled from 'styled-components';
import { cronusSBandDisplay } from '../customTypes'

interface CronusSCDProps {
  className?: string;
  values: cronusSBandDisplay;
};

const UCronusSBandCommsDisplay: React.FC<CronusSCDProps> = ( props ) => {
  return(
    <div className={props.className}>
      <svg preserveAspectRatio='xMidYMid meet' viewBox='0 0 1300 990'>
        <image x={0} y={0} width={1300} height={990} href='/media/Cronus_3.png'></image>
        <rect x="450" y="380" rx="5" ry="5" width="450" height="385" style={{fill:"#36485b",stroke:"#2a3a3f",strokeWidth:"5"}} />
                
        <text x="38%" y="45%" fill="white" fontSize="45" fontFamily="Verdana">S-Band Status</text>

        <text x="38%" y="51%" fill="white" fontSize="20" fontFamily="Verdana">Active S-Band</text>
        <text x="58%" y="51%" fill="#d6ab62" fontSize="20" fontFamily="Verdana">1</text>

        <text x="38%" y="56%" fill="white" fontSize="20" fontFamily="Verdana">S-Band1 Power</text>
        <text x="58%" y="56%" fill="#d6ab62" fontSize="20" fontFamily="Verdana">On</text>

        <text x="41%" y="59%" fill="white" fontSize="20" fontFamily="Verdana">Elevation Gimbal</text>
        <text x="58%" y="59%" fill="#d6ab62" fontSize="20" fontFamily="Verdana">{props.values.sBand.elevationGimbal}</text>
        <text x="63%" y="59%" fill="white" fontSize="20" fontFamily="Verdana">°</text>

        <text x="41%" y="62%" fill="white" fontSize="20" fontFamily="Verdana">Azimuth Gimbal</text>
        <text x="58%" y="62%" fill="#d6ab62" fontSize="20" fontFamily="Verdana">{props.values.sBand.azimuthGimbal}</text>
        <text x="63%" y="62%" fill="white" fontSize="20" fontFamily="Verdana">°</text>

        <text x="38%" y="67%" fill="white" fontSize="20" fontFamily="Verdana">S-Band2 Power</text>
        <text x="58%" y="67%" fill="#d6ab62" fontSize="20" fontFamily="Verdana">Off</text>

        <text x="41%" y="70%" fill="white" fontSize="20" fontFamily="Verdana">Elevation Gimbal</text>
        <text x="58%" y="70%" fill="#d6ab62" fontSize="20" fontFamily="Verdana">0.00</text>
        <text x="63%" y="70%" fill="white" fontSize="20" fontFamily="Verdana">°</text>

        <text x="41%" y="73%" fill="white" fontSize="20" fontFamily="Verdana">Azimuth Gimbal</text>
        <text x="58%" y="73%" fill="#d6ab62" fontSize="20" fontFamily="Verdana">0.00</text>
        <text x="63%" y="73%" fill="white" fontSize="20" fontFamily="Verdana">°</text>
      </svg>
    </div>
  )
};

const CronusSBandCommsDisplay = styled(UCronusSBandCommsDisplay)`
  svg {
    width: 100%;
    height: 100%;
  }
`;

export default CronusSBandCommsDisplay;