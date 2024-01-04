import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { useState } from 'react';
import Router from "Router";
import { AppProvider } from 'context';

const App = () => {   
  const [isLoading, setIsLoading] = useState(false);

  return (
    <AppProvider
      value={{
        isLoading,
        setIsLoading }}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
      </AppProvider>
  );
};

export default App;