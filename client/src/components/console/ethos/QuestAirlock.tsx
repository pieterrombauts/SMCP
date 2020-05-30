import React from 'react';
import { ethosLifeSupportDisplay } from '../customTypes'

interface QuestProps {
  origin: number[];
  values: ethosLifeSupportDisplay;
};

const QuestAirlock: React.FC<QuestProps> = ( props ) => {
  var [originX, originY] = props.origin;
  return(
    <g id="ethos-life-support-display-quest-airlock">
      <rect x={originX} y={originY} rx="5" ry="5" width="845" height="270" style={{fill:"#333333", stroke:"#393939", strokeWidth:5, opacity:0.5}} />
      <text x={originX+15} y={originY+40} style={{fill: "white", fontSize: "30", fontWeight: "bold"}}>Quest Airlock</text>

      <text x={originX+15} y={originY+80} style={{fill: "white", fontSize: "20"}}>Pressure</text>
      <text x={originX+125} y={originY+80} style={{fill: "#EBB249", fontSize: "20"}}>{props.values.quest.pressure}</text>
      <text x={originX+195} y={originY+80} style={{fill: "white", fontSize: "20"}}>mmHg</text>

      <text x={originX+15} y={originY+120} style={{fill: "white", fontSize: "20"}}>Fan Status</text>
      <text x={originX+125} y={originY+120} style={{fill: "#EBB249", fontSize: "20"}}>ON</text>

      <text x={originX+15} y={originY+160} style={{fill: "white", fontSize: "20"}}>Crewlock Pressure</text>
      <text x={originX+195} y={originY+160} style={{fill: "#EBB249", fontSize: "20"}}>{props.values.quest.crewlock_pressure}</text>
      <text x={originX+265} y={originY+160} style={{fill: "white", fontSize: "20"}}>mmHg</text>

      <text x={originX+15} y={originY+200} style={{fill: "white", fontSize: "20"}}>Vacuum Exhaust Valve</text>
      <text x={originX+245} y={originY+200} style={{fill: "#EBB249", fontSize: "20"}}>OPEN</text>

      <text x={originX+15} y={originY+240} style={{fill: "white", fontSize: "20"}}>Vacuum Resource Valve</text>
      <text x={originX+245} y={originY+240} style={{fill: "#EBB249", fontSize: "20"}}>OPEN</text>

      <text x={originX+545} y={originY+70} style={{fill: "white", fontSize: "20"}}>Pressure</text>
      <text x={originX+685} y={originY+70} style={{fill: "white", fontSize: "20"}}>Valve Position</text>

      <text x={originX+365} y={originY+110} style={{fill: "white", fontSize: "20"}}>EVA O2 Tank</text>
      <text x={originX+515} y={originY+110} style={{fill: "#EBB249", fontSize: "20"}}>{props.values.quest.EVA_O2}</text>
      <text x={originX+615} y={originY+110} style={{fill: "white", fontSize: "20"}}>kPa</text>
      <text x={originX+705} y={originY+110} style={{fill: "#EBB249", fontSize: "20"}}>CLOSED</text>

      <text x={originX+365} y={originY+150} style={{fill: "white", fontSize: "20"}}>N2 Tank</text>
      <text x={originX+515} y={originY+150} style={{fill: "#EBB249", fontSize: "20"}}>{props.values.quest.N2}</text>
      <text x={originX+615} y={originY+150} style={{fill: "white", fontSize: "20"}}>kPa</text>
      <text x={originX+715} y={originY+150} style={{fill: "#EBB249", fontSize: "20"}}>OPEN</text>

      <text x={originX+365} y={originY+190} style={{fill: "white", fontSize: "20"}}>O2 Tank</text>
      <text x={originX+515} y={originY+190} style={{fill: "#EBB249", fontSize: "20"}}>{props.values.quest.O2}</text>
      <text x={originX+615} y={originY+190} style={{fill: "white", fontSize: "20"}}>kPa</text>
      <text x={originX+715} y={originY+190} style={{fill: "#EBB249", fontSize: "20"}}>OPEN</text>
    </g>
  )
};

export default QuestAirlock;

//x = 5 , y = 650