import React from "react";
import Password from "../../../components/Settings/Password";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
const mockStore = configureMockStore();
const store = mockStore({});

describe("<Password />", () => {
  it("render Password without crashing", () => {
    shallow(
      <Provider store={store}>
        <Password />
      </Provider>
    );
  });
});