import React from 'react';
import { bmeVitalSignsDisplay } from '../customTypes'

interface A1Props {
  values: bmeVitalSignsDisplay;
};

const Astronaut1: React.FC<A1Props> = ( props ) => {
  return(
    <g id="bme-vital-signs-astronaut1">
      <rect  y="5%" rx="5" ry="5" width="650" height="450" style={{fill:"#333333", stroke:"#393939", strokeWidth:5, opacity:0.5}} />
      <image x="22%" y="9.5%" width={150} height={150} href='/media/Bme_1.gif'></image>
      <image x="2%" y="2%" width={250} height={500} href='/media/Bme_Luca_Parmitano.jpg'></image>
      
      <text x="2%" y="10%" fill="#EBB249" fontSize="20" fontFamily="Verdana">Luca Parmitano</text>
      <text x="2%" y="45%" fill="#EBB249" fontSize="20" fontFamily="Verdana">Commander</text>

      <text x="22%" y="10%" fill="white" fontSize="20" fontFamily="Verdana">Heart Rate (BPM)</text>
      <text x="34%" y="14%" fill="white" fontSize="12" fontFamily="Verdana">Current BPM</text>
      <text x="41%" y="14%" fill="white" fontSize="12" fontFamily="Verdana">Max BPM</text>
      <text x="34%" y="17%" fill="#7ef56e" fontSize="20" fontFamily="Verdana">{props.values.astronaut1.heartRate}</text>
      <text x="41%" y="17%" fill="#f74848" fontSize="20" fontFamily="Verdana">{props.values.astronaut1.heartRateMax}</text>

      <text x="22%" y="27%" fill="white" fontSize="20" fontFamily="Verdana">Blood Pressure (mmHg)</text>
      <text x="22%" y="30%" fill="#7ef56e" fontSize="20" fontFamily="Verdana">{props.values.astronaut1.bloodPressureSystolic} / </text>
      <text x="26.5%" y="30%" fill="#7ef56e" fontSize="20" fontFamily="Verdana">{props.values.astronaut1.bloodPressureDiastolic}</text>

      <text x="22%" y="35%" fill="white" fontSize="20" fontFamily="Verdana">Temperature (°C)</text>
      <text x="41%" y="35%" fill="#7ef56e" fontSize="20" fontFamily="Verdana">{props.values.astronaut1.temperature}</text>
    </g>
  )
};

export default Astronaut1;