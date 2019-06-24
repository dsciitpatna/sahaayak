import React from "react";
import Contact from "../../../components/VendorSalesPage/Contact";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
const mockStore = configureMockStore();
const store = mockStore({});

describe("<Contact />", () => {
  it("render Contact without crashing", () => {
    shallow(
      <Provider store={store}>
        <Contact />
      </Provider>
    );
  });
});