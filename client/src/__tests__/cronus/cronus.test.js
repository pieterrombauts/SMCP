import React from "react";
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
import { Cronus } from '../../components/console/cronus/cronus'
import { shallow, mount, render} from 'enzyme';

describe("Cronus display", () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Cronus />)
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  })
})