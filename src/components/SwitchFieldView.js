import React from "react";
import { FormControlLabel, Switch } from "@mui/material";

const SwitchField = ({ item }) => {
  return (
    <>
        <FormControlLabel
          control={<Switch defaultChecked />}
          label={item.label}
        />
    </>
  );
};
export default SwitchField;
