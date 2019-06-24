import React from "react";
import ListBusiness from "../../../components/VendorSalesPage/ListBusiness";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
const mockStore = configureMockStore();
const store = mockStore({});

describe("<ListBusiness />", () => {
  it("render ListBusiness without crashing", () => {
    shallow(
      <Provider store={store}>
        <ListBusiness />
      </Provider>
    );
  });
});