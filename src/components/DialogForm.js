import React, { useState } from "react";
import { MenuItem, Select, InputLabel, FormControl } from "@mui/material";
import { TextField, DialogActions, Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const DialogForm = ({
  id,
  editMode,
  handleModifiedAdd,
  handleAdd,
  control,
  changeFieldHandler,
  handleClose,
  handleOptionChange,
  addOptions,
  deleteOption,
}) => {
  const [inputField, setInputField] = useState("");
  const [type, setType] = useState(control.type);
  var camelCaseToWords = function(str){
    return str.match(/^[a-z]+|[A-Z][a-z]*/g).map(function(x){
        return x[0].toUpperCase() + x.substr(1).toLowerCase();
    }).join(' ');
  };
  const handleChange = (event) => {
    if (event.target.value) {
      setInputField(event.target.value);
      setType(camelCaseToWords(event.target.value));
    }
  };
  control.type=type;
  return (
    <>
      {editMode ? null : (
        <FormControl variant="standard" sx={{ m: 1, width: 120 }}>
          <InputLabel>Control</InputLabel>
          <Select
            value={inputField}
            label="Control"
            sx={{ width: 430 }}
            onChange={handleChange}
          >
            <MenuItem value="textInput">Text Input</MenuItem>
            <MenuItem value="checkbox">Checkbox</MenuItem>
            <MenuItem value="switch">Switch</MenuItem>
            <MenuItem value="dateAndTime">Date</MenuItem>
            <MenuItem value="radioGroup">Radio</MenuItem>
            <MenuItem value="toggle">Toggle</MenuItem>
            <MenuItem value="select">Select</MenuItem>
            <MenuItem value="image">Image</MenuItem>
          </Select>    
        </FormControl>
      )}
      {type ? (
        <>
            <TextField
              id={id}
              autoFocus
              margin="dense"
              label={type}
              placeholder="Enter Label"
              value={control.label||""}
              type="text"
              name="label"
              onChange={(e) => changeFieldHandler(e)}
              variant="standard"
              fullWidth
              required
            />
           {(type==="Text Input")? <TextField
              id={id}
              margin="dense"
              label={type}
              placeholder="Enter Placeholder"
              value={control.placeholder || ""}
              type="text"
              name="placeholder"
              onChange={(e) => changeFieldHandler(e)}
              variant="standard"
              fullWidth
              required
            />:null}
          
            {(type==="Radio Group") || (type==="Toggle") || (type==="Select") ? (
               <> {control.options.map((option, index) => (
              <div key={index}>
                <TextField
                  id={id}
                  margin="dense"
                  label={"Option" + " " + index}
                  value={control.options[index]}
                  onChange={(e) => handleOptionChange(index, e)}
                  style={{ marginTop: 8, width: "90%" }}
                  autoFocus
                />
                <div
                  style={{ display: "inline-block" }}
                  className="font-icon-wrapper"
                  onClick={() => deleteOption(option)}
                >
                  <IconButton aria-label="delete">
                    <DeleteIcon style={{ cursor: "default", height: 50 }} />
                  </IconButton>
                </div>
                
              </div>
            ))}
            <Button onClick={addOptions}>Add Options</Button>
            </>
            )
           : null}
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={editMode?handleModifiedAdd:handleAdd}>
                {editMode ? "Save" : "Add"}
              </Button>
            </DialogActions>
        </>
      ) : null}

      
    </>
  );
};
export default DialogForm;
