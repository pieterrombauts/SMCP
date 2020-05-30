import React from "react";
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
import CronusUHFCommsDisplay from '../../components/console/cronus/CronusUHFCommsDisplay'
import { shallow, mount, render} from 'enzyme';

const defaultValues = {
  sBand: {
    elevationGimbal: 60,
    azimuthGimbal: 2
  }
}

describe("Cronus UHF communications display", () => {
  it('renders correctly', () => {
    const wrapper = mount(<CronusUHFCommsDisplay values={defaultValues} />)
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  })
})