import React from "react";
import VendorDashboard from "../../../components/VendorDashboard/VendorDashboard";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
const mockStore = configureMockStore();
const store = mockStore({});

describe("<VendorDashboard />", () => {
  it("render VendorDashboard without crashing", () => {
    shallow(
      <Provider store={store}>
        <VendorDashboard />
      </Provider>
    );
  });
});
