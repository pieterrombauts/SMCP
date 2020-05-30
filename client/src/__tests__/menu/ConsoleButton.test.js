import React from "react";
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { shallow, mount, render} from 'enzyme';
import { ConsoleButton as UnconnectedConsoleButton } from "../../components/menu/ConsoleButton";
import ConsoleButton from '../../components/menu/ConsoleButton'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import rootReducer from "../../reducers/index.ts";

const initialState = { 
  lobbyPositionsReducer: {
    lobbyID: '111111',
    userRole: ''
  }
};
const mockStore = configureMockStore({
  reducer: rootReducer,
});

describe("Console button", () => {
  it("renders for different consoles", () => {
    var wrapper = mount(<UnconnectedConsoleButton console={"spartan"} count={0} />);
    expect(wrapper.text()).toBe("SPARTAN")
    expect(wrapper.find('button').hasClass('btn-outline-light')).toBe(true)

    wrapper = mount(<UnconnectedConsoleButton console={"cronus"} count={0} />);
    expect(wrapper.text()).toBe("CRONUS")
    expect(wrapper.find('button').hasClass('btn-outline-light')).toBe(true)

    wrapper = mount(<UnconnectedConsoleButton console={"ethos"} count={0} />);
    expect(wrapper.text()).toBe("ETHOS")
    expect(wrapper.find('button').hasClass('btn-outline-light')).toBe(true)

    wrapper = mount(<UnconnectedConsoleButton console={"flight"} count={0} />);
    expect(wrapper.text()).toBe("FLIGHT")
    expect(wrapper.find('button').hasClass('btn-outline-light')).toBe(true)

    wrapper = mount(<UnconnectedConsoleButton console={"capcom"} count={0} />);
    expect(wrapper.text()).toBe("CAPCOM")
    expect(wrapper.find('button').hasClass('btn-outline-light')).toBe(true)

    wrapper = mount(<UnconnectedConsoleButton console={"bme"} count={0} />);
    expect(wrapper.text()).toBe("BME")
    expect(wrapper.find('button').hasClass('btn-outline-light')).toBe(true)
  })

  it("changes style when one person assigned", () => {
    var wrapper = mount(<UnconnectedConsoleButton console={"spartan"} count={1} />);
    expect(wrapper.text()).toBe("SPARTAN")
    expect(wrapper.find('button').hasClass('takenOne')).toBe(true)
    expect(wrapper.find('button').is('[disabled]')).toBe(true)

    wrapper = mount(<UnconnectedConsoleButton console={"cronus"} count={1} />);
    expect(wrapper.text()).toBe("CRONUS")
    expect(wrapper.find('button').hasClass('takenOne')).toBe(true)
    expect(wrapper.find('button').is('[disabled]')).toBe(true)

    wrapper = mount(<UnconnectedConsoleButton console={"ethos"} count={1} />);
    expect(wrapper.text()).toBe("ETHOS")
    expect(wrapper.find('button').hasClass('takenOne')).toBe(true)
    expect(wrapper.find('button').is('[disabled]')).toBe(true)

    wrapper = mount(<UnconnectedConsoleButton console={"flight"} count={1} />);
    expect(wrapper.text()).toBe("FLIGHT")
    expect(wrapper.find('button').hasClass('takenOne')).toBe(true)
    expect(wrapper.find('button').is('[disabled]')).toBe(true)

    wrapper = mount(<UnconnectedConsoleButton console={"capcom"} count={1} />);
    expect(wrapper.text()).toBe("CAPCOM")
    expect(wrapper.find('button').hasClass('takenOne')).toBe(true)
    expect(wrapper.find('button').is('[disabled]')).toBe(true)

    wrapper = mount(<UnconnectedConsoleButton console={"bme"} count={1} />);
    expect(wrapper.text()).toBe("BME")
    expect(wrapper.find('button').hasClass('takenOne')).toBe(true)
    expect(wrapper.find('button').is('[disabled]')).toBe(true)
  })

  it("changes style when two people assigned", () => {
    var wrapper = mount(<UnconnectedConsoleButton console={"spartan"} count={1} />);
    expect(wrapper.text()).toBe("SPARTAN")
    expect(wrapper.find('button').hasClass('btn-light')).toBe(true)
    expect(wrapper.find('button').is('[disabled]')).toBe(true)

    wrapper = mount(<UnconnectedConsoleButton console={"cronus"} count={1} />);
    expect(wrapper.text()).toBe("CRONUS")
    expect(wrapper.find('button').hasClass('btn-light')).toBe(true)
    expect(wrapper.find('button').is('[disabled]')).toBe(true)

    wrapper = mount(<UnconnectedConsoleButton console={"ethos"} count={1} />);
    expect(wrapper.text()).toBe("ETHOS")
    expect(wrapper.find('button').hasClass('btn-light')).toBe(true)
    expect(wrapper.find('button').is('[disabled]')).toBe(true)

    wrapper = mount(<UnconnectedConsoleButton console={"flight"} count={1} />);
    expect(wrapper.text()).toBe("FLIGHT")
    expect(wrapper.find('button').hasClass('btn-light')).toBe(true)
    expect(wrapper.find('button').is('[disabled]')).toBe(true)

    wrapper = mount(<UnconnectedConsoleButton console={"capcom"} count={1} />);
    expect(wrapper.text()).toBe("CAPCOM")
    expect(wrapper.find('button').hasClass('btn-light')).toBe(true)
    expect(wrapper.find('button').is('[disabled]')).toBe(true)

    wrapper = mount(<UnconnectedConsoleButton console={"bme"} count={1} />);
    expect(wrapper.text()).toBe("BME")
    expect(wrapper.find('button').hasClass('btn-light')).toBe(true)
    expect(wrapper.find('button').is('[disabled]')).toBe(true)
  })

  it("renders button as disabled for host", () => {
    const testState = {...initialState, userRole: 'display'}
    const wrapper = mount(<Provider store={mockStore(testState)}><ConsoleButton console={"spartan"} count={0} /></Provider>);
    expect(wrapper.find('button').is('[disabled]')).toBe(true)
  })

  it("renders button as disabled for tutor", () => {
    const testState = {...initialState, userRole: 'tutor'}
    const wrapper = mount(<Provider store={mockStore(testState)}><ConsoleButton console={"spartan"} count={0} /></Provider>);
    expect(wrapper.find('button').is('[disabled]')).toBe(true)
  })
})