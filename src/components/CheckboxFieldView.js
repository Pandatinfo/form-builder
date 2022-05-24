import React from "react";
import { FormControlLabel, Checkbox } from "@mui/material";

const CheckboxField = ({ item }) => {
  return (
    <>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label={item.label}
        />
    </>
  );
};
export default CheckboxField;
