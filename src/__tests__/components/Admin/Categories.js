import React from "react";
import Categories from "../../../components/Admin/Categories";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
const mockStore = configureMockStore();
const store = mockStore({});

describe("<Categories />", () => {
  it("render Categories without crashing", () => {
    shallow(
      <Provider store={store}>
        <Categories />
      </Provider>
    );
  });
});
