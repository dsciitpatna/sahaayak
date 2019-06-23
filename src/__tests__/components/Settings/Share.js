import React from "react";
import Share from "../../../components/Settings/Share";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
const mockStore = configureMockStore();
const store = mockStore({});

describe("<Share />", () => {
  it("render Share without crashing", () => {
    shallow(
      <Provider store={store}>
        <Share />
      </Provider>
    );
  });
});