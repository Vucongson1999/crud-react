import React, { Component } from "react";
export default class statusComponent extends Component {
  state = {
    status: "",
    statusTop: "",
    id: "",
    statusUpdate: "",
    statusTopUpdate: "",
    idUpdate: "",
  };
  render() {
    let data = [];
    if (this.props.listStatus) {
      data = this.props.listStatus.map((item, idx) => {
        return (
          <tr key={idx + 1}>
            <td>{item.id}</td>
            <td>{item.status}</td>
            <td>{item.statusTop}</td>
            <td>
              <button onClick={() => {this.props.deleteStatus(item._id)}}>DELETE</button>
              <button onClick={() => {this.setState({ statusUpdate: item.status, idUpdate: item._id })}}>EDIT</button>
            </td>
          </tr>
        );
      });
    }
    return (
      <div>
        <div>
          <input style={{width:'200px', height:'30px', borderRadius:'5px'}}
            onChange={(e) => {
              this.setState({ status: e.target.value });
            }}
            value={this.state.status}
          />
           <input style={{width:'200px', height:'30px', borderRadius:'5px'}}
            onChange={(e) => {
              this.setState({ statusTop: e.target.value });
            }}
            value={this.state.statusTop}
          />
          <button style={{width:'80px', height:'37px', borderRadius:'5px', backgroundColor:'green', color: 'white'}}
            onClick={() => {
              this.props.addStatus({ status: this.state.status });
            }}
            
          >
            ADD
          </button>
        </div>

        <div>
          <input style={{width:'200px', height:'30px', borderRadius:'5px'}}
            onChange={(e) => {
              this.setState({ statusUpdate: e.target.value });
            }}
            value={this.state.statusUpdate}
          />
           <input style={{width:'200px', height:'30px', borderRadius:'5px'}}
            onChange={(e) => {
              this.setState({ statusTopUpdate: e.target.value });
            }}
            value={this.state.statusTopUpdate}
          />
          <button style={{width:'80px', height:'37px', borderRadius:'5px', backgroundColor:'green', color: 'white'}}
            onClick={() => {
              this.props.updateStatus({ statusUpdate: this.state.statusUpdate,statusTopUpdate: this.state.statusTopUpdate, id: this.state.idUpdate });
            }}
          >
            UPDATE
          </button>
        </div>

   
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Status</th>
                <th>Status_Top</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{data}</tbody>
          </table>
      
      </div>
    );
  }
}