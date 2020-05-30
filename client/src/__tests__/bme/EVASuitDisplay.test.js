import React from "react";
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
import { UEVASuitDisplay } from '../../components/console/bme/EVASuitDisplay'
import { shallow, mount, render} from 'enzyme';

describe("EVA suit display", () => {
  it('renders correctly', () => {
    const wrapper = shallow(<UEVASuitDisplay />)
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  })
})