import reducer from "./serviceReducer";
import * as actionTypes from "../actions/actionTypes";

describe("JobReducer", () => {
  const serviceData = [
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

  it("expects SAVE_SERVICE_DATA works correctly", () => {
    expect(
      reducer(undefined, {
        type: actionTypes.SAVE_SERVICE_DATA,
        data: serviceData
      })
    ).toEqual({
      data: serviceData
    });
  });
});
