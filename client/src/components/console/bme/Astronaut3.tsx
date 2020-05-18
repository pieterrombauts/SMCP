import React, {useState, useEffect} from 'react';
import { bmeVitalSignsDisplay, bmeVitalSignsTemps } from '../customTypes'
import {Chart} from './Chart';
import { RootState } from '../../../reducers';
import { connect, ConnectedProps } from 'react-redux';

interface A3Props {
  values: bmeVitalSignsDisplay;
  temps: bmeVitalSignsTemps;
};

const mapState = (state: RootState ) => ({
  time: state.dataReducer.time
})

const connector = connect(mapState, {})
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & A3Props

const Astronaut3: React.FC<Props> = ( props ) => {
  const [newData, setNewData] = useState<{x: string, y: number}>({x:"2019-11-15T15:00:00", y:37})
  useEffect(() => {
    if (props.time !== "") setNewData({x: props.time, y: props.temps.astronaut3.temperature})
  }, [props.temps])
  return(
    <g id="bme-vital-signs-astronaut1">
      <rect  x="0%" y="51%" rx="5" ry="5" width="650" height="450" style={{fill:"#333333", stroke:"#393939", strokeWidth:5, opacity:0.5}} />
      <image x="22%" y="55.5%" width={150} height={150} href='/media/Bme_3.gif'></image>
      <image x="2%" y="48%" width={250} height={500} href='/media/Bme_Christina_Koch.jpg'></image>

      <text x="2%" y="56%" fill="#EBB249" fontSize="20" fontFamily="Verdana">Christina Koch</text>
      <text x="2%" y="91%" fill="#EBB249" fontSize="20" fontFamily="Verdana">Flight Engineer 3</text>

      <text x="22%" y="55.5%" fill="white" fontSize="20" fontFamily="Verdana">Heart Rate (BPM)</text>
      <text x="34%" y="59.5%" fill="white" fontSize="12" fontFamily="Verdana">Current BPM</text>
      <text x="41%" y="59.5%" fill="white" fontSize="12" fontFamily="Verdana">Max BPM</text>
      <text x="34%" y="62.5%" fill="#7ef56e" fontSize="20" fontFamily="Verdana">{props.values.astronaut3.heartRate}</text>
      <text x="41%" y="62.5%" fill="#f74848" fontSize="20" fontFamily="Verdana">{props.values.astronaut3.heartRateMax}</text>

      <text x="22%" y="72.5%" fill="white" fontSize="20" fontFamily="Verdana">Blood Pressure (mmHg)</text>
      <text x="22%" y="75.5%" fill="#7ef56e" fontSize="20" fontFamily="Verdana">115 / 70</text>

      <text x="22%" y="80.5%" fill="white" fontSize="20" fontFamily="Verdana">Temperature (°C)</text>
      <foreignObject x="22%" y="81.5%" height="125px" width="300px" fill="black"><Chart data={newData}/></foreignObject>
    </g>
  )
};

export default connector(Astronaut3);