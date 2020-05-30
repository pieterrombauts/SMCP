import React from "react";
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
import { Tutor } from '../../components/console/tutor/Tutor'
import { shallow, mount, render} from 'enzyme';

describe("Tutor display", () => {
  it('renders correctly', () => {
    const wrapper = mount(<Tutor roomID={'111111'}/>)
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  })
})