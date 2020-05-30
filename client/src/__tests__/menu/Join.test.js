import React from "react";
import { shallow, mount, render} from 'enzyme';
import { Join } from "../../components/Menu/Join.tsx";

describe("Join menu", () => {
  it("renders username input", () => {
    const wrapper = mount(<Join />);
    expect(wrapper.find('#username-input').type()).toBe("input")
  })

  it("renders simulation code input with cancel and join buttons", () => {
    const wrapper = mount(<Join />);
    expect(wrapper.find('#game-pin-input').exists()).toBe(true)
    expect(wrapper.find('#join-buttons').children()).toHaveLength(2)
    expect(wrapper.find('#join-buttons').childAt(0).text()).toBe("Cancel")
    expect(wrapper.find('#join-buttons').childAt(1).text()).toBe("Join")
  })
})