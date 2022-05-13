import React from 'react';
import './App.css';
import OldYoutubeForm from './components/form1/OldYoutubeForm';
import YoutubeForm from './components/form1/YoutubeForm';
import FormikContainer from './components/form2/FormikContainer';
import RegistrationForm from './components/form3/RegistrationForm'
import EnrollmentForm from './components/form3/EnrollmentForm';
import LoginForm from './components/form3/LoginForm';
import {theme, ThemeProvider } from '@chakra-ui/core'

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
        
        <OldYoutubeForm/>
        <YoutubeForm/>
        <FormikContainer/>      
        <RegistrationForm/>
        <EnrollmentForm/>
        <LoginForm/> 
    </div>
    </ThemeProvider>
  );
}

export default App;
