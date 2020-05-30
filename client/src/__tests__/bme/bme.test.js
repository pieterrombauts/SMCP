import React from "react";
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
import { UBme } from '../../components/console/bme/bme'
import { shallow, mount, render} from 'enzyme';

describe("Spartan External Thermal display", () => {
  it('renders correctly', () => {
    const wrapper = shallow(<UBme />)
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  })
})