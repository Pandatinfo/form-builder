import React from "react";
import { TextField } from "@mui/material";

const InputField = ({ item }) => {
  return (
    <>
      <TextField
        style={{ width: "87%" }}
        margin="dense"
        label={item.label}
        placeholder={item.placeholder}
      />
    </>
  );
};
export default InputField;
