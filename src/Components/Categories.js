import { Button, Divider, Typography, Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import useAppContext from "../hooks/useAppContext";
import Container from "./Container";

const Categories = () => {
  const { categories } = useAppContext();

  if (!categories)
    return (
      <div>
        {[...Array(20).keys()].map((p) => (
          <Skeleton
            key={p}
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
            <Button key={category.id}>
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
