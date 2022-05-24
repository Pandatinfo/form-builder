import React from "react";
import { TextField } from "@mui/material";

const DateField = ({ item }) => {
  return (
    <>
    <br/>
        <TextField
          id="datetime-local"
          label={item.label}
          type="datetime-local"
          sx={{ width: "87%" }}
          InputLabelProps={{
            shrink: true,
          }}
        />
    </>
  );
};
export default DateField;
