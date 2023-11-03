import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import './index.css';

// theme
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
