export interface ethosLifeSupportDisplay {
  tranquility: {
    pressure: number,
    temp: number,
    ppO2: number,
    ppN2: number,
    ppCO2: number
  },
  destiny: {
    pressure: number,
    temp: number,
    ppO2: number,
    ppN2: number,
    ppCO2: number
  },
  harmony: {
    pressure: number,
    coolant_temp: number
  },
  quest: {
    pressure: number,
    crewlock_pressure: number,
    EVA_O2: number,
    N2: number,
    O2: number
  }
}

export interface ethosThermalSystemDisplay
{
  destinyLab: {
    lowTLoop: number;
    moderateTLoop: number,
    lowTemp: number;
    moderateTemp: number
  },

  harmonyNode : {
    lowTLoop: number;
    moderateTLoop: number,
    lowTemp: number;
    moderateTemp: number
  }

  tranquilityNode : {
    lowTLoop: number;
    moderateTLoop: number,
    lowTemp: number;
    moderateTemp: number
  }

}

export interface ethosRegenLifeSupportDisplay {
  upa: {
    urineTankLevel: number
  }

  wpa: { 
    wastewaterTankLevel: number,
    cleanWaterTankLevel: number
  }

  oga: {
    oxygenProductionRate: number
  }
}

export interface cronusCompNetDisplay {
  compNet: {
    time: string,
    standardCmds: number,
    loadCmds: number
  },
}

export interface cronusSBandDisplay {
  sBand: {
    elevationGimbal: number,
    azimuthGimbal: number
  }

}

export interface cronusVComm1Display {
  vComms1: {
    elevationGimbal: number,
    crossElevationGimbal: number
  }
}

export interface statusReport {
  _ID: string,
  _sender: string,
  _subject: string,
  _content: string,
  _status: string,
  _time: string
}
