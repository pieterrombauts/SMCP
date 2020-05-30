import React from "react";
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
import { UCapcom } from '../../components/console/capcom/capcom'
import { shallow, mount, render} from 'enzyme';

describe("Capcom display", () => {
  it('renders correctly', () => {
    const wrapper = shallow(<UCapcom />)
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  })
})