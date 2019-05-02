import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled, {ThemeProvider, injectGlobal } from 'styled-components';

import Dashboard from './components/Dashboard'

const theme = {
  darkGray: '#8F91A2',
  winterWizard:' #A3D5FF',
  lightBlue:' #D9F0FF',
  offWhite:' #F4F7F8',
  black: '#424B54',
  maxWidth: '800px',
  borderR: '5px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
};

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;


class Profile extends Component {
  render(){
    return(
      <ThemeProvider theme={theme}>
          <Inner>
            <Dashboard />
          </Inner>
      </ThemeProvider>
    )
  }
};

const profileAnchor  = document.querySelector('.profile-wrapper');
ReactDOM.render(<Profile />, profileAnchor);
