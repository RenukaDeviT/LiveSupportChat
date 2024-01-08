import ReactDOM from 'react-dom/client';
import { ErrorBoundary } from "react-error-boundary";
import './index.css';
import { ThemeProvider } from 'styled-components';
import EmotionProvider from 'ui/styles/theme';
import UnSecurePage from 'pages/UnSecurePage/UnSecurePage';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Error from './components/templates/Error/Error'

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

    root.render(
      <ErrorBoundary fallback={<Error />}>
        <ThemeProvider theme={{ isWidget: false }}>
          <EmotionProvider>
            { window.self === window.top ?
            <App />
            :          
            <UnSecurePage />
            }
          </EmotionProvider>
        </ThemeProvider>
      </ErrorBoundary>
    );

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
