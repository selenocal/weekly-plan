import React from "react";
import { shallow } from "enzyme";
import DataTable from "./DataTable";

describe("<DataTable />", () => {

  it("renders DataTable correctly", () => {
    const wrapper = shallow(<DataTable data={[]} save={() => {}}/>);

    expect(wrapper).toMatchSnapshot();
  });
});
