import React from "react";
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
import { UViewEFNModal } from '../../components/console/efn/ViewEFNModal'
import { shallow, mount, render} from 'enzyme';

const reports = [];

describe("EFN Details modal popup", () => {
  it('renders correctly', () => {
    const wrapper = shallow(<UViewEFNModal show={true} closeFunction={jest.fn()} reports={reports} selectedEFN={'EFN0001'} lobbyID={'111111'}/>)
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  })
})