import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../action/useAction";
import UseComponent from "../component/useComponent";
class useContainer extends Component {
  componentDidMount() {
    this.props.initLoad();
  }
  render() {
    return (
      <>
        <UseComponent {...this.props} />
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
    }
  };
};
const mapStateToProps = (state) => {
  return {
    listStudents: state.student.listStudents,
    isFetChing: state.student.isFetChing,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(useContainer);
