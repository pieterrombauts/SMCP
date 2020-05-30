import React from "react";
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
import { Flight } from '../components/console/flight'
import { shallow, mount, render} from 'enzyme';

const testReports = [
  {_ID: "EFN0001", _sender: "spartan", _subject: "Test 1", _content: "This is the first test", _status: "open", _time: "2019-11-19T15:00:00", _comments: ["This is a test comment", "This is a second test comment"] },
  {_ID: "EFN0002", _sender: "cronus", _subject: "Test 2", _content: "This is the second test", _status: "open", _time: "2019-11-19T15:00:02", _comments: [] },
  {_ID: "EFN0003", _sender: "ethos", _subject: "Test 3", _content: "This is the third test", _status: "open", _time: "2019-11-19T15:00:05", _comments: [] }
]

describe("Spartan External Thermal display", () => {
  it('renders correctly', () => {
    const wrapper = mount(<Flight reports={testReports} handleView={jest.fn()}/>)
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  })
})