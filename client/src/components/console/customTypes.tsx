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
  _time: string,
  _comments: string[]
}

export interface bmeVitalSignsDisplay {
  astronaut1: {
    heartRate: number,
    heartRateMax: number,
    bloodPressureSystolic: number,
    bloodPressureDiastolic: number,
  }

  astronaut2: {
    heartRate: number,
    heartRateMax: number,
    bloodPressureSystolic: number,
    bloodPressureDiastolic: number,
  }

  astronaut3: {
    heartRate: number,
    heartRateMax: number,
  }

  astronaut4: {
    heartRate: number,
    heartRateMax: number,
  }
}

export interface bmeVitalSignsTemps {
  astronaut1: {
    temperature: number
  }

  astronaut2: {
    temperature: number
  }

  astronaut3: {
    temperature: number
  }

  astronaut4: {
    temperature: number
  }
}

export interface bmeEVASuitDisplay {
  eva1: {
    helmetPressure: number,
    o2: number,
    water: number,
    batteryCharge: number
  },

  eva2: {
    helmetPressure: number,
    o2: number,
    water: number,
    batteryCharge: number
  }
}

export interface consoleUsers {
  spartan: string[],
  cronus: string[],
  ethos: string[],
  flight: string[],
  capcom: string[],
  bme: string[]
}

export interface firstConsoleOpens {
  spartan: boolean,
  cronus: boolean,
  ethos: boolean,
  flight: boolean,
  capcom: boolean,
  bme: boolean,
  efn: boolean,
  ostpv: boolean
}

export type OptionType = {
  value: string;
  label: string;
}

export interface event {
  id: number,
  resourceId: string,
  astronaut: string,
  title: string,
  start: string,
  end: string,
  procedure: string,
  location: string,
  classNames: string[]
}

export interface selectedEvent {
  id: number,
  title: string,
  start: string,
  end: string,
  extendedProps: {
    astronaut: string,
    procedure: string,
    location: string,
  }
  classNames: string[]
}

export interface tableEntry {
  eventNum: string,
  annun: string,
  cl: string,
  ack: boolean,
  sys: string,
  message: string
}

export interface chartData {
  datasets: {
      data: {x: string, y: number}[],
      backgroundColor: string,
      borderColor: string,
      borderWidth: number,
      fill: boolean,
    }[]
}