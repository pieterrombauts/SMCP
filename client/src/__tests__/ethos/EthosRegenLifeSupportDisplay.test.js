import React from "react";
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
import EthosRegenLifeSupportDisplay from '../../components/console/ethos/EthosRegenLifeSupportDisplay'
import { shallow, mount, render} from 'enzyme';

describe("Ethos Regen Life Support display", () => {
  it('renders correctly', () => {
    const wrapper = mount(<EthosRegenLifeSupportDisplay />)
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  })
})