import React, { Component, Fragment } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Textfield from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';



class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <Fragment>
          <AppBar className='appBar1' title='Enter User Details'/>
          <Textfield 
            hintText='Enter Your First Name'
            floatingLabelText='First Name'
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
          />
          <br/>
          <Textfield 
            hintText='Enter Your Last Name'
            floatingLabelText='Last Name'
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
          />
          <br/>
          <Textfield 
            hintText='Enter Your Email'
            floatingLabelText='Email'
            onChange={handleChange('email')}
            defaultValue={values.email}
          />
          <br/>
          <RaisedButton
            label='Continue'
            primary={true}
            className='styleButton'
            onClick={this.continue}
          />

        </Fragment>
      </MuiThemeProvider>
    )
  }
}



export default FormUserDetails;
