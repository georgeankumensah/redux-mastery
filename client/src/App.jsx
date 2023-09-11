import React,{useEffect} from "react";
import logo from "./assets/images/logo.jpg";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import useStyles from "./Styles";
import { useDispatch } from "react-redux";
import {getPosts} from "./actions/posts";


import Posts from "./components/Post/Posts";
import Form from "./components/Form/Form";

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getPosts());
  },[dispatch]);
  return (
    <Container maxwidth="lg">
      <AppBar position="static" color="inherit" className={classes.appBar}>
        <img src={logo} alt="instaverse" height="60" className={classes.image} />
        <Typography variant="h2" align="center" className={classes.heading}>
          Instaverse
        </Typography>
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
