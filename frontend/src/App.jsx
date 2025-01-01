import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import { routes } from './routes';
import { useTheme } from './context/ThemeContext';
import AppLayout from './components/Layout/AppLayout';
import customTheme from './config/theme.json';

const { darkAlgorithm, defaultAlgorithm } = theme;

function App() {
  const { isDarkMode } = useTheme();

  const themeConfig = {
    ...customTheme,
    algorithm: isDarkMode ? [darkAlgorithm] : [defaultAlgorithm],
    token: {
      ...customTheme.token,
      colorBgContainer: isDarkMode ? '#141414' : '#ffffff',
      colorBgElevated: isDarkMode ? '#1f1f1f' : '#ffffff',
      colorText: isDarkMode ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.85)',
    },
  };

  return (
    <ConfigProvider theme={themeConfig}>
      <AppLayout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Routes>
        </Suspense>
      </AppLayout>
    </ConfigProvider>
  );
}

export default App;