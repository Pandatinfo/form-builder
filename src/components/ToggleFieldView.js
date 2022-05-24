import React, { useState } from "react";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";

const ToggleField = ({ item }) => {
  const [selectToggle, setSelectToggle] = useState([]);
  return (
    <>
        <h4
          style={{
            fontStyle: "normal",
            fontWeight: 360,
            marginTop: 2,
            marginBottom: 4,
          }}
        >
          {item.label}
        </h4>
        <ToggleButtonGroup
          color="primary"
          value={selectToggle}
          onChange={(e, index) => setSelectToggle(index)}
        >
          {item.options.map((value, index) => (
            <ToggleButton key={index} value={value}>{value}</ToggleButton>
          ))}
        </ToggleButtonGroup>
    </>
  );
};
export default ToggleField;
