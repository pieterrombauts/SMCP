import React from 'react';
import { sBandDisplay } from '../customTypes'

interface sBandProps {
  origin: number[];
  values: sBandDisplay;
};

const SBand: React.FC<sBandProps> = ( props ) => {
  var [originX, originY] = props.origin;
  return(
    <g id="cronus-s-band-display">
      <rect x="415" y="265" rx="5" ry="5" width="415" height="385" style={{fill:"#36485b",stroke:"#2a3a3f",strokeWidth:"5"}} />
                
                <text x="42.5%" y="31.5%" fill="white" font-size="45" font-family="Verdana">S-Band Status</text>

                <text x="42.5%" y="35%" fill="white" font-size="20" font-family="Verdana">Active S-Band</text>
                <text x="65%" y="35%" fill="#d6ab62" font-size="20" font-family="Verdana">1</text>

                <text x="42.5%" y="38%" fill="white" font-size="20" font-family="Verdana">S-Band1 Power</text>
                <text x="65%" y="38%" fill="#d6ab62" font-size="20" font-family="Verdana">On</text>

                <text x="42.5%" y="41%" fill="white" font-size="20" font-family="Verdana">Elevation Gimbal</text>
                <text x="65%" y="41%" fill="#d6ab62" font-size="20" font-family="Verdana">{props.values.sBand.elevationGimbal}</text>
                <text x="72%" y="41%" fill="white" font-size="20" font-family="Verdana">°</text>

                <text x="42.5%" y="44%" fill="white" font-size="20" font-family="Verdana">Azimuth Gimbal</text>
                <text x="65%" y="44%" fill="#d6ab62" font-size="20" font-family="Verdana">{props.values.sBand.azimuthGimbal}</text>
                <text x="72%" y="44%" fill="white" font-size="20" font-family="Verdana">°</text>


                <text x="42.5%" y="47%" fill="white" font-size="20" font-family="Verdana">S-Band2 Power</text>
                <text x="65%" y="47%" fill="#d6ab62" font-size="20" font-family="Verdana">Off</text>

                <text x="42.5%" y="50%" fill="white" font-size="20" font-family="Verdana">Elevation Gimbal</text>
                <text x="65%" y="50%" fill="#d6ab62" font-size="20" font-family="Verdana">0.00</text>
                <text x="72%" y="50%" fill="white" font-size="20" font-family="Verdana">°</text>


                <text x="42.5%" y="53%" fill="white" font-size="20" font-family="Verdana">Azimuth Gimbal</text>
                <text x="65%" y="53%" fill="#d6ab62" font-size="20" font-family="Verdana">0.00</text>
                <text x="72%" y="53%" fill="white" font-size="20" font-family="Verdana">°</text>
    </g>
  )
};

export default SBand;