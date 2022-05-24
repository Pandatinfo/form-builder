import React, { useState } from "react";
import { IconButton } from "@mui/material";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

const ImageField = ({ item }) => {
  const [image, setImage] = useState("");
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage(img);
    }
  };
  return (
    <>
      <h4
        style={{
          fontStyle: "normal",
          fontWeight: 360,
          marginTop: 0,
          marginBottom: 0,
        }}
      >
        {item.label}
      </h4>

      <IconButton variant="contained" component="label">
        {image ? (
          <img
            style={{ height: 150, width: 150 }}
            src={URL.createObjectURL(image)}
            alt={item.label}
          />
        ) : (
          <PhotoCameraIcon style={{ height: 150, width: 150 }} />
        )}
        <input
          type="file"
          name="image"
          hidden
          multiple
          onChange={(event, index) => onImageChange(event, index)}
        />
      </IconButton>
    </>
  );
};
export default ImageField;
