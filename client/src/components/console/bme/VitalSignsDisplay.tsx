import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Astronaut1 from './Astronaut1';
import Astronaut2 from './Astronaut2'
import Astronaut3 from './Astronaut3'
import Astronaut4 from './Astronaut4'
import { generateRandVal } from '../../../dataGenerator';
import { decreaseSystolic } from '../../../bloodPressureSystolic';
import { increaseDiastolic } from '../../../bloodPressureDiastolic';

interface VSDProps {
    className?: string;
};

const defaultValues = {
    astronaut1: {
        heartRate: 0,
        heartRateMax: 0,
        bloodPressureSystolic: 125,
        bloodPressureDiastolic: 60
    },
    astronaut2: {
        heartRate: 0,
        heartRateMax: 0,
        bloodPressureSystolic: 125,
        bloodPressureDiastolic: 60
    },
    astronaut3: {
        heartRate: 0,
        heartRateMax: 0
    },
    astronaut4: {
        heartRate: 0,
        heartRateMax: 0
    }
}

const defaultTemps = {
    astronaut1: {
        temperature: 0
    },
    astronaut2: {
        temperature: 0
    },
    astronaut3: {
        temperature: 0
    },
    astronaut4: {
        temperature: 0
    }
}


const UVitalSignsDisplay: React.FC<VSDProps> = (props) => {
    var [values, setValues] = useState(defaultValues)
    var [temps, setTemps] = useState(defaultTemps)
    const intervalRef = useRef(0);
    const tempIntervalRef = useRef(0);
    useEffect(() => {
        if (intervalRef.current !== 0) {
            clearInterval(intervalRef.current);
        }
        const id = setInterval(() => {
            var newValues = {
                astronaut1: {
                    heartRate: generateRandVal(60, 90).toFixed(0),
                    heartRateMax: 91,
                    bloodPressureSystolic: parseFloat(decreaseSystolic(values.astronaut1.bloodPressureSystolic).toFixed(2)),
                    bloodPressureDiastolic: parseFloat(increaseDiastolic(values.astronaut1.bloodPressureDiastolic).toFixed(2))
                },
                astronaut2: {
                    heartRate: generateRandVal(60, 90).toFixed(0),
                    heartRateMax: 91,
                    bloodPressureSystolic: parseFloat(decreaseSystolic(values.astronaut2.bloodPressureSystolic).toFixed(2)),
                    bloodPressureDiastolic: parseFloat(increaseDiastolic(values.astronaut2.bloodPressureDiastolic).toFixed(2))
                },
                astronaut3: {
                    heartRate: generateRandVal(60, 80).toFixed(0),
                    heartRateMax: 91
                },
                astronaut4: {
                    heartRate: generateRandVal(60, 80).toFixed(0),
                    heartRateMax: 91
                },
            }
            setValues(values = newValues);
        }, 5000);
        intervalRef.current = id;
    }, [])
    useEffect(() => {
        if (tempIntervalRef.current !== 0) {
            clearInterval(tempIntervalRef.current);
        }
        const id = setInterval(() => {
            var newTemps = {
                astronaut1: {
                    temperature: generateRandVal(36, 37.5).toFixed(1)
                },
                astronaut2: {
                    temperature: generateRandVal(36, 37.5).toFixed(1)
                },
                astronaut3: {
                    temperature: generateRandVal(36, 37.5).toFixed(1)
                },
                astronaut4: {
                    temperature: generateRandVal(36, 37.5).toFixed(1)
                },
            }
            setTemps(temps = newTemps);
        }, 300000);
        tempIntervalRef.current = id;
    }, [])

    return (

        <div className={props.className}>
            <svg preserveAspectRatio='xMidYMid meet' viewBox='0 0 1400 1000'>
                <Astronaut1 values={values} temps={temps}/>
                <Astronaut2 values={values} temps={temps}/>
                <Astronaut3 values={values} temps={temps}/>
                <Astronaut4 values={values} temps={temps}/>
            </svg>
        </div>
    );
}

export const VitalSignsDisplay = styled(UVitalSignsDisplay)`
  width: 100%;
  height: 100%;
  position: absolute;
`;

