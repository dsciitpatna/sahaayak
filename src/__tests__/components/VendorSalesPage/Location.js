import React from "react";
import Location from "../../../components/VendorSalesPage/Location";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
const mockStore = configureMockStore();
const store = mockStore({});

describe("<Location />", () => {
  it("render Location without crashing", () => {
    shallow(
      <Provider store={store}>
        <Location />
      </Provider>
    );
  });
});