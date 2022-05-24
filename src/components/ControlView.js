import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import InputField from "./TextFieldView";
import CheckboxField from "./CheckboxFieldView";
import SwitchField from "./SwitchFieldView";
import DateField from "./DateFieldView";
import RadioField from "./RadioFieldView";
import ToggleField from "./ToggleFieldView";
import SelectField from "./SelectFieldView";
import ImageField from "./ImageFieldView";

const Control = ({ item, deleteItem, updateItem }) => {
  return (
    <>
      {item.type === "Text Input" ? <InputField item={item} /> : null}
      {item.type === "Checkbox" ? <CheckboxField item={item} /> : null}
      {item.type === "Switch" ? <SwitchField item={item} /> : null}
      {item.type === "Date And Time" ? <DateField item={item} /> : null}
      {item.type === "Radio Group" ? <RadioField item={item} /> : null}
      {item.type === "Toggle" ? <ToggleField item={item} /> : null}
      {item.type === "Select" ? <SelectField item={item} /> : null}
      {item.type === "Image" ? <ImageField item={item} /> : null}
      {item.type?
      <div style={{ display: "inline-block", float: "right" }}>
        <IconButton aria-label="delete" onClick={() => deleteItem(item)}>
          <DeleteIcon style={{ cursor: "default" }} />
        </IconButton>
        <IconButton onClick={() => updateItem(item)}>
          <ModeEditOutlineOutlinedIcon />
        </IconButton>
      </div>
      :null
      }
    </>
  );
};
export default Control;
