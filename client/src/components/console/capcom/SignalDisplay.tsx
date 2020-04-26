import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import moment from 'moment';

interface SignalProps {
  className?: string;
  time: string;
};

const USignalDisplay: React.FC<SignalProps> = ( props ) => {
  const [ signal, setSignal ] = useState<boolean>(true)
  const [ losTimes, setLosTimes ] = useState<string[]>(['2019-11-15T15:47:37', '2019-11-15T16:27:51', '2019-11-15T16:33:53', '2019-11-15T16:37:03', '2019-11-15T16:40:10', '2019-11-15T16:43:24'])
  const [ aosTimes, setAosTimes ] = useState<string[]>(['2019-11-15T15:47:52', '2019-11-15T16:29:28', '2019-11-15T16:35:46', '2019-11-15T16:39:19', '2019-11-15T16:42:07', '2019-11-15T16:44:25'])
  const [ nextAOS, setNextAOS ] = useState<string>("");
  const [ nextLOS, setNextLOS ] = useState<string>("");
  useEffect(() => {
    if (moment(props.time).isBefore(moment(aosTimes[0]))) {
      var hoursAOS = moment(props.time).diff(moment(aosTimes[0]), 'hours')
      var minutesAOS = moment(props.time).diff(moment(aosTimes[0]), 'minutes')
      var secondsAOS = moment(props.time).diff(moment(aosTimes[0]), 'seconds')
      setNextAOS(hoursAOS.toString().padStart(2,'0') + ":" + (minutesAOS - 60*hoursAOS).toString().padStart(2,'0') + ":" + (secondsAOS - 60*minutesAOS).toString().padStart(2,'0'));
    } else if (moment(props.time).isSameOrAfter(moment(aosTimes[0]))) {
      setSignal(true);
      var newAosTimes = aosTimes;
      newAosTimes.shift();
      setAosTimes(newAosTimes);
    }
    if (moment(props.time).isBefore(moment(losTimes[0]))) {
      var hoursLOS = moment(props.time).diff(moment(losTimes[0]), 'hours')
      var minutesLOS = moment(props.time).diff(moment(losTimes[0]), 'minutes')
      var secondsLOS = moment(props.time).diff(moment(losTimes[0]), 'seconds')
      setNextLOS(hoursLOS.toString().padStart(2,'0') + ":" + (minutesLOS - 60*hoursLOS).toString().padStart(2,'0') + ":" + (secondsLOS - 60*minutesLOS).toString().padStart(2,'0'));
    } else if (moment(props.time).isSameOrAfter(moment(losTimes[0]))) {
      setSignal(false);
      var newLosTimes = losTimes;
      newLosTimes.shift();
      setLosTimes(newLosTimes);
    }
  }, [props.time, signal, losTimes, aosTimes])
  return(
    <svg className={props.className} preserveAspectRatio='xMidYMid meet' viewBox='0 0 1300 990'>
      <rect x="740" y="20" rx="5" ry="5" width="560" height="400" style={{fill:"#393939", stroke:"#393939", strokeWidth:5, opacity:0.5}} />
      
      <rect x="770" y="40" rx="5" ry="5" width="200" height="100" style={{fill:"green", stroke:"#393939", strokeWidth:5}} />
      <text x="810" y="110" fill="white" fontSize="50" fontFamily="Verdana">AOS {signal}</text>

      <rect x="1060" y="40" rx="5" ry="5" width="200" height="100" style={{fill:"red", stroke:"#393939", strokeWidth:5}} />
      <text x="1110" y="110" fill="white" fontSize="50" fontFamily="Verdana">LOS {!signal}</text>

      <text x="780" y="230" fill="white" fontSize="50" fontFamily="Verdana">Next AOS {nextAOS}</text>
      <text x="780" y="310" fill="white" fontSize="50" fontFamily="Verdana">Next LOS {nextLOS}</text>
    </svg>
  )
};

const SignalDisplay = styled(USignalDisplay)`
  height: 100%;
  position: absolute;
`;

export default SignalDisplay;