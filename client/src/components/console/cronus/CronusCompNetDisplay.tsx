import React from 'react';
import styled from 'styled-components';
import { cronusCompNetDisplay } from '../customTypes'

interface CronusCNDProps {
  className?: string;
  values: cronusCompNetDisplay;
};

const UCronusCompNetDisplay: React.FC<CronusCNDProps> = ( props ) => {
  return(
    <div className={props.className}>
      <svg preserveAspectRatio='xMidYMid meet' viewBox='0 0 1300 990'>
        <image x={0} y={0} width={1300} height={990} href='/media/Cronus_1.png'></image>
        <rect x="1055" y="180" rx="5" ry="5" width="200" height="50" style={{fill:"#000000"}} />
        <rect x="1110" y="230" rx="5" ry="5" width="100" height="50" style={{fill:"#000000"}} />
        <rect x="1110" y="250" rx="5" ry="5" width="100" height="50" style={{fill:"#000000"}} />
        <text x="1080" y="217" fill="#d6ab62" font-size="20" font-family="Verdana">{props.values.compNet.time}</text>
        <text x="1130" y="257" fill="#d6ab62" font-size="20" font-family="Verdana">{props.values.compNet.standardCmds}</text>
        <text x="1100" y="295" fill="#d6ab62" font-size="20" font-family="Verdana">{props.values.compNet.loadCmds}</text>
      </svg>  
    </div>
  )
};

const CronusCompNetDisplay = styled(UCronusCompNetDisplay)`
  svg {
    width: 100%;
    height: 100%;
  }
`;

export default CronusCompNetDisplay;