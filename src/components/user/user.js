import { Box, Divider, Grid, Typography } from "@material-ui/core";
import React from "react";
import classes from "./user.module.css";

function User(props) {
  return (
    <Grid item xs={12} container className={classes.list}>
      <Grid item xs={3}>
        <Box
          style={{
            height: 80,
            width: 80,
            borderRadius: "50%",
          }}
        >
          <img
            style={{ height: "100%", width: "100%", borderRadius: "inherit" }}
            src={props.data.avatar}
            alt="profile_image"
          ></img>
        </Box>
      </Grid>
      <Grid
        container
        item
        xs={9}
        style={{
          justifyContent: "center",
          paddingLeft: 20,
        }}
      >
        <Grid
          item
          xs={12}
          style={{
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <Typography style={{ fontSize: 16, fontWeight: 600 }}>
            {props.data.first_name} {props.data.last_name}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography>{props.data.email}</Typography>
        </Grid>
      </Grid>
      <Grid item xs={12} style={{ margin: 5 }}>
        <Divider></Divider>
      </Grid>
    </Grid>
  );
}

export default User;
