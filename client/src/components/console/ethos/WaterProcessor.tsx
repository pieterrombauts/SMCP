import React from 'react';
import { ethosRegenLifeSupportDisplay } from '../customTypes'

interface WaterProcessorProps {
  values: ethosRegenLifeSupportDisplay;
};

const WaterProcessor: React.FC<WaterProcessorProps> = (props) => {
  return (
    <g id="ethos-thermal-system-display-density-lab">
      <text x="72.5%" y="34.5%" fill="white" fontSize="20" fontFamily="Verdana">Waste Water </text>
      <text x="73%" y="37.5%" fill="white" fontSize="20" fontFamily="Verdana">Tank Level </text>
      <text x="75%" y="43%" fill="#d6ab62" fontSize="20" fontFamily="Verdana">{props.values.wpa.wastewaterTankLevel}</text>
      <text x="80%" y="43%" fill="white" fontSize="20" fontFamily="Verdana">%</text>

      <text x="72.75%" y="78%" fill="white" fontSize="20" fontFamily="Verdana">Clean Water </text>
      <text x="73%" y="81%" fill="white" fontSize="20" fontFamily="Verdana">Tank Level </text>
      <text x="75%" y="87%" fill="#d6ab62" fontSize="20" fontFamily="Verdana">{props.values.wpa.cleanWaterTankLevel}</text>
      <text x="80%" y="87%" fill="white" fontSize="20" fontFamily="Verdana">%</text>
    </g>
  )
};

export default WaterProcessor;
