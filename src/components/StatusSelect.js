import React, { useState } from "react";
import { STATUS } from "../constants";

const Select = ({ value, handleStatusChange }) => {
  const [selectedValue, setSelectedValue] = useState(value);

  const options = Object.values(STATUS);

  return (
    <select
      className="form-select form-select-sm"
      style={{ width: "134px" }}
      value={selectedValue}
      onChange={(e) => {
        setSelectedValue(e.target.value);
        handleStatusChange(e.target.value);
      }}
    >
      {options.map((each) => (
        <option key={each} value={each}>
          {each}
        </option>
      ))}
    </select>
  );
};

export default Select;
