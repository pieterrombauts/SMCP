import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import UrineProcessor from './UrineProcessor'
import WasteProcessor from './WaterProcessor'
import OxygenGenerator from './OxygenGenerator'
import { generateRandVal } from '../../../dataGenerator';

interface EthosRLSDProps {
    className?: string;
};
const defaultValues = {
    upa: {
        urineTankLevel: 0
    },
    
    wpa: {
        wastewaterTankLevel: 0,
        cleanWaterTankLevel: 0
    },
    
    oga: {
        oxygenProductionRate: 0 
    }
    

}

const UEthosRegenLifeSupportDisplay: React.FC<EthosRLSDProps> = (props) => {
    var [values, setValues] = useState(defaultValues)
    const intervalRef = useRef(0);

    useEffect(() => {
        if (intervalRef.current !== 0) {
            clearInterval(intervalRef.current);
        }
        const id = setInterval(() => {
            var newValues = {
                upa: {
                    urineTankLevel: generateRandVal(60, 62).toFixed(2)
                  },
                
                  wpa: { 
                    wastewaterTankLevel: generateRandVal(60.34, 61.34).toFixed(2),
                    cleanWaterTankLevel: generateRandVal(60.34, 61.34).toFixed(2)
                  },
                
                  oga: {
                    oxygenProductionRate: generateRandVal(60.34, 61.34).toFixed(2)
                  }

            }
            setValues(newValues);
        }, 5000);
        intervalRef.current = id;
    }, [])
    return (
        <div className={props.className}>
            <svg preserveAspectRatio='xMidYMid meet' viewBox='0 0 1300 990'>
                <image x={0} y={0} width={1300} height={990} href={'/media/Ethos_3.png'}></image>
                <rect x={330} y={390} rx="5" ry="5" width="150" height="150" style={{ fill: "#284b5b" }} />
                <rect x={930} y={310} rx="5" ry="5" width="150" height="150" style={{ fill: "#284b5b" }} />
                <rect x={930} y={750} rx="5" ry="5" width="155" height="150" style={{ fill: "#284b5b" }} />
                <rect x={150} y={810} rx="5" ry="5" width="350" height="100" style={{ fill: "#284b5b" }} />
                

                <UrineProcessor values={values} />
                <WasteProcessor values={values} />
                <OxygenGenerator values={values} />

            </svg>
        </div>
    )
};

const EthosRegenLifeSupportDisplay = styled(UEthosRegenLifeSupportDisplay)`
  svg {
    width: 100%;
    height: 100%;
  }
  /* border: 1px solid white; */
`;

export default EthosRegenLifeSupportDisplay;