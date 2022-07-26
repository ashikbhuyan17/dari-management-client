
import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import getUrl from '../../HTTP/url';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MySwal = withReactContent(Swal)
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="http://somikoronits.com/">
                Somikoron It Services
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: '64px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: '8px',
        backgroundColor: '#f48fb1',
        width: "260px !important",
        height: "260px !important"
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: '8px',
    },
    submit: {
        margin: '24px 0px 16px',
    },
}));

export default function Register() {
    const classes = useStyles();
    const navigate = useNavigate();
    // const url = `${getUrl()}/user/signin`;
    const url = `https://immense-badlands-33128.herokuapp.com/api/admin/signup`;

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [contactNumber, setContactNumber] = useState("");



    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        const data = {
            firstName,
            lastName,
            contactNumber,
            email,
            password
        }

        const response = await axios.post(url, data);
        console.log('response', response)
        if (response.status === 201) {
            console.log('response', response)
            toast.success("Registration Successful ", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTimeout(() => {
                navigate("/login")
            }, 3000);
        }
        if (response.status == 400) {
            toast.error("Something went wrong ", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            // alert("please fill up all the fields")
        }





    }
    // const checkRoleAndRedirect = async (role) => {
    //     if (role.toLowerCase() === 'admin' || role.toLowerCase() === 'cashier' || role.toLowerCase() === "accountant"
    //         || role.toLowerCase() === "stockmanager") {
    //         navigate('/dashboards/home');
    //     } else if (role.toLowerCase() === 'waiter') {
    //         navigate('/pos');
    //     }
    // }
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper} style={{ marginTop: '200px' }}>
                {/* <Avatar 
        className={classes.avatar}>
          <img src="https://res.cloudinary.com/chiranswe/image/upload/v1633716259/desha_logo-removebg-preview_xf8sec.png" alt="" />
        </Avatar> */}
                <Typography component="h1" variant="h5">
                    Register Page
                </Typography>
                <form className={classes.form} noValidate>
                    <div className='name'>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="First Name"
                            autoFocus
                            value={firstName}
                            onChange={(event) => setFirstName(event.target.value)}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Last Name"
                            autoFocus
                            value={lastName}
                            onChange={(event) => setLastName(event.target.value)}
                        />
                    </div>

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Phone Number"
                        autoFocus
                        value={contactNumber}
                        onChange={(event) => setContactNumber(event.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Email Address"
                        autoFocus
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        autoComplete="current-password"
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={signIn}
                    >
                        Sign Up
                    </Button>
                    <Grid container>
                        {/* <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid> */}
                        <Grid item>
                            <Link href="#/login" variant="body2">
                                {"Don't have an account? Sign In"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            {/* <Box mt={8}>
                <Copyright />
            </Box> */}
            <ToastContainer />
        </Container>
    );
}