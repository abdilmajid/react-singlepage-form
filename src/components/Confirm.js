import React, { Component, Fragment } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';



class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // Send User Data to Express
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  }

  render() {
    const { values: {firstName, lastName, email, occupation, city, bio} } = this.props;
    return (
      <MuiThemeProvider>
        <Fragment>
          <AppBar className='appBar1' title='Confirm User Info'/>
          <List>
            <ListItem
              primaryText='First Name'
              secondaryText= {firstName}
            />
            <ListItem
              primaryText='Last Name'
              secondaryText= {lastName}
            />
            <ListItem
              primaryText='Email'
              secondaryText= {email}
            />
            <ListItem
              primaryText='Occupation'
              secondaryText= {occupation}
            />
            <ListItem
              primaryText='City'
              secondaryText= {city}
            />
            <ListItem
              primaryText='Bio'
              secondaryText= {bio}
            />                        
          </List>
          <br/>
          <RaisedButton
            label='back'
            primary={false}
            className='styleButton'
            onClick={this.back}
          />          
          <RaisedButton
            label='Confirm & Continue'
            primary={true}
            className='styleButton'
            onClick={this.continue}
          />

        </Fragment>
      </MuiThemeProvider>
    )
  }
}



export default Confirm;


