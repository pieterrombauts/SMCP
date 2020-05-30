import React from "react";
import { shallow, mount, render} from 'enzyme';
import { Home } from "../../components/Menu/Home.tsx";

describe("Home menu", () => {
  it("renders two buttons with correct text", () => {
    const wrapper = mount(<Home />);
    expect(wrapper.find('#home-buttons').children()).toHaveLength(2);
    expect(wrapper.find('#home-buttons').childAt(0).text()).toBe("Tutor Login")
    expect(wrapper.find('#home-buttons').childAt(1).text()).toBe("Student Login")
  })
})