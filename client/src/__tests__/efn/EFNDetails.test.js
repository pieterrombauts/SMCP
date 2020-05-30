import React from "react";
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
import { EFNDetails } from '../../components/console/efn/EFNDetails'
import { shallow, mount, render} from 'enzyme';

const testReports = [
  {_ID: "EFN0001", _sender: "spartan", _subject: "Test 1", _content: "This is the first test", _status: "open", _time: "2019-11-19T15:00:00", _comments: ["This is a test comment", "This is a second test comment"] },
  {_ID: "EFN0002", _sender: "cronus", _subject: "Test 2", _content: "This is the second test", _status: "open", _time: "2019-11-19T15:00:02", _comments: [] },
  {_ID: "EFN0003", _sender: "ethos", _subject: "Test 3", _content: "This is the third test", _status: "open", _time: "2019-11-19T15:00:05", _comments: [] }
]

describe("EFN details modal", () => {
  it('renders correctly', () => {
    const wrapper = shallow(<EFNDetails reports={testReports} efnID={'EFN0001'} lobbyID={'111111'} closeFunction={jest.fn()}/>)
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  })

  it('displays the right EFN details', () => {
    const wrapper = mount(<EFNDetails reports={testReports} efnID={'EFN0001'} lobbyID={'111111'} closeFunction={jest.fn()}/>)
    expect(wrapper.find('.efn-id').children('small').text()).toBe('EFN0001');
    expect(wrapper.find('.efn-header').text()).toBe('SPARTAN - Test 1');
    expect(wrapper.find('.efn-status').text()).toBe('OPEN');
    expect(wrapper.find('.efn-content').text()).toBe('This is the first test');
  })

  it('displays the right number of comments', () => {
    const wrapper = mount(<EFNDetails reports={testReports} efnID={'EFN0001'} lobbyID={'111111'} closeFunction={jest.fn()}/>)
    expect(wrapper.find('.efn-comment')).toHaveLength(2);
    expect(wrapper.find('.efn-comment').first().text()).toBe('This is a test comment');
    expect(wrapper.find('.efn-comment').last().text()).toBe('This is a second test comment');
  })

  it('renders the comment text box and button', () => {
    const wrapper = mount(<EFNDetails reports={testReports} efnID={'EFN0001'} lobbyID={'111111'} closeFunction={jest.fn()}/>)
    expect(wrapper.find('textarea')).toHaveLength(1);
    expect(wrapper.find('.efn-add-comment-btn').last().text()).toBe("Add Comment");
  })
})