import React from 'react';
import { bmeVitalSignsDisplay } from '../customTypes'

interface A3Props {
  values: bmeVitalSignsDisplay;
};

const Astronaut3: React.FC<A3Props> = ( props ) => {
  return(
    <g id="bme-vital-signs-astronaut1">
      <rect  x="" y="55%" rx="5" ry="5" width="650" height="450" style={{fill:"#333333", stroke:"#393939", strokeWidth:5, opacity:0.5}} />
      <image x="22%" y="59.5%" width={150} height={150} href='/media/Bme_3.gif'></image>
      <image x="2%" y="52%" width={250} height={500} href='/media/Bme_Christina_Koch.jpg'></image>

      <text x="2%" y="60%" fill="#EBB249" fontSize="20" fontFamily="Verdana">Christina Koch</text>
      <text x="2%" y="95%" fill="#EBB249" fontSize="20" fontFamily="Verdana">Flight Engineer 3</text>

      <text x="22%" y="59.5%" fill="white" fontSize="20" fontFamily="Verdana">Heart Rate (BPM)</text>
      <text x="34%" y="63.5%" fill="white" fontSize="12" fontFamily="Verdana">Current BPM</text>
      <text x="41%" y="63.5%" fill="white" fontSize="12" fontFamily="Verdana">Max BPM</text>
      <text x="34%" y="66.5%" fill="#7ef56e" fontSize="20" fontFamily="Verdana">{props.values.astronaut3.heartRate}</text>
      <text x="41%" y="66.5%" fill="#f74848" fontSize="20" fontFamily="Verdana">{props.values.astronaut3.heartRateMax}</text>

      <text x="22%" y="76.5%" fill="white" fontSize="20" fontFamily="Verdana">Blood Pressure (mmHg)</text>
      <text x="22%" y="79.5%" fill="#7ef56e" fontSize="20" fontFamily="Verdana">115 / 70</text>

      <text x="22%" y="84.5%" fill="white" fontSize="20" fontFamily="Verdana">Temperature (°C)</text>
    
    </g>
  )
};

export default Astronaut3;