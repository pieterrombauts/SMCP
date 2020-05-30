import React from 'react';
import { ethosThermalSystemDisplay } from '../customTypes'

interface TranquilityNodeProps {
    values: ethosThermalSystemDisplay;
};

const TranquilityNode: React.FC<TranquilityNodeProps> = (props) => {
    return (
        <g id="ethos-thermal-system-display-density-lab">
            <text x="5%" y="93%" fill="white" fontSize="20" fontFamily="Verdana">Tranquility Node</text>
            <text x="27.25%" y="93%" fill="#d6ab62" fontSize="20" fontFamily="Verdana">{props.values.tranquilityNode.lowTLoop}</text>
            <text x="48.25%" y="93%" fill="#d6ab62" fontSize="20" fontFamily="Verdana">{props.values.tranquilityNode.moderateTLoop}</text>
            <text x="67.5%" y="93%" fill="#d6ab62" fontSize="20" fontFamily="Verdana">{props.values.tranquilityNode.lowTemp}</text>
            <text x="83%" y="93%" fill="#d6ab62" fontSize="20" fontFamily="Verdana">{props.values.tranquilityNode.moderateTemp}</text>
        </g>
    )
};

export default TranquilityNode;
