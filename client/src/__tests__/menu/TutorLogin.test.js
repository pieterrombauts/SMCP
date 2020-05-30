import React from "react";
import { shallow, mount, render} from 'enzyme';
import { TutorLogin } from "../../components/menu/TutorLogin.tsx";

describe("Tutor login menu", () => {
  it("renders 'Create New Session' button", () => {
    const wrapper = mount(<TutorLogin />);
    expect(wrapper.find('#tutor-login-container').childAt(0).text()).toBe("Create New Session")
  })

  it("renders simulation code input with cancel and join buttons", () => {
    const wrapper = mount(<TutorLogin />);
    expect(wrapper.find('#tutor-login-pin-input').exists()).toBe(true)
    expect(wrapper.find('#tutor-login-join-buttons').children()).toHaveLength(2)
    expect(wrapper.find('#tutor-login-join-buttons').childAt(0).text()).toBe("Cancel")
    expect(wrapper.find('#tutor-login-join-buttons').childAt(1).text()).toBe("Join")
  })
})