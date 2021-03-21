import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PhotoCamera from "@material-ui/icons/PhotoCamera";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
  },
}));

export default function ImageUpload({ onChange }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          if (!file) {
            onChange(null);
            return;
          }
          const fileReader = new FileReader();
          fileReader.onload = (fileLoadedEvent) => {
            if (fileLoadedEvent) {
              const srcData = fileLoadedEvent.target.result;
              onChange(srcData);
            }
          };
          fileReader.onabort = (fileEvent) => {
            console.warn("fileEvent", fileEvent);
          };

          if (fileReader && file) fileReader.readAsDataURL(file);
        }}
      />
      <label htmlFor="contained-button-file">
        <Button
          variant="contained"
          color="primary"
          component="span"
          startIcon={<PhotoCamera />}
        >
          Upload Image
        </Button>
      </label>
    </div>
  );
}
