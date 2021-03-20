import { Button, Divider, Typography, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import Container from "./Container";

const Categories = () => {
  const [categories, setCategories] = useState();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BASE_URL}/categories`)
      .then((res) => res.json())
      .then((response) => setCategories(response));
  });

  return (
    <Container>
      <Typography variant="h5"> Categories </Typography>
      <Divider />
      <Grid container direction="column">
        {JSON.stringify(categories)}
        {/* {categories.map((category) => {
          return (
            <Button>
              <Grid container>
                <Typography>{category.name}</Typography>
              </Grid>
            </Button>
          );
        })} */}
      </Grid>
    </Container>
  );
};

export default Categories;
