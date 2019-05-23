import React from "react";
import DropdownMenu from "../../../components/DropdownMenu/DropdownMenu";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
const mockStore = configureMockStore();
const store = mockStore({});

describe("<DropdownMenu />", () => {
  it("render DropdownMenu without crashing", () => {
    shallow(
      <Provider store={store}>
        <DropdownMenu />
      </Provider>
    );
  });
});
