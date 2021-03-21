import { Grid, TextField, Button } from "@material-ui/core";
import { useEffect, useRef, useState } from "react";
import ImageUpload from "../Components/ImageUpload";
import withLayout from "../hocs/withLayout";

const MemeGenerator = () => {
  const canvasRef = useRef();
  const contextRef = useRef();
  const [image, setImage] = useState();
  const [texts, setTexts] = useState([
    {
      id: 0,
      text: "",
      x: 400,
      y: 50,
    },
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    /**@type {CanvasRenderingContext2D} */
    const ctx = canvas.getContext("2d");

    ctx.font = "60px Arial";
    ctx.strokeStyle = "black";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.lineJoin = "round";

    contextRef.current = ctx;
  });

  const handleChange = (src) => {
    setImage(src);
    console.log({ src });
    draw(src);
  };

  const draw = (src, pTexts = texts) => {
    const img = new Image();
    img.onload = function (e) {
      const width = 500;
      const height = 500;
      contextRef.current.drawImage(img, 0, 0, width, height);
      pTexts.map((text) => drawText(text));
    };
    img.src = src;
  };

  const drawText = ({ text, x, y }) => {
    contextRef.current.fillText(text, x, y);
  };

  const setNewTexts = (newText, i) => {
    const temp = [...texts];
    temp[i] = newText;
    setTexts(temp);
    draw(image, temp);
  };

  const renderTextInputs = () => {
    if (!image) return;
    return (
      <Grid>
        {texts.map((item, i) => (
          <Grid container>
            <TextField
              label={`Text${item.id}`}
              variant="outlined"
              value={item.text}
              onChange={(e) => {
                const newText = { ...item, text: e.target.value };
                // const newText = {
                //   id: item.id,
                //   text: e.target.value,
                //   x: item.x,
                //   y: item.y,
                // };

                // const temp = [...texts];
                // temp[i] = newText;

                // setTexts(temp);
                setNewTexts(newText, i);
              }}
            ></TextField>
            <TextField
              label={`X`}
              variant="outlined"
              value={item.x}
              style={{ width: 150 }}
              type="number"
              onChange={(e) => {
                const newText = { ...item, x: e.target.value };
                setNewTexts(newText, i);
              }}
            ></TextField>

            <TextField
              label={`Y`}
              variant="outlined"
              value={item.y}
              style={{ width: 150 }}
              type="number"
              onChange={(e) => {
                const newText = { ...item, y: e.target.value };
                setNewTexts(newText, i);
              }}
            ></TextField>
          </Grid>
        ))}
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setTexts([...texts, { id: texts.length, text: "", x: 0, y: 0 }]);
          }}
        >
          Add New Text
        </Button>
      </Grid>
    );
  };

  return (
    <Grid container direction="row" style={{ margin: 40 }}>
      {!image && <ImageUpload onChange={handleChange} />}
      <Grid item md={6}>
        <canvas ref={canvasRef} width={500} height={500} />
      </Grid>
      <Grid item md={6}>
        {renderTextInputs()}
      </Grid>
    </Grid>
  );
};

export default withLayout(MemeGenerator);
