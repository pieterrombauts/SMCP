import React from "react";
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
import { WarningSummary } from '../../components/console/capcom/WarningSummary'
import { shallow, mount, render} from 'enzyme';

describe("Warning summary display", () => {
  it('renders correctly', () => {
    const wrapper = mount(<WarningSummary />)
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  })
})