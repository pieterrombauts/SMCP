import React from 'react';
import { ethosRegenLifeSupportDisplay } from '../customTypes'

interface OxygenGeneratorProps {
  values: ethosRegenLifeSupportDisplay;
};

const OxygenGenerator: React.FC<OxygenGeneratorProps> = (props) => {
  return (
    <g id="ethos-thermal-system-display-density-lab">
      <text x="17%" y="85%" fill="white" fontSize="20" fontFamily="Verdana">O2 Production Rate </text>
      <text x="20%" y="89%" fill="#d6ab62" fontSize="20" fontFamily="Verdana">{props.values.oga.oxygenProductionRate}</text>
      <text x="25%" y="89%" fill="white" fontSize="20" fontFamily="Verdana">kg/day</text>
    </g>
  )
};

export default OxygenGenerator;
