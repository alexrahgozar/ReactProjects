import React, { Component } from "react";
// import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    console.log("hello");
    return (
      <div>
        <h2>Create Stream</h2>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);

// const validate = formValue => {
//   const errors = {};
//
//   if (!formValue.title) {
//     errors.title = "Please Provide a Title";
//   }
//   if (!formValue.description) {
//     errors.description = "Please Provide a Description";
//   }
//   return errors;
// };
//
// const formWrapped = reduxForm({
//   form: "streamCreate",
//   validate: validate
// })(StreamCreate);
//
// export default connect(
//   null,
//   { createStream }
// )(formWrapped);
//
// renderError = ({ error, touched }) => {
//   // meta
//   if (touched && error) {
//     return (
//       <div className="ui error message">
//         <div className="header">{error}</div>
//       </div>
//     );
//   }
// };
// renderInput = ({ input, label, meta }) => {
//   // renderInput(formProps) {
//   // console.log(formProps.input.name);
//   // return <input {...formProps.input} />;
//   const className = `field ${meta.error && meta.touched ? "error" : ""}`;
//   return (
//     <div className={className}>
//       <label>{label}</label>
//       <input {...input} autoComplete="off" />
//       {this.renderError(meta)}
//     </div>
//   );
// };
// onSubmit = formValues => {
//   this.props.createStream(formValues);
// };
//
// render() {
//   return (
//     <form
//       onSubmit={this.props.handleSubmit(this.onSubmit)}
//       className="ui form error"
//     >
//       <Field name="title" component={this.renderInput} label="Enter Title" />
//       <Field
//         name="description"
//         component={this.renderInput}
//         label="Enter Description"
//       />
//       <button className="ui button primary">Submit</button>
//     </form>
//   );
// }
