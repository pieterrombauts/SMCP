import React from "react";
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
import CronusCompNetDisplay from '../../components/console/cronus/CronusCompNetDisplay'
import { shallow, mount, render} from 'enzyme';

const defaultValues = {
  compNet: {
    time: '',
    standardCmds: 10466,
    loadCmds: 11248
  }
}

describe("Cronus computer and network display", () => {
  it('renders correctly', () => {
    const wrapper = mount(<CronusCompNetDisplay values={defaultValues} time={'2019-11-19T15:00:00'} />)
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  })
})