import React from 'react';
import { ethosLifeSupportDisplay } from '../customTypes'

interface TranquilityProps {
  origin: number[];
  values: ethosLifeSupportDisplay;
};

const Tranquility: React.FC<TranquilityProps> = ( props ) => {
  var [originX, originY] = props.origin;
  return(
    <g id="ethos-life-support-display-tranquility">
      <rect x={originX} y={originY} rx="5" ry="5" width="300" height="300" style={{fill:"#333333", stroke:"#393939", strokeWidth:5, opacity:0.5}} />
      <text x={originX+15} y={originY+40} style={{fill: "white", fontSize: "30", fontWeight: "bold"}}>Tranquility</text>

      <text x={originX+15} y={originY+80} style={{fill: "white", fontSize: "20"}}>Pressure</text>
      <text x={originX+125} y={originY+80} style={{fill: "#EBB249", fontSize: "20"}}>{props.values.tranquility.pressure}</text>
      <text x={originX+205} y={originY+80} style={{fill: "white", fontSize: "20"}}>mmHg</text>

      <text x={originX+15} y={originY+120} style={{fill: "white", fontSize: "20"}}>Temp</text>
      <text x={originX+125} y={originY+120} style={{fill: "#EBB249", fontSize: "20"}}>{props.values.tranquility.temp}</text>
      <text x={originX+205} y={originY+120} style={{fill: "white", fontSize: "20"}}>°C</text>

      <text x={originX+15} y={originY+160} style={{fill: "white", fontSize: "20"}}>pp02</text>
      <text x={originX+125} y={originY+160} style={{fill: "#EBB249", fontSize: "20"}}>{props.values.tranquility.ppO2}</text>
      <text x={originX+205} y={originY+160} style={{fill: "white", fontSize: "20"}}>mmHg</text>

      <text x={originX+15} y={originY+200} style={{fill: "white", fontSize: "20"}}>ppN2</text>
      <text x={originX+125} y={originY+200} style={{fill: "#EBB249", fontSize: "20"}}>{props.values.tranquility.ppN2}</text>
      <text x={originX+205} y={originY+200} style={{fill: "white", fontSize: "20"}}>mmHg</text>

      <text x={originX+15} y={originY+240} style={{fill: "white", fontSize: "20"}}>ppCO2</text>
      <text x={originX+125} y={originY+240} style={{fill: "#EBB249", fontSize: "20"}}>{props.values.tranquility.ppCO2}</text>
      <text x={originX+205} y={originY+240} style={{fill: "white", fontSize: "20"}}>mmHg</text>

      <text x={originX+15} y={originY+280} style={{fill: "white", fontSize: "20"}}>Fan Status</text>
      <text x={originX+125} y={originY+280} style={{fill: "#EBB249", fontSize: "20"}}>ON</text>
    </g>
  )
};

export default Tranquility;