import React, { useState} from 'react';
//import './App.css';

import Routes from './routes';
import GlobalStyle from './styles/global';
import { ThemeProvider } from 'styled-components';
import lightTheme from './styles/themes/light';
import darkTheme from './styles/themes/dark';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store } from './store';
import { StoreState } from './store/createStore';
import Header1 from './components/Header1';

function App() {

  const { dark } = useSelector((state : StoreState )=> state.theme)


  return (
    <>

        <ThemeProvider theme={dark ? darkTheme : lightTheme}>
          <GlobalStyle/>
          <Header1/>
          <Routes />
        </ThemeProvider>
    </>
    
  );
}

export default App;