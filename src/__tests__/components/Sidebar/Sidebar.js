import React from "react";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
const mockStore = configureMockStore();
const store = mockStore({});

describe("<Sidebar />", () => {
  it("render Sidebar without crashing", () => {
    shallow(
      <Provider store={store}>
        <Sidebar />
      </Provider>
    );
  });
});
