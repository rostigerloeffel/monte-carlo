import './App.css'
import Home from './Home';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import ThemeToggle from './components/ThemeToggle';
import LanguageToggle from './components/LanguageToggle';
import AppTour from './components/AppTour';
import TourButton from './components/TourButton';
import { useState, useEffect, useCallback } from 'react';

function App() {
  const [showTour, setShowTour] = useState(false);
  const [input, setInput] = useState("");
  const [remaining, setRemaining] = useState("");

  useEffect(() => {
    // Check if user has seen the tour before
    const tourSeen = localStorage.getItem('tour-seen');
    if (!tourSeen) {
      // Show tour on first visit
      setShowTour(true);
      localStorage.setItem('tour-seen', 'true');
    }
  }, []);

  const handleStartTour = useCallback(() => {
    setShowTour(true);
  }, []);

  const handleCloseTour = useCallback(() => {
    setShowTour(false);
  }, []);

  const handleTourInputChange = useCallback((newInput: string, newRemaining: string) => {
    setInput(newInput);
    setRemaining(newRemaining);
  }, []);

  return (
    <LanguageProvider>
      <ThemeProvider>
        <TourButton onStartTour={handleStartTour} />
        <ThemeToggle />
        <LanguageToggle />
        <Home input={input} setInput={setInput} remaining={remaining} setRemaining={setRemaining} />
        <AppTour isVisible={showTour} onClose={handleCloseTour} onInputChange={handleTourInputChange} />
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App
