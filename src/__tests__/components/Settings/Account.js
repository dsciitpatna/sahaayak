import React from "react";
import Account from "../../../components/Settings/Account";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
const mockStore = configureMockStore();
const store = mockStore({});

describe("<Account />", () => {
  it("render Account without crashing", () => {
    shallow(
      <Provider store={store}>
        <Account />
      </Provider>
    );
  });
});
