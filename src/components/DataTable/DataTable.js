import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      editMode: [false, false, false, false, false]
    };
  }

  editAction = index => {
    const { editMode } = this.state;
    editMode[index] = true;
    this.setState({
      editMode
    });
  };

  saveAction = index => {
    const { editMode } = this.state;
    editMode[index] = false;
    this.setState(
      {
        editMode
      },
      () => {
        this.props.save(this.state.data[index]);
      }
    );
  };

  handleChange = (index, key, value) => {
    const list = [...this.state.data];
    list[index][key] = value;
    this.setState({ data: list });
  };

  render() {
    const { data, editMode } = this.state;
    return (
      <Wrapper>
        <TableContainer>
          {data.length > 0 ? (
            <Table>
              <thead>
                <tr>
                  <th>Service Action</th>
                  <th>Machine</th>
                  <th>Start date</th>
                  <th>Duration</th>
                  <th>Engineers</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={item.service}>
                    <td>{item.service}</td>
                    <td>{item.machine}</td>
                    <td>
                      {editMode[index] ? (
                        <Input
                          type="number"
                          max={7}
                          value={data[index].startDate}
                          onChange={e =>
                            this.handleChange(
                              index,
                              "startDate",
                              e.target.value
                            )
                          }
                        />
                      ) : (
                        `Day ${item.startDate}`
                      )}
                    </td>
                    <td>
                      {editMode[index] ? (
                        <Input
                          type="number"
                          value={data[index].duration}
                          onChange={e =>
                            this.handleChange(index, "duration", e.target.value)
                          }
                        />
                      ) : (
                        `${item.duration} hrs`
                      )}
                    </td>
                    <td>
                      {editMode[index] ? (
                        <Input
                          type="number"
                          value={data[index].engineerCount}
                          onChange={e =>
                            this.handleChange(
                              index,
                              "engineerCount",
                              e.target.value
                            )
                          }
                        />
                      ) : (
                        item.engineerCount
                      )}
                    </td>
                    <td>
                      {!editMode[index] ? (
                        <Button onClick={() => this.editAction(index)}>
                          Edit
                        </Button>
                      ) : (
                        <Button onClick={() => this.saveAction(index)}>
                          Save
                        </Button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          ) : (
            <WarningText>No results</WarningText>
          )}
        </TableContainer>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid #c7c8c8;
  background: white;
`;

const TableContainer = styled.div`
  padding: 16px;

  @media (max-width: 375px) {
    padding: 0;
  }
`;

const Input = styled.input`
  background: #fff;
  color: #383838;
  height: 40px;
  width: 60px;
  border: 0;
  border-radius: 5px;
  background-color: rgb(248, 248, 248);
  padding: 0 10px;
  box-sizing: border-box;

  @media (max-width: 375px) {
    width: 40px;
    height: 30px;
  }
`;

const Table = styled.table`
  width: 100%;
  thead {
    background-color: #f8f8f8;
  }
  th {
    border: 1px solid #ececec;
    text-transform: capitalize;
    padding: 5px 15px;
    font-size: 16px;

    @media (max-width: 375px) {
      padding: 2px;
      font-size: 10px;
    }
  }
  td {
    text-align: center;
    vertical-align: middle;
    padding: 15px 15px 10px;
    border-bottom: 1px solid #ececec;
    color: #1f2223;
    font-size: 16px;

    @media (max-width: 375px) {
      padding: 10px 10px 7px;
      font-size: 10px;
    }
  }
`;

const Button = styled.button`
  height: 25px;
  font-size: 12px;
  width: 50px;
  color: #fff;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  background: #f1c40f;
  border: 0;
  border-radius: 5px;
  border-bottom: 2px solid #e2b607;
  cursor: pointer;
  box-shadow: inset 0 -2px #e2b607;
  margin: 10px;
`;

const WarningText = styled.div`
  text-align: center;
`;

DataTable.propTypes = {
  data: PropTypes.array.isRequired,
  save: PropTypes.func.isRequired
};

DataTable.defaultProps = {
  data: []
};

export default DataTable;
