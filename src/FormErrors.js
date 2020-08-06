import React from "react";
const FormErrors = ({ formErrors }) => (
  <div className="formErrors">
    {Object.keys(formErrors).map(fieldName => {
      if (formErrors[fieldName].length > 0) {
        return (
          <p>
            {fieldName} {formErrors[fieldName]}
          </p>
        );
      } else {
        return "";
      }
    })}
  </div>
);
export default FormErrors;
