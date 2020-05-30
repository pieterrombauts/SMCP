import React from "react";
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
import { OSTPV } from '../../components/console/ostpv/OSTPV'
import { shallow, mount, render} from 'enzyme';

describe("OSTPV timeline viewer", () => {
  it('renders correctly', () => {
    const wrapper = mount(<OSTPV lobbyID={'111111'}/>)
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  })
})