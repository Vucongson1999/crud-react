import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../action/statusAction";
import StatusComponent from "../component/statusComponent";
class statusContainer extends Component {
  componentDidMount() {
    this.props.initLoad();
  }
  render() {
    return (
      <>
        <StatusComponent {...this.props} />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initLoad: () => {
      dispatch(action.getStatusRequest());
    },
    addStatus: (payload) => {
      dispatch(action.addStatusRequest(payload));
    },
    updateStatus: (payload) => {
      dispatch(action.updateStatusRequest(payload));
    },
    deleteStatus: (payload) => {
      dispatch(action.deleteStatusRequest(payload));
    }
  };
};
const mapStateToProps = (state) => {
  return {
    listStatus: state.status.listStatus,
    isFetChing: state.status.isFetChing,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(statusContainer);
