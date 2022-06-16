import React, { useState } from "react";
import {
  Alert,
  Button,
  Card,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { CardContent } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import axios from "axios";
import { getAccessToken } from "../../../HTTP/token";
import getUrl from "../../../HTTP/url";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
const UserCreateForm = () => {
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const resetData = () => {
    setIsError(false);
    setErrorMsg("");
    setUsername("");
    setEmail("");
    setPassword("");
    setRole("");
  };
  const createUser = async () => {
    if (username === "" || email === "" || password === "" || role === 0) {
      setIsError(true);
      setErrorMsg("Please Fill All The fields");
    } else {
      if (password.length < 8) {
        setIsError(true);
        setErrorMsg("User password must be minimum least 8 characters");
      } else {
        const data = {
          username,
          email,
          role,
          password,
        };
        try {
          const response = await axios.post(`${getUrl()}/user/create`, data, {
            headers: { Authorization: `Bearer ${getAccessToken()}` },
          });

          if (response.status === 201) {
            MySwal.fire({
              icon: "success",
              title: "Great...",
              text: `${response.data}`,
            });
            resetData();
          }
        } catch (error) {
          MySwal.fire({
            icon: "error",
            text: `${error.message}`,
          });
        }
      }
    }
  };
  return (
    <>
      <Card>
        <CardContent>
          {isError && (
            <Grid container direction="row" spacing="2">
              <Grid item lg={12} md={12}>
                <Alert severity="error">{errorMsg}</Alert>
              </Grid>
            </Grid>
          )}
          <br />
          <Grid container direction="row" spacing="2">
            <Grid item lg={6} md={6}>
              <TextField
                fullWidth
                value={username}
                onChange={(event) =>
                  setUsername(event.target.value.toLowerCase())
                }
                id="outlined-basic"
                label="Username"
                variant="outlined"
              />
            </Grid>
            <Grid item lg={6} md={6}>
              <TextField
                fullWidth
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                id="outlined-basic"
                label="Email"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <br />
          <Divider />
          <br />
          <Grid container direction="row" spacing="2">
            <Grid item lg={6} md={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel id="demo-simple-select-outlined-label">
                  User Role
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  value={role}
                  onChange={(event) => setRole(event.target.value)}
                  label="User Role"
                >
                  <MenuItem value="Cashier">Cashier</MenuItem>
                  <MenuItem value="Waiter">Waiter</MenuItem>
                  <MenuItem value="Accountant">Accountant</MenuItem>
                  <MenuItem value="StockManager">Stock Manager</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item lg={6} md={6}>
              <TextField
                fullWidth
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                id="outlined-basic"
                label="User Password"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <br />
          <Divider />
          <br />
          <Grid container>
            <Grid item lg={12} md={12}>
              <Button
                fullWidth
                color="success"
                onClick={createUser}
                variant="contained"
              >
                Create User
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default UserCreateForm;
