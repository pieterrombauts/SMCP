import React, {useState, useEffect} from 'react';
import { bmeVitalSignsDisplay, bmeVitalSignsTemps} from '../customTypes'
import {Chart} from './Chart';
import { RootState } from '../../../reducers';
import { connect, ConnectedProps } from 'react-redux';

interface A2Props {
  values: bmeVitalSignsDisplay;
  temps: bmeVitalSignsTemps;
};

const mapState = (state: RootState ) => ({
  time: state.dataReducer.time
})

const connector = connect(mapState, {})
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & A2Props

export const Astronaut2: React.FC<Props> = ( props ) => {
  const [newData, setNewData] = useState<{x: string, y: number}>({x:"2019-11-15T15:00:00", y:37})
  useEffect(() => {
    if (props.time !== "") setNewData({x: props.time, y: props.temps.astronaut2.temperature})
  }, [props.temps])
  return(
    <g id="bme-vital-signs-astronaut1">
      <rect  x="50%" y="3%" rx="5" ry="5" width="650" height="450" style={{fill:"#333333", stroke:"#393939", strokeWidth:5, opacity:0.5}} />
      <image x="72%" y="7.5%" width={150} height={150} href='/media/Bme_2.gif'></image>
      <image x="52%" y="0%" width={250} height={500} href='/media/Bme_Andrew_R_Morgan.jpg'></image>
      
      <text x="52%" y="8%" fill="#EBB249" fontSize="20" fontFamily="Verdana">Andrew Morgan</text>
      <text x="52%" y="43%" fill="#EBB249" fontSize="20" fontFamily="Verdana">Flight Engineer 2</text>

      <text x="72%" y="8%" fill="white" fontSize="20" fontFamily="Verdana">Heart Rate (BPM)</text>
      <text x="84%" y="12%" fill="white" fontSize="12" fontFamily="Verdana">Current BPM</text>
      <text x="91%" y="12%" fill="white" fontSize="12" fontFamily="Verdana">Max BPM</text>
      <text x="84%" y="15%" fill="#7ef56e" fontSize="20" fontFamily="Verdana">{props.values.astronaut2.heartRate}</text>
      <text x="91%" y="15%" fill="#f74848" fontSize="20" fontFamily="Verdana">{props.values.astronaut2.heartRateMax}</text>

      <text x="72%" y="25%" fill="white" fontSize="20" fontFamily="Verdana">Blood Pressure (mmHg)</text>
      <text x="72%" y="28%" fill="#7ef56e" fontSize="20" fontFamily="Verdana">{props.values.astronaut2.bloodPressureSystolic.toFixed(0)} /</text>
      <text x="76.5%" y="28%" fill="#7ef56e" fontSize="20" fontFamily="Verdana">{props.values.astronaut2.bloodPressureDiastolic.toFixed(0)}</text>

      <text x="72%" y="33%" fill="white" fontSize="20" fontFamily="Verdana">Temperature (°C)</text>
      <foreignObject x="72%" y="34%" height="125px" width="300px" fill="black"><Chart data={newData}/></foreignObject>
    </g>
  )
};

export default connector(Astronaut2);