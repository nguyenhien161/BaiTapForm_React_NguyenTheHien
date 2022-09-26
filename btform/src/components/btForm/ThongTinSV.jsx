import React, { Component } from "react";
import { connect } from "react-redux";

class ThongTinSV extends Component {
  state = {
    value: {
      MaSV: "",
      Name: "",
      phoneNumber: "",
      email: "",
    },

    errors: {},
  };
  handleState = (event) => {
    const { name, value } = event.target;
    this.setState({
      value: {
        ...this.state.value,
        [name]: value,
      },
    });
    // console.log(event.target.value);
    // console.log(event.target.name);
  };

  handleSubmit = (event) => {
    console.log(event.target.checkValidity());
    event.preventDefault();
    // console.log(this.state);

    if (!event.target.checkValidity()) {
      return;
    }

    this.props.dispatch({
      type: "ADD_USER",
      payload: this.state.value,
    });
  };

  handleBlur = (event) => {
    const {
      name,
      title,
      minLength,
      maxLength,
      validity: { valueMissing, tooShort, patternMismatch },
    } = event.target;
    console.log(patternMismatch);

    let mess = "";

    if (valueMissing) {
      mess = `${title} không được bỏ trống !`;
    }
    if (tooShort) {
      mess = `${title} từ ${minLength} đến ${maxLength} ký tự`;
    }

    if (patternMismatch) {
      mess = `${title} không đúng định dạng`;
    }
    this.setState({
      errors: {
        ...this.state.errors,
        // [name]: validationMessage,
        [name]: mess,
      },
    });
  };
  render() {
    const { selectedUser } = this.props;
    const { MaSV, Name, phoneNumber, email } = {
      ...selectedUser,
    };
    return (
      <div>
        <form
          id="form"
          noValidate
          // onSubmit={(event) => {
          //   //Ngăn brower tự động load
          //   event.preventDefault();
          //   console.log(this.state);
          // }}
          onSubmit={this.handleSubmit}
        >
          <div className="p-8 bg-zinc-800 text-white text-2xl font-semibold">
            Thông tin sinh viên
          </div>
          <div className="grid grid-cols-2 gap-5 mt-5">
            <div>
              <p className="text-gray-500">Mã SV</p>
              <input
                type="text"
                title="Mã SV"
                required
                value={MaSV}
                minlength={4}
                maxLength={15}
                name="MaSV"
                placeholder="Tài khoản"
                className="border-2 border-black  rounded-sm p-3 w-full mt-4"
                onChange={this.handleState}
                onBlur={this.handleBlur}
              />
              <span className="text-red-500 text-14">
                {this.state.errors.MaSV}
              </span>
            </div>
            <div>
              <p className="text-gray-500">Họ Tên</p>
              <input
                type="text"
                name="Name"
                required
                value={Name}
                placeholder="Họ Tên"
                className="border-2 border-gray-300 rounded-sm p-3 w-full mt-4"
                onChange={this.handleState}
                onBlur={this.handleBlur}
              />
              <span className="text-red-500 text-14">
                {this.state.errors.Name}
              </span>
            </div>
            <div>
              <p className="text-gray-500">Email</p>
              <input
                type="text"
                value={email}
                required
                name="email"
                placeholder="Email"
                className="border-2 border-gray-300  rounded-sm p-3 w-full mt-4"
                onChange={this.handleState}
                onBlur={this.handleBlur}
              />
              <span className="text-red-500 text-14">
                {this.state.errors.email}
              </span>
            </div>
            <div>
              <p className="text-gray-500">Số Điện thoại</p>
              <input
                type="text"
                name="phoneNumber"
                required
                value={phoneNumber}
                placeholder="Số Điện thoại"
                className="border-2 border-gray-300  rounded-sm p-3 w-full mt-4"
                onChange={this.handleState}
                onBlur={this.handleBlur}
              />
              <span className="text-red-500 text-14">
                {this.state.errors.phoneNumber}
              </span>
            </div>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="p-6 bg-blue-500 rounded-sm text-white cursor-pointer hover:bg-blue-700"
            >
              Thêm Sinh Viên
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.baitapForm,
  };
};

export default connect(mapStateToProps)(ThongTinSV);
