import React from "react";
import { shallow } from "enzyme";
import Calculator from "./Calculator";

describe("<Calculator />", () => {

  const data = [
    {
      service: "A",
      machine: "1",
      startDate: "1",
      duration: "12",
      engineerCount: "2"
    },
    {
      service: "B",
      machine: "2",
      startDate: "2",
      duration: "24",
      engineerCount: "3"
    },
    {
      service: "C",
      machine: "3",
      startDate: "3",
      duration: "36",
      engineerCount: "2"
    },
    {
      service: "D",
      machine: "1",
      startDate: "4",
      duration: "48",
      engineerCount: "5"
    },
    {
      service: "E",
      machine: "2",
      startDate: "5",
      duration: "12",
      engineerCount: "4"
    }
  ];

  it("renders Calculator correctly", () => {
    const wrapper = shallow(<Calculator  data={data}/>);

    expect(wrapper).toMatchSnapshot();
  });
});
