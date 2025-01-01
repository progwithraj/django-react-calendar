import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './redux-store/store.js'
import { BrowserRouter } from 'react-router-dom'
import { ConfigProvider, theme } from 'antd';
import { ThemeProvider } from './context/ThemeContext';
import customTheme from './config/theme.json';

const {  defaultAlgorithm } = theme;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <ThemeProvider>
    <ConfigProvider
          theme={{
            ...customTheme,
            algorithm: defaultAlgorithm,
          }}
        >
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ConfigProvider>
      </ThemeProvider>
    </Provider>
  </StrictMode>
);
