import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const SelectField = ({ item }) => {
  const [selectMenuItem, setSelectMenuItem] = useState('');
  const handleSelectMenuItem = (e) => {
    setSelectMenuItem(e.target.value);
  }
  return (
    <>
    <br/>
        <FormControl sx={{ width: "87%" }}>
          <InputLabel id={item.id}>{item.label}</InputLabel>
          <Select
            value={selectMenuItem}
            label={selectMenuItem}
            onChange={(e) => handleSelectMenuItem(e)}
          >
            {item.options.map((value, index) => (
              <MenuItem key={index} value={value}>{value}</MenuItem>
            ))}
          </Select>
        </FormControl>
    </>
  );
};
export default SelectField;
