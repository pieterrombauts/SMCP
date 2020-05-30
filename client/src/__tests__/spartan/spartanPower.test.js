import React from "react";
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
import { SpartanPower } from '../../components/console/spartan/spartanPower'
import { shallow, mount, render} from 'enzyme';

describe("Spartan Power display", () => {
  it('renders correctly', () => {
    const wrapper = mount(<SpartanPower />)
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  })
})