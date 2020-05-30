import React from "react";
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
import { OSTPVModal } from '../../components/console/ostpv/OSTPVModal'
import { shallow, mount, render} from 'enzyme';

describe("OSTPV modal", () => {
  it('renders correctly', () => {
    const wrapper = mount(<OSTPVModal lobbyID={'111111'} show="true" closeFunction={jest.fn()}/>)
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  })
})