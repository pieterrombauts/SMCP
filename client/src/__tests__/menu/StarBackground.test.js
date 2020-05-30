import React from "react";
import { shallow, mount, render} from 'enzyme';
import { StarBackground } from "../../components/StarBackground";

describe("Star background", () => {
  it("renders small stars", () => {
    const wrapper = mount(<StarBackground />);
    expect(wrapper.exists('#stars1')).toBe(true);
  })
  it("renders medium stars", () => {
    const wrapper = mount(<StarBackground />);
    expect(wrapper.exists('#stars2')).toBe(true);
  })
  it("renders big stars", () => {
    const wrapper = mount(<StarBackground />);
    expect(wrapper.exists('#stars3')).toBe(true);
  })
})