import React from "react";
import { shallow, mount, render} from 'enzyme';
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux';
import Lobby from "../../components/Menu/Lobby.tsx";
import rootReducer from "../../reducers/index.ts";

const initialState = { 
  menuAnimationReducer: {
    home: 'hide',
    join: 'show',
  },
  lobbyPositionsReducer: {
    consoles: {
      spartan: 0,
      cronus: 0,
      ethos: 0,
      flight: 0,
      capcom: 0,
      bme: 0
    },
    lobbyID: '111111',
    userRole: ''
  }
};
const mockStore = configureMockStore({
  reducer: rootReducer,
});

describe("Join menu", () => {
  it("renders correct simulation code", () => {
    const wrapper = mount(<Provider store={mockStore(initialState)}><Lobby /></Provider>);
    expect(wrapper.find('#game-pin-display').text()).toBe("Simulator Code: " + initialState.lobbyPositionsReducer.lobbyID)
  })

  it("renders six console buttons", () => {
    const wrapper = mount(<Provider store={mockStore(initialState)}><Lobby /></Provider>);
    expect(wrapper.find('.console-row').at(2).children()).toHaveLength(3)
    expect(wrapper.find('.console-row').at(2).childAt(0).text()).toBe("SPARTAN")
    expect(wrapper.find('.console-row').at(2).childAt(1).text()).toBe("CRONUS")
    expect(wrapper.find('.console-row').at(2).childAt(2).text()).toBe("ETHOS")
    expect(wrapper.find('.console-row').at(3).children()).toHaveLength(3)
    expect(wrapper.find('.console-row').at(3).childAt(0).text()).toBe("FLIGHT")
    expect(wrapper.find('.console-row').at(3).childAt(1).text()).toBe("CAPCOM")
    expect(wrapper.find('.console-row').at(3).childAt(2).text()).toBe("BME")
  })

  it("renders 'Cancel' button", () => {
    const wrapper = mount(<Provider store={mockStore(initialState)}><Lobby /></Provider>);
    expect(wrapper.find('.cancel-btn').last().name()).toBe("button")
    expect(wrapper.find('.cancel-btn').last().text()).toBe("Cancel")
  })

  it("renders 'GO FOR LAUNCH' button for host", () => {
    const testState = {...initialState, lobbyPositionsReducer: {...initialState.lobbyPositionsReducer, userRole: 'display' }}
    const wrapper = mount(<Provider store={mockStore(testState)}><Lobby /></Provider>);
    expect(wrapper.find('.launch-btn').last().name()).toBe("button")
    expect(wrapper.find('.launch-btn').last().text()).toBe("GO FOR LAUNCH")
  })

  it("doesn't render 'GO FOR LAUNCH' button for tutor", () => {
    const testState = {...initialState, lobbyPositionsReducer: {...initialState.lobbyPositionsReducer, userRole: 'tutor' }}
    const wrapper = mount(<Provider store={mockStore(testState)}><Lobby /></Provider>);
    expect(wrapper.find('.launch-btn')).toHaveLength(0)
  })

  it("doesn't render 'GO FOR LAUNCH' button for newly joined students", () => {
    const wrapper = mount(<Provider store={mockStore(initialState)}><Lobby /></Provider>);
    expect(wrapper.find('.launch-btn')).toHaveLength(0)
  })

  it("doesn't render 'GO FOR LAUNCH' button for SPARTAN", () => {
    const testState = {...initialState, lobbyPositionsReducer: {...initialState.lobbyPositionsReducer, userRole: 'spartan' }}
    const wrapper = mount(<Provider store={mockStore(testState)}><Lobby /></Provider>);
    expect(wrapper.find('.launch-btn')).toHaveLength(0)
  })

  it("doesn't render 'GO FOR LAUNCH' button for CRONUS", () => {
    const testState = {...initialState, lobbyPositionsReducer: {...initialState.lobbyPositionsReducer, userRole: 'cronus' }}
    const wrapper = mount(<Provider store={mockStore(testState)}><Lobby /></Provider>);
    expect(wrapper.find('.launch-btn')).toHaveLength(0)
  })

  it("doesn't render 'GO FOR LAUNCH' button for ETHOS", () => {
    const testState = {...initialState, lobbyPositionsReducer: {...initialState.lobbyPositionsReducer, userRole: 'ethos' }}
    const wrapper = mount(<Provider store={mockStore(testState)}><Lobby /></Provider>);
    expect(wrapper.find('.launch-btn')).toHaveLength(0)
  })

  it("doesn't render 'GO FOR LAUNCH' button for FLIGHT", () => {
    const testState = {...initialState, lobbyPositionsReducer: {...initialState.lobbyPositionsReducer, userRole: 'flight' }}
    const wrapper = mount(<Provider store={mockStore(testState)}><Lobby /></Provider>);
    expect(wrapper.find('.launch-btn')).toHaveLength(0)
  })

  it("doesn't render 'GO FOR LAUNCH' button for CAPCOM", () => {
    const testState = {...initialState, lobbyPositionsReducer: {...initialState.lobbyPositionsReducer, userRole: 'capcom' }}
    const wrapper = mount(<Provider store={mockStore(testState)}><Lobby /></Provider>);
    expect(wrapper.find('.launch-btn')).toHaveLength(0)
  })

  it("doesn't render 'GO FOR LAUNCH' button for BME", () => {
    const testState = {...initialState, lobbyPositionsReducer: {...initialState.lobbyPositionsReducer, userRole: 'bme' }}
    const wrapper = mount(<Provider store={mockStore(testState)}><Lobby /></Provider>);
    expect(wrapper.find('.launch-btn')).toHaveLength(0)
  })
})