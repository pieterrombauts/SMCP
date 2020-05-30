import React from "react";
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
import { USTATUSModal } from '../../components/console/efn/STATUSModal'
import { shallow, mount, render} from 'enzyme';

describe("EFN modal popup", () => {
  it('renders correctly', () => {
    const wrapper = shallow(<USTATUSModal show={true} closeFunction={jest.fn()} lobbyID={'111111'} userRole={'spartan'}/>)
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  })
})