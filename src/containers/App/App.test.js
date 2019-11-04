import React from "react";
import { shallow } from "enzyme";
import { App } from "./App";

describe("<App />", () => {

  it("renders App correctly", () => {
    const wrapper = shallow(<App data={[]} save={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
