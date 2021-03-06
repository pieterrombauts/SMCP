import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import EVA1 from './EVA1';
import EVA2 from './EVA2';
import { generateRandVal, decreaseValue } from '../../../dataGenerator';

interface EVASDProps {
    className?: string;
};

const defaultValues = {
    eva1: {
        helmetPressure: 0,
        o2: 65,
        water: 80,
        batteryCharge: 67
    },

    eva2: {
        helmetPressure: 0,
        o2: 65,
        water: 80,
        batteryCharge: 68
    }
}

export const UEVASuitDisplay: React.FC<EVASDProps> = (props) => {
    var [values, setValues] = useState(defaultValues)
    const intervalRef = useRef(0);

    useEffect(() => {
        if (intervalRef.current !== 0) {
            clearInterval(intervalRef.current);
        }
            const id = setInterval(() => {
            var newValues =     {
                eva1: {
                    helmetPressure: generateRandVal(8, 10).toFixed(2),
                    o2: parseFloat(decreaseValue(values.eva1.o2).toFixed(2)),
                    water: parseFloat(decreaseValue(values.eva1.water).toFixed(2)),
                    batteryCharge: parseFloat(decreaseValue(values.eva1.batteryCharge).toFixed(2)),
                },

                eva2: {
                    helmetPressure: generateRandVal(8, 10).toFixed(2),
                    o2: parseFloat(decreaseValue(values.eva2.o2).toFixed(2)),
                    water: parseFloat(decreaseValue(values.eva2.water).toFixed(2)),
                    batteryCharge: parseFloat(decreaseValue(values.eva2.batteryCharge).toFixed(2)),
                }

            }
             
            setValues(values = newValues);
        }, 5000);
        intervalRef.current = id;
    }, [])
    return (

        <div className={props.className}>
            <svg preserveAspectRatio='xMidYMid meet' viewBox='0 0 1400 1000'>
                <rect x="1%" y="5%" rx="5" ry="5" width="1300" height="945" style={{ fill: "#333333", stroke: "#393939", strokeWidth: 5, opacity: 0.5 }} />

                <text x="37%" y="18%" fill="#EBB249" fontSize="30" textDecoration="underline"> Helmet Pressure (psi)</text>
                <line x1="47%" y1="20%" x2="47%" y2="30%" stroke="#a39d9d" strokeWidth="4" />

                <text x="41%" y="34%" fill="#EBB249" fontSize="30" textDecoration="underline"> O2 Level (%)</text>
                <line x1="47%" y1="36%" x2="47%" y2="46%" stroke="#a39d9d" strokeWidth="4" />


                <text x="40%" y="50%" fill="#EBB249" fontSize="30" textDecoration="underline"> Water Level (%)</text>
                <line x1="47%" y1="52%" x2="47%" y2="62%" stroke="#a39d9d" strokeWidth="4" />

                <text x="37%" y="66%" fill="#EBB249" fontSize="30" textDecoration="underline"> Battery Charge Level (%)</text>
                <line x1="47%" y1="68%" x2="47%" y2="75%" stroke="#a39d9d" strokeWidth="4" />

                <text x="43.5%" y="78%" fill="#EBB249" fontSize="30" textDecoration="underline"> Comms</text>
                <line x1="47%" y1="80%" x2="47%" y2="89%" stroke="#a39d9d" strokeWidth="4" />

                <EVA1 values={values} />
                <EVA2 values={values} />


            </svg>
        </div>
    );
}

export const EVASuitDisplay = styled(UEVASuitDisplay)`
  width: 100%;
  height: 100%;
  position: absolute;

`;