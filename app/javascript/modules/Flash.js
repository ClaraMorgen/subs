import React, { Component } from 'react';

class Flash extends Component {

  // alertClass(type){
  //   let classes = {
  //     error: 'alert-danger',
  //     alert: 'alert-warning',
  //     notice: 'alert-info',
  //     success: 'alert-success'
  //   };
  //   return classes[type] || classes.success;
  // };

  render() {
    // const message = this.props.message;
    // const alertClassName = `alert ${this.alertClass(message.type) } fade in`;
    return (
      <div className={""}>
        <button className="close" data-dismiss="alert">&times;</button>
        HELLOW
      </div>
    );
  }
};

export default Flash;
