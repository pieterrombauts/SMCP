import React from "react";
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
import { Astronaut2 } from '../../components/console/bme/Astronaut2'
import { shallow, mount, render} from 'enzyme';

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

describe("Astronaut2 display", () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Astronaut2 values={defaultValues} temps={defaultTemps} />)
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  })
})