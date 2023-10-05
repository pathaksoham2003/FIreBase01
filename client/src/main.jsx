import { GoogleOAuthProvider } from '@react-oauth/google';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// oauth consent screen created the oauth credentials for an application
// Oauth client id created in credentials sidebar
// CLient id 45346336800-osjsbuchfgvsdrj9nmn1ufaea43b1ovp.apps.googleusercontent.com
// Client secret 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

ReactDOM.createRoot(document.getElementById('root')).render(
    <GoogleOAuthProvider clientId="45346336800-osjsbuchfgvsdrj9nmn1ufaea43b1ovp.apps.googleusercontent.com">
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </GoogleOAuthProvider>
  )
