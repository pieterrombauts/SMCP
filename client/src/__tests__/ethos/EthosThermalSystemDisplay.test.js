import React from "react";
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
import EthosThermalSystemDisplay from '../../components/console/ethos/EthosThermalSystemDisplay'
import { shallow, mount, render} from 'enzyme';

describe("Ethos Thermal System display", () => {
  it('renders correctly', () => {
    const wrapper = mount(<EthosThermalSystemDisplay />)
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  })
})