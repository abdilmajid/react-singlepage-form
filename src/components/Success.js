import React, { Component, Fragment } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

class Success extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Fragment>
          <AppBar className='appBar1' title='Confirm User Info'/>
          <h1>Congrats on Signing Up</h1>
        </Fragment>
      </MuiThemeProvider>
    )
  }
}



export default Success;


