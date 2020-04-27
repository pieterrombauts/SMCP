import React from 'react';
import { bmeVitalSignsDisplay } from '../customTypes'

interface A2Props {
  values: bmeVitalSignsDisplay;
};

const Astronaut2: React.FC<A2Props> = ( props ) => {
  return(
    <g id="bme-vital-signs-astronaut1">
      <rect  x="50%" y="5%" rx="5" ry="5" width="650" height="450" style={{fill:"#333333", stroke:"#393939", strokeWidth:5, opacity:0.5}} />
      <image x="72%" y="9.5%" width={150} height={150} href='/media/Bme_2.gif'></image>
      <image x="52%" y="2%" width={250} height={500} href='/media/Bme_Andrew_R_Morgan.jpg'></image>
      
      <text x="52%" y="10%" fill="#EBB249" fontSize="20" fontFamily="Verdana">Andrew Morgan</text>
      <text x="52%" y="45%" fill="#EBB249" fontSize="20" fontFamily="Verdana">Flight Engineer 2</text>

      <text x="72%" y="10%" fill="white" fontSize="20" fontFamily="Verdana">Heart Rate (BPM)</text>
      <text x="84%" y="14%" fill="white" fontSize="12" fontFamily="Verdana">Current BPM</text>
      <text x="91%" y="14%" fill="white" fontSize="12" fontFamily="Verdana">Max BPM</text>
      <text x="84%" y="17%" fill="#7ef56e" fontSize="20" fontFamily="Verdana">{props.values.astronaut2.heartRate}</text>
      <text x="91%" y="17%" fill="#f74848" fontSize="20" fontFamily="Verdana">{props.values.astronaut2.heartRateMax}</text>

      <text x="72%" y="27%" fill="white" fontSize="20" fontFamily="Verdana">Blood Pressure (mmHg)</text>
      <text x="72%" y="30%" fill="#7ef56e" fontSize="20" fontFamily="Verdana">{props.values.astronaut2.bloodPressureSystolic.toFixed(0)} /</text>
      <text x="76.5%" y="30%" fill="#7ef56e" fontSize="20" fontFamily="Verdana">{props.values.astronaut2.bloodPressureDiastolic.toFixed(0)}</text>

      <text x="72%" y="35%" fill="white" fontSize="20" fontFamily="Verdana">Temperature (°C)</text>
      <text x="91%" y="35%" fill="#7ef56e" fontSize="20" fontFamily="Verdana">{props.values.astronaut2.temperature}</text>

    </g>
  )
};

export default Astronaut2;