import React from "react";
import LoginModal from "../../../components/LoginModal/LoginModal";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
const mockStore = configureMockStore();
const store = mockStore({});

describe("<LoginModal />", () => {
  it("render LoginModal without crashing", () => {
    shallow(
      <Provider store={store}>
        <LoginModal />
      </Provider>
    );
  });
});
