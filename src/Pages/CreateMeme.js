import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  TextField,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { useState } from "react";
import withLayout from "../hocs/withLayout";
import useAppContext from "../hooks/useAppContext";

import Container from "../Components/Container";

import { Formik, useFormik } from "formik";
import Select from "@material-ui/core/Select";
import { withRouter } from "react-router";

const useStyles = makeStyles((theme) => ({
  img: {
    borderRadius: 8,
    border: "1px solid #999",
  },
  imgContainer: { margin: 10, borderRadius: 8 },
  textField: {
    margin: 10,
  },
}));

const CreateMeme = ({ history }) => {
  const classes = useStyles();

  console.log({ history });

  const { allMemes, categories, loginUser, fetchMemes } = useAppContext();
  const [selectedItem, setSelectedItem] = useState(null);

  const createMemeBusiness = async (queryString, values) => {
    const res = await fetch(
      `${process.env.REACT_APP_IMGFLIP_API_URL}/caption_image?${queryString}`
    );
    const response = await res.json();
    const createMemeObj = {
      userId: loginUser.id,
      createDate: new Date().toISOString(),
      title: values.title,
      url: response.data.url,
      memeId: selectedItem.id,
      likes: [],
      dislikes: [],
      categoryId: values.category,
    };

    const createdMemeRes = await fetch(
      `${process.env.REACT_APP_BASE_URL}/created_memes`,
      {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(createMemeObj),
      }
    );

    const createdMeme = await createdMemeRes.json();

    if (createdMeme) {
      alert("Succeed");
      fetchMemes();
      history.push("/");
    }

    console.log({ createdMeme });
  };

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      const queryString = `template_id=${selectedItem.id}&username=${loginUser.username}&password=${loginUser.password}&text0=${values.text0}&text1=${values.text1}`;
      createMemeBusiness(queryString, values);
    },
  });

  if (!allMemes)
    return (
      <Grid container>
        {[...Array(20).keys()].map((p) => (
          <Skeleton
            key={p}
            variant="rect"
            width={200}
            height={200}
            className={classes.img}
          />
        ))}
      </Grid>
    );

  if (!selectedItem) {
    return (
      <Grid container>
        {allMemes.map((meme) => {
          return (
            <Grid key={meme.id} item className={classes.imgContainer}>
              <img
                src={meme.url}
                width={200}
                height={200}
                className={classes.img}
                onClick={() => {
                  setSelectedItem(meme);
                }}
              ></img>
            </Grid>
          );
        })}
      </Grid>
    );
  }
  const renderTextBoxes = () => {
    return [...Array(selectedItem.box_count).keys()].map((item) => {
      return (
        <TextField
          variant="outlined"
          label={`Text${item}`}
          id={`text${item}`}
          name={`text${item}`}
          key={item}
          className={classes.textField}
          value={formik.values[`text${item}`]}
          onChange={formik.handleChange}
        />
      );
    });
  };

  return (
    <Container>
      <Grid container>
        <Grid item md={6}>
          <img src={selectedItem.url} width={400} className={classes.img} />
        </Grid>
        <Grid item md={6}>
          <form onSubmit={formik.handleSubmit}>
            <Grid container direction="column">
              <TextField
                variant="outlined"
                label={`Title`}
                id={`title`}
                name={`title`}
                className={classes.textField}
                value={formik.values.title}
                onChange={formik.handleChange}
              />

              {renderTextBoxes()}

              <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Category
                </InputLabel>
                <Select
                  name="category"
                  id="category"
                  value={formik.values.category}
                  onChange={formik.handleChange}
                  displayEmpty
                  className={classes.textField}
                >
                  {categories.map((category) => (
                    <MenuItem value={category.id}>{category.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Button type="submit" variant="contained" color="primary">
                Create
              </Button>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default withRouter(withLayout(CreateMeme));
