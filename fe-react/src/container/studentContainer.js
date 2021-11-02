import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../action/studentAction";
import StudentTable from "../component/studentTable";
class StudentContainer extends Component {
  componentDidMount() {
    this.props.paginationStudent(1);
  }
  render() {
    return (
      <>
        <StudentTable {...this.props} />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initLoad: () => {
      dispatch(action.getRequest());
    },
    addStudent: (payload) => {
      dispatch(action.addRequest(payload));
    },
    updateStudent: (payload) => {
      dispatch(action.updateRequest(payload));
    },
    deleteStudent: (payload) => {
      dispatch(action.deleteRequest(payload));
    },
    searchStudent: (payload) => {
      dispatch(action.searchRequest(payload));
    },
    paginationStudent: (num) => {
      dispatch(action.paginationRequest(num));
    },
  };
};
const mapStateToProps = (state) => {
  return {
    listStudents: state.student.listStudents,
    activePage: state.student.activePage,
    totalPage: state.student.totalPage,
    textSearch: state.student.textSearch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentContainer);
