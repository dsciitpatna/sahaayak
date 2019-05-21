import React from "react";
import UserDashboard from "../../../components/UserDashboard/UserDashboard";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
const mockStore = configureMockStore();
const store = mockStore({});

describe("<UserDashboard />", () => {
  it("render UserDashboard without crashing", () => {
    shallow(
      <Provider store={store}>
        <UserDashboard />
      </Provider>
    );
  });
});
