import React from "react";
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
import CronusVidComm2Display from '../../components/console/cronus/CronusVidComm2Display'
import { shallow, mount, render} from 'enzyme';

describe("Cronus UHF communications display", () => {
  it('renders correctly', () => {
    const wrapper = mount(<CronusVidComm2Display />)
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  })
})