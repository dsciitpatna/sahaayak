import React from "react";
import VendorSalesPage from "../../../components/VendorSalesPage/VendorSalesPage";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
const mockStore = configureMockStore();
const store = mockStore({});

describe("<VendorSalesPage />", () => {
  it("render VendorSalesPage without crashing", () => {
    shallow(
      <Provider store={store}>
        <VendorSalesPage />
      </Provider>
    );
  });
});
