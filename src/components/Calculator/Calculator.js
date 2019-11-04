import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

class Calculator extends Component {
  state = {
    selectedDay: 1
  };

  selectDay = value => {
    this.setState({
      selectedDay: value
    });
  };

  render() {
    const days = [1, 2, 3, 4, 5, 6, 7];
    const dayRecords = {};
    this.props.data.forEach(item => {
      const durationDay = Math.ceil(parseInt(item.duration, 10) / 24);
      for (let i = 1; i <= durationDay; i++) {
        const curDate = parseInt(item.startDate, 10) + i - 1;
        if (typeof dayRecords[curDate] === "undefined") {
          dayRecords[curDate] = parseInt(item.engineerCount, 10);
        } else {
          dayRecords[curDate] += parseInt(item.engineerCount, 10);
        }
      }
    });

    return (
      <div>
        <div>
          <TitleText>Day:</TitleText>
          <Select
            value={this.state.selectedDay}
            onChange={e => this.selectDay(e.target.value)}
          >
            {days.map(day => (
              <option key={day} value={day}>
                {day}
              </option>
            ))}
          </Select>
        </div>
        <div>
          <TitleText>Total Engineers:</TitleText>{" "}
          {dayRecords[this.state.selectedDay]}
        </div>
      </div>
    );
  }
}

Calculator.propTypes = {
  data: PropTypes.array.isRequired
};

const TitleText = styled.span`
  margin-right: 10px;
`;

const Select = styled.select`
  width: 90px;
`;

export default Calculator;
