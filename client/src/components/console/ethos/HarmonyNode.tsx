import React from 'react';
import { ethosThermalSystemDisplay } from '../customTypes'

interface HarmonyNodeProps {
  values: ethosThermalSystemDisplay;
};

const HarmonyNode: React.FC<HarmonyNodeProps> = (props) => {
  return (
    <g id="ethos-thermal-system-display-density-lab">
      <text x="5%" y="86%" fill="white" font-size="20" font-family="Verdana">Harmony Node</text>
      <text x="27.25%" y="85.5%" fill="#d6ab62" font-size="20" font-family="Verdana">{props.values.harmonyNode.lowTLoop}</text>
      <text x="48.25%" y="85.5%" fill="#d6ab62" font-size="20" font-family="Verdana">{props.values.harmonyNode.moderateTLoop}</text>
      <text x="67.5%" y="85.5%" fill="#d6ab62" font-size="20" font-family="Verdana">{props.values.harmonyNode.lowTemp}</text>
      <text x="83%" y="85.5%" fill="#d6ab62" font-size="20" font-family="Verdana">{props.values.harmonyNode.moderateTemp}</text>
    </g>
  )
};

export default HarmonyNode;
