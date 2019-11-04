import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";

import { save } from "../../store/actions/serviceActions";
import Container from "../../components/UI/Container/Container";
import DataTable from "../../components/DataTable/DataTable";
import Calculator from "../../components/Calculator/Calculator";
import DataResult from "../../components/DataResult/DataResult";

export class App extends Component {
  render() {
    const { data, save } = this.props;
    return (
      <Wrapper>
        <Content>
          <Container>
            <DataTable data={data} save={save} />
            <ResultContainer>
              <Calculator data={data} />
              <DataResult data={data} />
            </ResultContainer>
          </Container>
        </Content>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ResultContainer = styled.div`
  background: #fff;
  margin-top: 20px;
  border: 1px solid #c7c8c8;
  padding: 10px;
  text-align: center;
`;

const Content = styled.div`
  background-color: #f1f1f1;
  padding-top: 16px;
  padding-bottom: 16px;
  height: 100%;
  overflow: auto;
`;

App.propTypes = {
  save: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  data: state.tableData.data
});

export default connect(
  mapStateToProps,
  { save }
)(App);
