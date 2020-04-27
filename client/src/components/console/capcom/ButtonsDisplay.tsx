import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import moment from 'moment';

interface ButtonsProps {
  className?: string;
  time: string;
};

const UButtonsDisplay: React.FC<ButtonsProps> = ( props ) => {
  const [ signal, setSignal ] = useState<boolean>(true)
  const [ losTimes, setLosTimes ] = useState<string[]>(['2019-11-15T15:17:37', '2019-11-15T15:57:51', '2019-11-15T16:03:53', '2019-11-15T16:07:03', '2019-11-15T16:10:10', '2019-11-15T16:13:24','2019-11-15T16:52:26','2019-11-15T17:37:00'])
  const [ aosTimes, setAosTimes ] = useState<string[]>(['2019-11-15T15:17:52', '2019-11-15T15:59:28', '2019-11-15T16:05:46', '2019-11-15T16:09:19', '2019-11-15T16:12:07', '2019-11-15T16:14:25','2019-11-15T17:00:00','2019-11-15T17:44:00'])
  const [ nextAOS, setNextAOS ] = useState<string>("");
  const [ nextLOS, setNextLOS ] = useState<string>("");
  useEffect(() => {
    if (moment(props.time).isBefore(moment(aosTimes[0]))) {
      var hoursAOS = moment(aosTimes[0]).diff(moment(props.time), 'hours')
      var minutesAOS = moment(aosTimes[0]).diff(moment(props.time), 'minutes')
      var secondsAOS = moment(aosTimes[0]).diff(moment(props.time), 'seconds')
      setNextAOS(hoursAOS.toString().padStart(2,'0') + ":" + (minutesAOS - 60*hoursAOS).toString().padStart(2,'0') + ":" + (secondsAOS - 60*minutesAOS).toString().padStart(2,'0'));
    } else if (moment(props.time).isSameOrAfter(moment(aosTimes[0]))) {
      setSignal(true);
      var newAosTimes = aosTimes;
      newAosTimes.shift();
      setAosTimes(newAosTimes);
    }
    if (moment(props.time).isBefore(moment(losTimes[0]))) {
      var hoursLOS = moment(losTimes[0]).diff(moment(props.time), 'hours')
      var minutesLOS = moment(losTimes[0]).diff(moment(props.time), 'minutes')
      var secondsLOS = moment(losTimes[0]).diff(moment(props.time), 'seconds')
      setNextLOS(hoursLOS.toString().padStart(2,'0') + ":" + (minutesLOS - 60*hoursLOS).toString().padStart(2,'0') + ":" + (secondsLOS - 60*minutesLOS).toString().padStart(2,'0'));
    } else if (moment(props.time).isSameOrAfter(moment(losTimes[0]))) {
      setSignal(false);
      var newLosTimes = losTimes;
      newLosTimes.shift();
      setLosTimes(newLosTimes);
    }
  }, [props.time, signal, losTimes, aosTimes])
  return(
    <div className={props.className}>
      <svg preserveAspectRatio='xMidYMid meet' viewBox='0 0 1300 990'>
        <rect x="740" y="20" rx="5" ry="5" width="560" height="400" style={{fill:"#393939", stroke:"#393939", strokeWidth:5, opacity:0.5}} />
        

        
        <rect x="770" y="40" rx="5" ry="5" width="200" height="100" style={{fill: signal ? "#00CC00" : "#004000", stroke:"#393939", strokeWidth:5}} />
        
        <text x="810" y="110" fill={signal ? "white" : "grey"} fontSize="50" fontFamily="Verdana">AOS</text>

        <rect x="1060" y="40" rx="5" ry="5" width="200" height="100" style={{fill: signal ? "#640000" : "#FF0000", stroke:"#393939", strokeWidth:5}} />
        <text x="1110" y="110" fill={signal ? "grey" : "white"} fontSize="50" fontFamily="Verdana">LOS</text>

        <text x="780" y="230" fill="white" fontSize="50" fontFamily="Verdana">Next AOS {nextAOS}</text>
        <text x="780" y="310" fill="white" fontSize="50" fontFamily="Verdana">Next LOS {nextLOS}</text>

        <rect x='0' y='20' rx="5" ry="5" width="700" height="400" style={{fill:"#333333", stroke:"#393939", strokeWidth:5, opacity:0.5}} />
        
        <text x="30" y="100" fill="white" fontSize="50" fontFamily="Verdana" text-decoration="underline">Caution & Warning </text>
        
        <rect x="20" y="140" rx="5" ry="5" width="110" height="90" style={{fill:"white", stroke:"#393939", strokeWidth:5}} />
        <text x="40" y="195" fill="black" fontSize="30" fontFamily="Verdana">FIRE</text>

        <rect x="160" y="140" rx="5" ry="5" width="110" height="90" style={{fill:"white", stroke:"#393939", strokeWidth:5}} />
        <text x="180" y="195" fill="black" fontSize="30" fontFamily="Verdana">ΔP</text>

        <rect x="300" y="140" rx="5" ry="5" width="110" height="90" style={{fill:"white", stroke:"#393939", strokeWidth:5}} />
        <text x="320" y="195" fill="black" fontSize="30" fontFamily="Verdana">ATM</text>

        <rect x="440" y="140" rx="5" ry="5" width="110" height="90" style={{fill:"white", stroke:"#393939", strokeWidth:5}} />
        <text x="450" y="195" fill="black" fontSize="18" fontFamily="Verdana">WARNING</text>

        <rect x="580" y="140" rx="5" ry="5" width="110" height="90" style={{fill:"white", stroke:"#393939", strokeWidth:5}} />
        <text x="590" y="195" fill="black" fontSize="18" fontFamily="Verdana">CAUTION</text>

        <rect x="580" y="300" rx="5" ry="5" width="110" height="90" style={{fill:"white", stroke:"#393939", strokeWidth:5}} />
        <text x="595" y="355" fill="black" fontSize="30" fontFamily="Verdana">TEST</text>
      </svg>
    </div>
  )
};

const ButtonsDisplay = styled(UButtonsDisplay)`
  svg {
    height: 100%;
    position: absolute;
    left: 0;
  }
`;

export default ButtonsDisplay;