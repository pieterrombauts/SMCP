import React from "react";
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
import { Spartan } from '../../components/console/spartan/spartan'
import { shallow, mount, render} from 'enzyme';

describe("Spartan display", () => {
  it('renders correctly', () => {
    const wrapper = mount(<Spartan />)
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  })
})