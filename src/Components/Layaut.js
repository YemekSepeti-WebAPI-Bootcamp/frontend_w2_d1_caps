import Grid from "@material-ui/core/Grid"
import Categories from "./Categories"
import TopAppBar from "./TopAppBar"

const Layout = ({ children }) => {
    return <div>
        <TopAppBar />
        <Grid container >
            <Grid item md={2} style={{ height: "95vh" }}>
                <Categories />
            </Grid>
            <Grid item md={10} style={{ height: "95vh" }}>
                {children}
            </Grid>
        </Grid>

    </div>
}

export default Layout