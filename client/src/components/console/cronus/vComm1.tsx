import React from 'react';
import { vComm1Display } from '../customTypes'

interface vComm1Props {
  origin: number[];
  values: vComm1Display;
};

const VComm1: React.FC<vComm1Props> = ( props ) => {
  var [originX, originY] = props.origin;
  return(
    <g id="cronus-video-comm-1-display">
      <rect x="415" y="265" rx="5" ry="5" width="405" height="375" style={{fill:"#36485b",stroke:"#2a3a3f",strokeWidth:"5"}}/>
                
                <text x="42.5%" y="31.5%" fill="white" font-size="45" font-family="Verdana">Ku-Band Status</text>

                <text x="42.5%" y="35%" fill="white" font-size="20" font-family="Verdana">Downlink 1 Status</text>
                <text x="65%" y="35%" fill="#d6ab62" font-size="20" font-family="Verdana">ACTIVE</text>

                <text x="42.5%" y="38%" fill="white" font-size="20" font-family="Verdana">Downlink 2 Status</text>
                <text x="65%" y="38%" fill="#d6ab62" font-size="20" font-family="Verdana">ACTIVE</text>

                <text x="42.5%" y="41%" fill="white" font-size="20" font-family="Verdana">Downlink 3 Status</text>
                <text x="65%" y="41%" fill="#d6ab62" font-size="20" font-family="Verdana">ACTIVE</text>

                <text x="42.5%" y="44%" fill="white" font-size="20" font-family="Verdana">Downlink 4 Status</text>
                <text x="65%" y="44%" fill="#d6ab62" font-size="20" font-family="Verdana">ACTIVE</text>


                <text x="42.5%" y="55%" fill="white" font-size="20" font-family="Verdana">Elevation Gimbal</text>
                <text x="67%" y="55%" fill="#d6ab62" font-size="20" font-family="Verdana">{props.values.vComms1.elevationGimbal}</text>
                <text x="75%" y="55%" fill="white" font-size="20" font-family="Verdana">°</text>

                <text x="42.5%" y="58%" fill="white" font-size="20" font-family="Verdana">Cross-Elevation Gimbal</text>
                <text x="67%" y="58%" fill="#d6ab62" font-size="20" font-family="Verdana">{props.values.vComms1.crossElevationGimbal}</text>
                <text x="75%" y="58%" fill="white" font-size="20" font-family="Verdana">°</text>
    </g>
  )
};

export default VComm1;