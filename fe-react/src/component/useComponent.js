import React, { Component } from "react";
export default class studentTable extends Component {
  state = {
    name: "",
    statusTop: "",
    dates: "",
    id: "",
    nameUpdate: "",
    statusTopUpdate: "",
    datesUpdate: "",
    idUpdate: "",
  };
  render() {
    let dataTable = [];
    if (this.props.listStudents) {
      dataTable = this.props.listStudents.map((item, idx) => {
        return (
          <tr key={idx + 1}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.statusTop}</td>
            <td>{item.dates}</td>
            <td>
              <button onClick={() => { this.props.deleteStudent(item._id) }}>DELETE</button>
              <button onClick={() => { this.setState({ nameUpdate: item.name, idUpdate: item._id }) }}>EDIT</button>
            </td>
          </tr>
        );
      });
    }
    return (
      <div>
        <div>
          <input style={{ width: '200px', height: '30px', borderRadius: '5px' }}
            onChange={(e) => {
              this.setState({ name: e.target.value });
            }}
            placeholder="nhập tên nv"
            value={this.state.name}
          />
          <input style={{ width: '200px', height: '30px', borderRadius: '5px' }}
            onChange={(e) => {
              this.setState({ statusTop: e.target.value });
            }}
            placeholder="nhập thứ tự ưu tiên"
            value={this.state.statusTop}
          />
          <button style={{ width: '80px', height: '37px', borderRadius: '5px', backgroundColor: 'green', color: 'white' }}
            onClick={() => {
              this.props.addStudent({ name: this.state.name, statusTop: this.state.statusTop });
            }}
          >

            ADD
          </button>
        </div>

        <div>
          <input style={{ width: '200px', height: '30px', borderRadius: '5px' }}
            onChange={(e) => {
              this.setState({ nameUpdate: e.target.value });
            }}
            placeholder="sửa tên nv"
            value={this.state.nameUpdate}
          />
          <input style={{ width: '200px', height: '30px', borderRadius: '5px' }}
            onChange={(e) => {
              this.setState({ statusTopUpdate: e.target.value });
            }}
            placeholder="sửa thứ tự ưu tiên"
            value={this.state.statusTopUpdate}
          />
          <input style={{ width: '200px', height: '30px', borderRadius: '5px' }}
            onChange={(e) => {
              this.setState({ datesUpdate: e.target.value });
            }}
            placeholder="sửa ngày tháng"
            value={this.state.datesUpdate}
          />
          <button style={{ width: '80px', height: '37px', borderRadius: '5px', backgroundColor: 'green', color: 'white' }}
            onClick={() => {
              this.props.updateStudent({ name: this.state.nameUpdate, statusTop: this.state.statusTopUpdate, dates: this.state.datesUpdate, id: this.state.idUpdate });
            }}
          >
            UPDATE
          </button>
        </div>


        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>NAME</th>
              <th>ID_STATUS</th>
              <th>DATE_TIME</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{dataTable}</tbody>
        </table>

      </div>
    );
  }
}