import React from "react";
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
import { SpartanExtThermal } from '../../components/console/spartan/spartanExtThermal'
import { shallow, mount, render} from 'enzyme';

describe("Spartan External Thermal display", () => {
  it('renders correctly', () => {
    const wrapper = mount(<SpartanExtThermal />)
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  })
})