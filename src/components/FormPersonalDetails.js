import React, { Component, Fragment } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Textfield from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';



class FormPersonalDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <Fragment>
          <AppBar className='appBar1' title='Enter User Details'/>
          <Textfield 
            hintText='Enter Your City'
            floatingLabelText='City'
            onChange={handleChange('city')}
            defaultValue={values.city}
          />
          <br/>
          <Textfield 
            hintText='Enter Your Occupation'
            floatingLabelText='Occupation'
            onChange={handleChange('occupation')}
            defaultValue={values.occupation}
          />
          <br/>
          <Textfield 
            hintText='Enter Your Bio'
            floatingLabelText='Bio'
            onChange={handleChange('bio')}
            defaultValue={values.bio}
          />
          <br/>
          <RaisedButton
            label='back'
            primary={false}
            className='styleButton'
            onClick={this.back}
          />
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



export default FormPersonalDetails;
