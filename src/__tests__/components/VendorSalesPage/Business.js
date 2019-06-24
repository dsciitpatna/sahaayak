import React from "react";
import Business from "../../../components/VendorSalesPage/Business";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
const mockStore = configureMockStore();
const store = mockStore({});

describe("<Business />", () => {
  it("render Business without crashing", () => {
    shallow(
      <Provider store={store}>
        <Business />
      </Provider>
    );
  });
});