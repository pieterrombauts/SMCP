import React from "react";
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
import ButtonsDisplay from '../../components/console/capcom/ButtonsDisplay'
import { shallow, mount, render} from 'enzyme';

describe("Buttons display display", () => {
  it('renders correctly', () => {
    const wrapper = mount(<ButtonsDisplay time={'2019-11-19T15:00:00'} />)
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  })
})