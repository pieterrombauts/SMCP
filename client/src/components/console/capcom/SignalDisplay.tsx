import React from 'react';
import styled from 'styled-components';

interface SignalProps {
  className?: string;
};

const USignalDisplay: React.FC<SignalProps> = ( props ) => {
  return(
    <div className={props.className}>
      <svg preserveAspectRatio='xMidYMid meet' viewBox='0 0 1300 990'>
      <rect x="740" y="20" rx="5" ry="5" width="560" height="400" style={{fill:"#393939", stroke:"#393939", strokeWidth:5, opacity:0.5}} />
      
      <rect x="770" y="40" rx="5" ry="5" width="200" height="100" style={{fill:"green", stroke:"#393939", strokeWidth:5}} />
      <text x="810" y="110" fill="white" fontSize="50" fontFamily="Verdana">AOS</text>

      <rect x="1060" y="40" rx="5" ry="5" width="200" height="100" style={{fill:"red", stroke:"#393939", strokeWidth:5}} />
      <text x="1110" y="110" fill="white" fontSize="50" fontFamily="Verdana">LOS</text>

      <text x="780" y="230" fill="white" fontSize="50" fontFamily="Verdana">Next AOS 0:02:34</text>
      <text x="780" y="310" fill="white" fontSize="50" fontFamily="Verdana">Next LOS 0:05:54</text>
      
      </svg>
    </div>
  )
};

const SignalDisplay = styled(USignalDisplay)`
  svg {
    width: 100%;
    height: 100%;
  }
`;

export default SignalDisplay;