import React from 'react';
import { ethosLifeSupportDisplay } from '../customTypes'

interface DestinyProps {
  origin: number[];
  values: ethosLifeSupportDisplay;
};

const Destiny: React.FC<DestinyProps> = ( props ) => {
  var [originX, originY] = props.origin;
  return(
    <g id="ethos-life-support-display-destiny-lab">
      <rect x={originX} y={originY} rx="5" ry="5" width="500" height="270" style={{fill:"#333333", stroke:"#393939", strokeWidth:5, opacity:0.5}} />
      <text x={originX+15} y={originY+40} style={{fill: "white", fontSize: "30", fontWeight: "bold"}}>Destiny Lab</text>

      <text x={originX+15} y={originY+80} style={{fill: "white", fontSize: "20"}}>Pressure</text>
      <text x={originX+125} y={originY+80} style={{fill: "#EBB249", fontSize: "20"}}>{props.values.destiny.pressure}</text>
      <text x={originX+205} y={originY+80} style={{fill: "white", fontSize: "20"}}>mmHg</text>

      <text x={originX+15} y={originY+120} style={{fill: "white", fontSize: "20"}}>Temp</text>
      <text x={originX+125} y={originY+120} style={{fill: "#EBB249", fontSize: "20"}}>{props.values.destiny.temp}</text>
      <text x={originX+205} y={originY+120} style={{fill: "white", fontSize: "20"}}>°C</text>

      <text x={originX+15} y={originY+160} style={{fill: "white", fontSize: "20"}}>pp02</text>
      <text x={originX+125} y={originY+160} style={{fill: "#EBB249", fontSize: "20"}}>{props.values.destiny.ppO2}</text>
      <text x={originX+205} y={originY+160} style={{fill: "white", fontSize: "20"}}>mmHg</text>

      <text x={originX+15} y={originY+200} style={{fill: "white", fontSize: "20"}}>ppN2</text>
      <text x={originX+125} y={originY+200} style={{fill: "#EBB249", fontSize: "20"}}>{props.values.destiny.ppN2}</text>
      <text x={originX+205} y={originY+200} style={{fill: "white", fontSize: "20"}}>mmHg</text>

      <text x={originX+15} y={originY+240} style={{fill: "white", fontSize: "20"}}>ppCO2</text>
      <text x={originX+125} y={originY+240} style={{fill: "#EBB249", fontSize: "20"}}>{props.values.destiny.ppCO2}</text>
      <text x={originX+205} y={originY+240} style={{fill: "white", fontSize: "20"}}>mmHg</text>

      <text x={originX+345} y={originY+80} style={{fill: "white", fontSize: "20"}}>Port Fan</text>
      <text x={originX+360} y={originY+110} style={{fill: "#EBB249", fontSize: "20"}}>OFF</text>

      <text x={originX+325} y={originY+200} style={{fill: "white", fontSize: "20"}}>Starboard Fan</text>
      <text x={originX+365} y={originY+230} style={{fill: "#EBB249", fontSize: "20"}}>ON</text>
    </g>
  )
};

export default Destiny;