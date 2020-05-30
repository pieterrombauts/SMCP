import React from "react";
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
import EVA1 from '../../components/console/bme/EVA1'
import { shallow, mount, render} from 'enzyme';

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

describe("EVA1 display", () => {
  it('renders correctly', () => {
    const wrapper = shallow(<EVA1 values={defaultValues} />)
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  })
})