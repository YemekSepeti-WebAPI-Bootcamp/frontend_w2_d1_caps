import Grid from "@material-ui/core/Grid";
import Categories from "./Categories";
import TopAppBar from "./TopAppBar";

const Layout = ({ children, hideSidebar }) => {
  return (
    <div>
      <TopAppBar />
      <Grid container>
        {!hideSidebar && (
          <Grid item md={3} style={{ height: "95vh" }}>
            <Categories />
          </Grid>
        )}
        <Grid item md={hideSidebar ? 12 : 9} style={{ height: "95vh" }}>
          {children}
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
