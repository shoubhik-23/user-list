import { Grid, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import PaginationComponent from "../pagination/pagination";
import User from "./user";
import classes from "./user.module.css";

function UserLists(props) {
  const [page, setPage] = useState({
    page: 1,
    total: 1,
    records: 1,
  });
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();
  }, [page.page]);
  const getUsers = () => {
    fetch(`https://reqres.in/api/users?page=${page.page}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.data) {
          setUsers(data.data);
          setPage({
            ...page,
            total: Math.ceil(data.total / data.per_page),
            records: data.per_page,
          });
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Paper
        style={{ maxWidth: 500, margin: "10px auto", padding: "5px" }}
        elevation={3}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              height: "7vh",
              alignItems: "center",
              backgroundColor: "blue",
              borderRadius: 10,
            }}
          >
            <Typography
              style={{ fontSize: 20, fontWeight: 600, color: "white" }}
            >
              Users
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ padding: 15, boxSizing: "border-box" }}>
            {users.map((el) => (
              <User data={el}></User>
            ))}
          </Grid>

          <Grid
            item
            xs={12}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <PaginationComponent
              onChange={(e, page) => setPage({ ...page, page: page })}
              {...page}
            ></PaginationComponent>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default UserLists;
