import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { Button, TextField, Box, Paper, Grid, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogForm from "../components/DialogForm";
import Control from "../components/ControlView";

function AddForm(props) {
  const [items, setItems] = useState([]);
  const [createMode, setCreateMode] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(props.history.location.state.title);
  const [desc, setDesc] = useState(props.history.location.state.desc);
  const [control, setControl] = useState({
    id: 0,
    label: '',
    placeholder: '',
    options: [],
    type: ''
  });

  useEffect(() => {
    if(props.history.location.state.forms.items){
      setItems([...props.history.location.state.forms.items])
    }
    
  },[props.history.location.state.forms.items]);

  const addOptions = () => {
    setControl({...control, options: [...control.options, ""]})
  };
  const handleOptionChange = (index, e) => {
    control.options[index] = e.target.value;
    setControl({...control, options: control.options})
  };
  const deleteOption = (jump) => {
    setControl({options: control.options.filter((j)=>j!==jump)});
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("title or description cannot be blank.");
    } else {
      props.addForm(title, desc, items);
    }
    props.history.push("/dashboard");
  };

  const handleModifiedSave = () => {
    let currentForm = props.forms[props.history.location.state.index];
    currentForm.title = title;
    currentForm.desc = desc;
    currentForm.items = items;
    props.modifyForm(
      currentForm.title,
      currentForm.desc,
      currentForm.items
    );
    props.history.push("/dashboard");
  };

  const handleAdd = () => {
    setItems([
      ...items,
      {
        ...control,
      },
    ]);
    setCreateMode(false);
  };

  const handleClose = () => {
    setCreateMode(false);
    setEditMode(false);
  };

  const handleControl = () => {
    setControl({id: control.id+ 1, options: []});
    setCreateMode(true);
  };
  const deleteItem = (item) => {
    setItems(items.filter((j) => j !== item));
  };

  const onUpdate = (item) => {
    setItems([
      ...items.map((x) =>
        x.id === item.id
          ? {
              ...x,
              id: item.id,
              label: item.label,
              placeholder: item.placeholder,
              options: item.options,
              type: item.type
            }
          : x
      ),
    ]);
  };

  const updateItem = (item) => {
    setControl({...control,
      id: item.id,
      label: item.label,
      placeholder: item.placeholder,
      options: item.options,
      type: item.type
    })
  setEditMode(true);
  setCreateMode(true);
  };

  const handleModifiedAdd = () => {
    onUpdate({
      ...control
    });
    setEditMode(false);
    setCreateMode(false);
  };
  const changeFieldHandler = (e) => {
    setControl(prev => ({...prev, [e.target.name]:e.target.value}))
    e.preventDefault();
  }
  return (
    <div>
      <Box mt={2}>
        <Paper
          style={{
            padding: 20,
            height: "auto",
            width: "50%",
            margin: "20px auto",
          }}
        >
          <Grid align="center">
            <Typography
              style={{ position: "relative", fontSize: 25, marginBottom: 5 }}
            >
             {props.history.location.state.title ? "Modify Form" :
              "New Form"
             }           
             </Typography>
          </Grid>

          <div>
            <TextField
              style={{ marginTop: 5 }}
              label="Title"
              name="title"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Enter title"
              fullWidth
              required
            />
            <TextField
              style={{ marginTop: 10, marginBottom: 4 }}
              label="Description"
              name="desc"
              value={desc}
              onChange={(event) => setDesc(event.target.value)}
              placeholder="Enter description"
              fullWidth
              required
            />
            <hr />
            {items.map((item, index)=>{
            return (
              <div key={index}>
              <Control
               item={item}
               deleteItem={deleteItem}
               updateItem={updateItem}
              />
              </div>
            )
          })}
            <br />
            <Button
              color="secondary"
              variant="contained"
              style={{ marginTop: 5 }}
              onClick={handleControl}
            >
              Add Control
            </Button>
            <br />
            <Button
              color="primary"
              variant="contained"
              style={{ marginTop: 8 }}
              onClick={props.history.location.state.title?handleModifiedSave:handleSave}
            >
              Save
            </Button>
          </div>
        </Paper>
      </Box>
      <Dialog open={createMode} onClose={handleClose}>
        <DialogTitle id="simple-dialog-title">Control</DialogTitle>
        <DialogContent style={{ width: "450px", height: "250px" }}>
          <DialogForm
            editMode={editMode}
            handleModifiedAdd={handleModifiedAdd}
            handleAdd={handleAdd}
            control={control}
            changeFieldHandler={changeFieldHandler}
            handleOptionChange={handleOptionChange}
            deleteOption={deleteOption}
            addOptions={addOptions}
            handleClose={handleClose}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default withRouter(AddForm);
