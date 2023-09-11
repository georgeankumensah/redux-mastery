import React from "react";
import logo from "./assets/images/logo.jpg";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";

import Posts from "./components/Post/Posts";
import Form from "./components/Form/Form";

function App() {
  return (
    <Container maxwidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Instaverse
        </Typography>
        <img src={logo} alt="instaverse" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={4}
            
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>

            <Grid item xs={12} sm={7}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
