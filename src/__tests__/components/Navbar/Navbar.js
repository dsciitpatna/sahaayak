import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
const mockStore = configureMockStore();
const store = mockStore({});

describe("<Navbar />", () => {
  it("render Navbar without crashing", () => {
    shallow(
      <Provider store={store}>
        <Navbar />
      </Provider>
    );
  });
});
