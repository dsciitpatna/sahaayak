import React from "react";
import RegisterModal from "../../../components/RegisterModal/RegisterModal";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
const mockStore = configureMockStore();
const store = mockStore({});

describe("<RegisterModal />", () => {
  it("render RegisterModal without crashing", () => {
    shallow(
      <Provider store={store}>
        <RegisterModal />
      </Provider>
    );
  });
});
