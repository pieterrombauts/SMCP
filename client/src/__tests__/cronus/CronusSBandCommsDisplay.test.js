import React from "react";
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
import CronusSBandCommsDisplay from '../../components/console/cronus/CronusSBandCommsDisplay'
import { shallow, mount, render} from 'enzyme';

const defaultValues = {
  sBand: {
    elevationGimbal: 60,
    azimuthGimbal: 2
  }
}

describe("Cronus S-Band communications display", () => {
  it('renders correctly', () => {
    const wrapper = mount(<CronusSBandCommsDisplay values={defaultValues} />)
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  })
})