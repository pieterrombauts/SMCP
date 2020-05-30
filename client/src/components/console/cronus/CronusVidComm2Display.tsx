import React from 'react';
import styled from 'styled-components';

interface CronusVC2DProps {
  className?: string;
};

const UCronusVidComm2Display: React.FC<CronusVC2DProps> = ( props ) => {
  return(
    <div className={props.className}>
      <svg preserveAspectRatio='xMidYMid meet' viewBox='0 0 1300 990'>
        <image x={0} y={0} width={1300} height={990} href='/media/Cronus_5.png'></image>
        <rect x="650" y="630" rx="5" ry="5" width="370" height="160" style={{fill:"#36485b",stroke:"#2a3a3f",strokeWidth:"5"}}/>
        
        <text x="51%" y="68%" fill="white" fontSize="17" fontFamily="Verdana">1)</text>
        <text x="54%" y="68%" fill="#d6ab62" fontSize="20" fontFamily="Verdana">P1 Upper Outboard (P1UPOB)</text>

        <text x="51%" y="71%" fill="white" fontSize="17" fontFamily="Verdana">2)</text>
        <text x="54%" y="71%" fill="#d6ab62" fontSize="20" fontFamily="Verdana">P1 Lower Outboard (P1LOOB)</text>

        <text x="51%" y="74%" fill="white" fontSize="17" fontFamily="Verdana">3)</text>
        <text x="54%" y="74%" fill="#d6ab62" fontSize="20" fontFamily="Verdana">Labs Starboard (LABS)</text>

        <text x="51%" y="77%" fill="white" fontSize="17" fontFamily="Verdana">4)</text>
        <text x="54%" y="77%" fill="#d6ab62" fontSize="20" fontFamily="Verdana">0E</text>  
      </svg>
    </div>
  )
};

const CronusVidComm2Display = styled(UCronusVidComm2Display)`
  svg {
    width: 100%;
    height: 100%;
  }
`;

export default CronusVidComm2Display;