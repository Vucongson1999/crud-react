import React, { Component } from "react";
import { limit } from "../constant";

export default class studentTable extends Component {
  state = {
    name: "",
    id: "",
    nameUpdate: "",
    idUpdate: "",
    textSearch: "",
  };
  render() {
    let dataTable = [];
    if (this.props.listStudents) {
      dataTable = this.props.listStudents.map((item, idx) => {
        return (
          <tr key={idx}>
            <td>{idx  + 1 + (this.props.activePage -1  ) * limit}</td>
            <td>{item.name}</td>
            <td>
              <button
                onClick={() => {
                  this.props.deleteStudent(item._id);
                }}
              >
                DELETE
              </button>

              <button
                onClick={() => {
                  this.setState({ nameUpdate: item.name, idUpdate: item._id });
                }}
              >
                EDIT
              </button>
            </td>
          </tr>
        );
      });
    }

    let paginationBar = [];
    let totalPage = this.props.totalPage;

    for (let index = 1; index <= totalPage; index++) {
      let button = (
        <button
          key={index}
          onClick={() => {
            this.props.textSearch
              ? this.props.searchStudent({
                  textSearch: this.state.textSearch,
                  activePage: index,
                })
              : this.props.paginationStudent(index);
          }}
          style={
            this.props.activePage === index ? { backgroundColor: "blue" } : null
          }
        >
          {index}
        </button>
      );
      paginationBar.push(button);
    }

    return (
      <div>
        <div>
          <input
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
            value={this.state.name}
          />
          <button
            onClick={() => {
              this.props.addStudent({ name: this.state.name });
            }}
          >
            ADD
          </button>
        </div>

        <div>
          <input
            onChange={(e) => {
              this.setState({ nameUpdate: e.target.value });
            }}
            value={this.state.nameUpdate}
          />
          <button
            onClick={() => {
              this.props.updateStudent({ name: this.state.nameUpdate, id: this.state.idUpdate});
            }}
          >
            UPDATE
          </button>
        </div>

        <div>
          <input
            onChange={(e) => {
              this.setState({ textSearch: e.target.value });
            }}
            value={this.state.textSearch}
          />
          <button
            onClick={() => {
              this.props.searchStudent({
                textSearch: this.state.textSearch,
                activePage: 1,
              });
            }}
          >
            SEARCH
          </button>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>NAME</th>
              </tr>
            </thead>
            <tbody>{dataTable}</tbody>
          </table>
          {paginationBar}
        </div>
      </div>
    );
  }
}
//tesst chuscs chsuc sc