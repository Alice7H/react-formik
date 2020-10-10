import React from 'react';
import './App.css';
// import OldYoutubeForm from './components/OldYoutubeForm';
// import YoutubeForm from './components/YoutubeForm';
// import FormikContainer from './components/form2/FormikContainer';
import LoginForm from './components/form3/LoginForm';
// import RegistrationForm from './components/form3/RegistrationForm'
// import EnrollmentForm from './components/form3/EnrollmentForm';
import {theme, ThemeProvider } from '@chakra-ui/core'

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
        {/* 
          <OldYoutubeForm/>
          <YoutubeForm/>
          <FormikContainer/>      
          <RegistrationForm/>
           <EnrollmentForm/>
         */}

          <LoginForm/> 
         {/*installed Chakra UI Library */}
    </div>
    </ThemeProvider>
  );
}

export default App;
