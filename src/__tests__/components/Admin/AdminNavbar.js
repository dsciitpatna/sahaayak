import React from "react";
import AdminNavbar from "../../../components/Admin/AdminNavbar";
import { shallow } from "enzyme";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
const mockStore = configureMockStore();
const store = mockStore({});

describe("<AdminNavbar />", () => {
  it("render AdminNavbar without crashing", () => {
    shallow(
      <Provider store={store}>
        <AdminNavbar />
      </Provider>
    );
  });
});
