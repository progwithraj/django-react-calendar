import { Button, theme } from 'antd';
import { BsSun, BsMoonStars } from 'react-icons/bs';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { token } = theme.useToken();
  return (
    <Button 
      type="text"
      onClick={toggleTheme}
      icon={isDarkMode ? 
        <BsMoonStars size={20} style={{ color: token.colorPrimary }} /> : 
        <BsSun size={20} style={{ color: token.colorPrimary }} />
      }
    />
  );
};

export default ThemeToggle;