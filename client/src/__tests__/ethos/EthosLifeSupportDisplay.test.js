import React from "react";
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
import EthosLifeSupportDisplay from '../../components/console/ethos/EthosLifeSupportDisplay'
import { shallow, mount, render} from 'enzyme';

describe("Ethos Life Support display", () => {
  it('renders correctly', () => {
    const wrapper = mount(<EthosLifeSupportDisplay/>)
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  })
})