import React from 'react';
import { ethosLifeSupportDisplay } from '../customTypes'

interface HarmonyProps {
  origin: number[];
  values: ethosLifeSupportDisplay;
};

const Harmony: React.FC<HarmonyProps> = ( props ) => {
  var [originX, originY] = props.origin;
  return(
    <g id="ethos-life-support-display-harmony">
      <rect x={originX} y={originY} rx="5" ry="5" width="300" height="270" style={{fill:"#333333", stroke:"#393939", strokeWidth:5, opacity:0.5}} />
      <text x={originX+15} y={originY+40} style={{fill: "white", fontSize: "30", fontWeight: "bold"}}>Harmony</text>

      <text x={originX+15} y={originY+80} style={{fill: "white", fontSize: "20"}}>Pressure</text>
      <text x={originX+125} y={originY+80} style={{fill: "#EBB249", fontSize: "20"}}>{props.values.harmony.pressure}</text>
      <text x={originX+205} y={originY+80} style={{fill: "white", fontSize: "20"}}>mmHg</text>

      <text x={originX+15} y={originY+120} style={{fill: "white", fontSize: "20"}}>Coolant</text>
      <text x={originX+15} y={originY+140} style={{fill: "white", fontSize: "20"}}>Temp</text>
      <text x={originX+125} y={originY+130} style={{fill: "#EBB249", fontSize: "20"}}>{props.values.harmony.coolant_temp}</text>
      <text x={originX+205} y={originY+130} style={{fill: "white", fontSize: "20"}}>°C</text>

      <text x={originX+15} y={originY+180} style={{fill: "white", fontSize: "20"}}>Fan Status</text>
      <text x={originX+125} y={originY+180} style={{fill: "#EBB249", fontSize: "20"}}>ON</text>
    </g>
  )
};

export default Harmony;

//x = 540 , y = 350