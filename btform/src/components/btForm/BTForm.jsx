import React, { Component } from "react";
import TableSV from "./TableSV";
import ThongTinSV from "./ThongTinSV";

export default class BTForm extends Component {
  render() {
    return (
      <div className="max-w-7xl m-auto">
        <ThongTinSV />
        <TableSV />
      </div>
    );
  }
}
