import React from "react";
import 'jest-styled-components'
import toJson from 'enzyme-to-json'
import { OSTPVEventDetail } from '../../components/console/ostpv/OSTPVEventDetail'
import { shallow, mount, render} from 'enzyme';

const testEvent = {
  extendedProps: { astronaut: "ISS CDR" },
  id: 236,
  title: "● POST EVA",
  start: "2019-11-16T15:10:00",
  end: "2019-11-16T16:30:00",
  classNames: ["sequenced1"]
}

describe("OSTPV Event Details", () => {
  it('renders correctly', () => {
    const wrapper = mount(<OSTPVEventDetail event={testEvent} lobbyID={'111111'} closeFunction={jest.fn()}/>)
    const tree = toJson(wrapper);
    expect(tree).toMatchSnapshot();
  })
})