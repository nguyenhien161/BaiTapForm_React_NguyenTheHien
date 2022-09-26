import React, { Component } from "react";
import { connect } from "react-redux";

class TableSV extends Component {
  render() {
    const { thongtinSV } = this.props;
    return (
      <div className="mt-10">
        <div className="p-8 bg-black text-white text-2xl">
          Danh sách sinh viên
        </div>
        <div>
          <table className="w-full p-6 text-xs text-left whitespace-nowrap mt-5">
            <thead className="bg-gray-700 p-5 text-white text-lg">
              <tr className="">
                <th className="p-3">STT</th>
                <th className="p-3">MaSV</th>
                <th className="p-3">Họ tên</th>
                <th className="p-3">Email</th>
                <th className="p-3">Số điện thoại</th>
                <th className="p-3">Chức năng</th>
              </tr>
            </thead>
            <tbody className="border-b text-lg">
              {thongtinSV.map((item, index) => (
                <tr key={item.MaSV}>
                  <td>{index + 1}</td>
                  <td>{item.MaSV}</td>
                  <td>{item.Name}</td>
                  <td>{item.email}</td>
                  <td>{item.phoneNumber}</td>
                  <td>
                    <button
                      className="p-4 rounded-lg mr-4 bg-red-500"
                      onClick={() => {
                        this.props.dispatch({
                          type: "DELETE_USER",
                          payload: item.MaSV,
                        });
                      }}
                    >
                      Xoá
                    </button>
                    <button
                      className="p-4 rounded-lg bg-green-500"
                      onClick={() => {
                        this.props.dispatch({
                          type: "EDIT_USER",
                          payload: item.MaSV,
                        });
                      }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    thongtinSV: state.baitapForm.thongtinSV,
  };
};

export default connect(mapStateToProps)(TableSV);
