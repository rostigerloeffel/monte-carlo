import './App.css'
import Home from './Home';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import ThemeToggle from './components/ThemeToggle';
import LanguageToggle from './components/LanguageToggle';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <ThemeToggle />
        <LanguageToggle />
        <Home />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App
