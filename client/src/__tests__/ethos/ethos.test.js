import React from "react";
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
import { Ethos } from '../../components/console/ethos/ethos'
import { shallow, mount, render} from 'enzyme';

describe("Ethos display", () => {
  it('renders correctly', () => {
    const wrapper = mount(<Ethos />)
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  })
})