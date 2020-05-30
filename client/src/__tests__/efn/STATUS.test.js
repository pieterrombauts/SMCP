import React from "react";
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
import { ConSTATUS } from '../../components/console/efn/STATUS'
import { shallow, mount, render} from 'enzyme';

describe("EFN form", () => {
  it('renders correctly', () => {
    const wrapper = mount(<ConSTATUS lobbyID={'111111'} userRole={'spartan'} closeFunction={jest.fn()}/>)
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  })
})