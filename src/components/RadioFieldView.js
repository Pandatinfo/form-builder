import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";

const RadioField = ({ item }) => {
  return (
    <>
    <br/>
        <FormControl>
          <FormLabel id={item.id}>{item.label}</FormLabel>

          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            id={item.id}
          >
            {item.options.map((value, index) => (
              <FormControlLabel
                key={index}
                value={value}
                control={<Radio />}
                label={value}
              />
            ))}
          </RadioGroup>
        </FormControl>
    </>
  );
};
export default RadioField;
