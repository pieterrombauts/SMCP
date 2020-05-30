import React from "react";
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
import { UVitalSignsDisplay } from '../../components/console/bme/VitalSignsDisplay'
import { shallow, mount, render} from 'enzyme';

describe("Vital signs display", () => {
  it('renders correctly', () => {
    const wrapper = shallow(<UVitalSignsDisplay />)
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  })
})