import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

export default class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: ''
        }
    }
    handleChange = event => {
        this.setState({
            value: event.target.value,

        });
        this.props.handleChange(this.state.value);
    }
  
    render() {
        return (
            <div>
                < TextField label={this.props.label} type={this.props.type}
                    value={this.state.value}
                    onChange={this.handleChange}
                />
                <div>
             
                </div>
            </div>
        )
    }
}

// export default class Inputpassword extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             password: '',

//         }
//     }
//     handleChange = event => {
//         this.setState({
//             password: event.target.value,

//         });
//         this.props.handlepassword(this.state.password);
//     }
//     render() {
//         return (
//             < TextField label="password" type="text"
//                 value={this.state.password}
//                 onChange={this.handleChange}
//             />
//         )
//     }
// }


