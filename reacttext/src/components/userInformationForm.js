import React from "react";
import { Field, reduxForm } from "redux-form";

var UserInformationForm = props => {
  var { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">FirstName</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

// save form
UserInformationForm = reduxForm({
  form: "contact"
})(UserInformationForm);

export default UserInformationForm;
