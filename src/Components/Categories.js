import {
  Button,
  Divider,
  Typography,
  Grid,
  CircularProgress,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import { useEffect, useState } from "react";
import Container from "./Container";

import useFetch from "../hooks/useFetch";

const Categories = () => {
  const [categories] = useFetch(`categories`);

  if (!categories)
    return (
      <div>
        {[...Array(20).keys()].map((p) => (
          <Skeleton
            variant="rect"
            width={"80%"}
            height={40}
            style={{ margin: 10, borderRadius: 8 }}
          />
        ))}
      </div>
    );

  return (
    <Container>
      <Typography variant="h5"> Categories </Typography>
      <Divider />
      <Grid container direction="column">
        {categories.map((category) => {
          return (
            <Button>
              <Grid container>
                <Typography>{category.name}</Typography>
              </Grid>
            </Button>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Categories;
