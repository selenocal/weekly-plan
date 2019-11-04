import React, { Component } from "react";
import ReactApexChart from "react-apexcharts";
import styled from "styled-components";
import PropTypes from "prop-types";

class DataResult extends Component {
  render() {
    const durationList = this.props.data.map(value => value.duration);
    let validDurationList = durationList.map(duration => duration % 24);
    validDurationList = validDurationList.filter(duration => duration !== 0)
      .map(duration => duration / 24);
    let minDuration = Math.min(...validDurationList);
    minDuration = minDuration <= 0.25 ? 0.25 : (Math.ceil(minDuration / 0.25)*0.25);
    const xValues = [];
    for (let i = 0; i <= 7; i += minDuration) {
      xValues.push(i);
    }

    const seriesList = [];
    for (let j = 0; j < 5; j++) {
      const machineValues = [];
      const data = this.props.data;
      const startIndex = data[j].startDate / minDuration;
      const durationLength = Math.ceil(data[j].duration / 24 / minDuration);
      const endIndex = startIndex + durationLength;
      for (let k = 0; k < xValues.length; k++) {
        if (k >= startIndex && k <= endIndex) {
          machineValues.push(j + 1);
        } else {
          machineValues.push(null);
        }
      }
      const seriesObj = {
        name: data[j].service + "(" + data[j].engineerCount + "people)",
        data: machineValues
      };
      seriesList.push(seriesObj);
    }

    let chart = {
      options: {
        chart: {
          shadow: {
            enabled: true,
            color: "#000",
            top: 18,
            left: 7,
            blur: 10,
            opacity: 1
          },
          toolbar: {
            show: false
          }
        },
        colors: ["#77B6EA", "#FF7F50", "#8A2BE2", "#DC143C", "#228B22"],
        dataLabels: {
          enabled: true
        },
        stroke: {
          curve: "smooth"
        },
        title: {
          text: "Weekly Plan",
          align: "left"
        },
        grid: {
          borderColor: "#e7e7e7",
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 1
          }
        },
        markers: {
          size: 0
        },
        xaxis: {
          min: 0,
          max: 10,
          categories: xValues,
          title: {
            text: "Days"
          }
        },
        yaxis: {
          title: {
            text: "Machines"
          },
          categories: [1, 2, 3, 4, 5],
          min: 0,
          max: 5
        }
      },
      series: seriesList
    };
    return (
      <ChartDiv>
        <ReactApexChart
          options={chart.options}
          series={chart.series}
          type="line"
          height="350"
          width="500"
        />
      </ChartDiv>
    );
  }
}

DataResult.propTypes = {
  data: PropTypes.array.isRequired
};

const ChartDiv = styled.div`
  display: flex;
  justify-content: center;
`;
export default DataResult;
