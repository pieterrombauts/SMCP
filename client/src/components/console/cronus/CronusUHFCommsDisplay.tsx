import React from 'react';
import styled from 'styled-components';

interface CronusUCDProps {
  className?: string;
};

const UCronusUHFCommsDisplay: React.FC<CronusUCDProps> = ( props ) => {
  return(
    <div className={props.className}>
      <svg preserveAspectRatio='xMidYMid meet' viewBox='0 0 1300 990'>
        <image x={0} y={0} width={1300} height={990} href='/media/Cronus_2.png'></image>
        
        <rect x="50" y="405" rx="5" ry="5" width="510" height="200" style={{fill:"#36485b",stroke:"#2a3a3f",strokeWidth:"5"}} />
        
        <text x="6%" y="45%" fill="white" font-size="25" font-family="Verdana">Space to Space Station</text>

        <text x="8%" y="48%" fill="white" font-size="20" font-family="Verdana">Radio1 Power</text>
        <text x="25%" y="48%" fill="#d6ab62" font-size="20" font-family="Verdana">Off</text>

        <text x="8%" y="51%" fill="white" font-size="20" font-family="Verdana">Radio1 Power</text>
        <text x="25%" y="51%" fill="#d6ab62" font-size="20" font-family="Verdana">Off</text>

        <text x="6%" y="57%" fill="white" font-size="25" font-family="Verdana">UHF Sync Lcok</text>
        <text x="28%" y="57%" fill="#d6ab62" font-size="20" font-family="Verdana">Frame Sync</text>
        
        <rect x="815" y="435" rx="5" ry="5" width="410" height="140" style={{fill:"#36485b",stroke:"#2a3a3f",strokeWidth:"5"}} />
        
        <text x="65%" y="49%" fill="white" font-size="20" font-family="Verdana">IAC1 Power</text>
        <text x="78%" y="49%" fill="#d6ab62" font-size="20" font-family="Verdana">Active</text>

        <text x="65%" y="53%" fill="white" font-size="20" font-family="Verdana">IAC2 Power</text>
        <text x="78%" y="53%" fill="#d6ab62" font-size="20" font-family="Verdana">Active</text>
      </svg>
    </div>
  )
};

const CronusUHFCommsDisplay = styled(UCronusUHFCommsDisplay)`
  svg {
    width: 100%;
    height: 100%;
  }
`;

export default CronusUHFCommsDisplay;