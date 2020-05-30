import React from "react";
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
import { UConsole } from '../components/console/console'
import { shallow, mount, render} from 'enzyme';

describe("Overall console display", () => {
  it('renders correctly', () => {
    const wrapper = shallow(<UConsole />)
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  })
})