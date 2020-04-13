import React from 'react';
import styled from 'styled-components';

interface ButtonsProps {
  className?: string;
};

const UButtonsDisplay: React.FC<ButtonsProps> = ( props ) => {
  return(
    <div className={props.className}>
      <svg preserveAspectRatio='xMidYMid meet' viewBox='0 0 1300 990'>
      <rect y='20' rx="5" ry="5" width="700" height="400" style={{fill:"#333333", stroke:"#393939", strokeWidth:5, opacity:0.5}} />
      
      <rect x="20" y="40" rx="5" ry="5" width="110" height="90" style={{fill:"red", stroke:"#393939", strokeWidth:5}} />
      <text x="40" y="95" fill="white" fontSize="30" fontFamily="Verdana">FIRE</text>

      <rect x="160" y="40" rx="5" ry="5" width="110" height="90" style={{fill:"red", stroke:"#393939", strokeWidth:5}} />
      <text x="180" y="95" fill="white" fontSize="30" fontFamily="Verdana">ΔP</text>

      <rect x="300" y="40" rx="5" ry="5" width="110" height="90" style={{fill:"red", stroke:"#393939", strokeWidth:5}} />
      <text x="320" y="95" fill="white" fontSize="30" fontFamily="Verdana">ATM</text>

      <rect x="440" y="40" rx="5" ry="5" width="110" height="90" style={{fill:"red", stroke:"#393939", strokeWidth:5}} />
      <text x="450" y="95" fill="white" fontSize="18" fontFamily="Verdana">WARNING</text>

      <rect x="580" y="40" rx="5" ry="5" width="110" height="90" style={{fill:"yellow", stroke:"#393939", strokeWidth:5}} />
      <text x="590" y="95" fill="black" fontSize="18" fontFamily="Verdana">CAUTION</text>

      <rect x="580" y="200" rx="5" ry="5" width="110" height="90" style={{fill:"yellow", stroke:"#393939", strokeWidth:5}} />
      <text x="595" y="255" fill="black" fontSize="30" fontFamily="Verdana">TEST</text>
      </svg>
    </div>
  )
};

const ButtonsDisplay = styled(UButtonsDisplay)`
  svg {
    width: 100%;
    height: 100%;
  }
`;

export default ButtonsDisplay;