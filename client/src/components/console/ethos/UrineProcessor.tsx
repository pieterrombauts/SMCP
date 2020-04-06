import React from 'react';
import { ethosRegenLifeSupportDisplay } from '../customTypes'

interface UrineProcessorProps {
  values: ethosRegenLifeSupportDisplay;
};

const HarmonyNode: React.FC<UrineProcessorProps> = (props) => {
  return (
    <g id="ethos-thermal-system-display-density-lab">
      <text x="27%" y="42%" fill="white" font-size="20" font-family="Verdana">Urine Tank </text>
      <text x="29%" y="45%" fill="white" font-size="20" font-family="Verdana">Level </text>
      <text x="29%" y="50%" fill="#d6ab62" font-size="20" font-family="Verdana">{props.values.upa.urineTankLevel}</text>
      <text x="34%" y="50%" fill="white" font-size="20" font-family="Verdana">%</text>
    </g>
  )
};

export default HarmonyNode;
