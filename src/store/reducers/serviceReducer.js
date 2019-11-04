import * as actionTypes from "../actions/actionTypes";

const initialState = {
  data: [
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
  ]
};

const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SAVE_SERVICE_DATA:
      const serviceData = [...state.data];
      const index = serviceData.findIndex(
        item => item.service === action.data.service
      );
      if (index !== -1) {
        serviceData[index] = action.data;
      }
      return { ...state, data: serviceData };
    default:
      return state;
  }
};

export default serviceReducer;
