import React, { Component } from 'react';
import '../App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
//import { withStyles } from '@material-ui/core/styles';
import { userRegister } from '../services/userServices'

class RegisterPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            open: false,
            up: false,
        };

    }
    //  componentDidMount() {
    // userRegister()
    //     .then((response) => {

    //         //    console.log(response);
    //         console.log("Responce from the back end",response);

    //         this.props.props.history.push("/Login");

    //         // window.location.href = '/Login';
    //         // alert('Registered success..')

    //     })
    //     .catch((err) => {
    //         console.log(err);
    //         alert("User with email id already exists!!")

    //     })
    //   }


    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ open: false });
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };
    handleRegister = event => {
        event.preventDefault();

        // console.log("this.state.firstname ");
        // console.log(this.state.firstname);

        // console.log(this.state.firstname === '');
        console.log("this.state.mailid");
        console.log("length", this.state.password.length);
        var Emailverfy = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(this.state.email);
        console.log(this.state.email === '')
        if (this.state.firstname === '') {
            this.setState({ open: true });
        }
        // console.log("this.state.lastname");
        // console.log(this.state.lastname);
        // console.log(this.state.lastname==='');

        else if (this.state.lastname === '') {

            this.setState({ open: true });
        }
        //  console.log("this.state.mailid");
        //  console.log(this.state.mailid);
        //  console.log(this.state.mailid==='');

        else if (this.state.email === '' || !Emailverfy) {


            this.setState({ open: true });
        }
        // console.log("this.state.password");
        // console.log(this.state.password);
        // console.log(this.state.password==='');

        else if (this.state.password === '' || this.state.password.length < 6) {
            this.setState({ open: true });
        }
        else {
            var data = {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                password: this.state.password
            }
            userRegister(data)
                .then((responce) => {
                    console.log("hai how are u");
                    this.props.props.history.push("/Login");
                })
                .catch((err) => {
                    console.log("errr", err);

                    alert("User with email id already exists!!")
                })

        }
    }
    render() {
        return (
            <div>

                <form align="center">
                    <div>
                        < TextField label="Firstname"
                            onChange={this.handleChange('firstname')}
                        />
                    </div>
                    <div>
                        < TextField label="Lastname"
                            onChange={this.handleChange('lastname')}
                        />
                    </div>
                    <div>
                        < TextField label="Email"
                            onChange={this.handleChange('email')}
                        />
                    </div>
                    <div>
                        < TextField label="Password" type="password"
                            onChange={this.handleChange('password')}
                        />
                    </div>
                    <div id="buttonalign"  >

                        <Button variant="contained" color="primary" className="button" type="reset" >Reset</Button>


                        <Button variant="contained" color="primary" className="button" onClick={this.handleRegister} > REGISTER</Button>
                    </div>

                </form>



                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={this.state.open}
                    autoHideDuration={6000}
                    onClose={this.handleClose}

                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">
                        PLZ ENTER PROPER INPUT</span>}
                    action={[
                        <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
                            UNDO
    </Button>,
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            //  className={classes.close}
                            onClick={this.handleClose}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}

                />
            </div>
        )

    }

}
export { RegisterPage };
export default RegisterPage;