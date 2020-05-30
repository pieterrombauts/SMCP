import React from "react";
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
import CronusVidComm1Display from '../../components/console/cronus/CronusVidComm1Display'
import { shallow, mount, render} from 'enzyme';

const defaultValues = {
  vComms1: {
    elevationGimbal: 48,
    crossElevationGimbal: 45
  }
}

describe("Cronus UHF communications display", () => {
  it('renders correctly', () => {
    const wrapper = mount(<CronusVidComm1Display values={defaultValues} />)
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  })
})