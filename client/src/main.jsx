import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { AppContextProvider } from './context/AppContext.jsx';
import { BrowserRouter } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';

const clerkPublishableKey = 'pk_test_bGFyZ2Utc2xvdGgtNDIuY2xlcmsuYWNjb3VudHMuZGV2JA'; // Ensure this is the correct key

if (!clerkPublishableKey) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ClerkProvider publishableKey={clerkPublishableKey} afterSignOutUrl="/">
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </ClerkProvider>
  </BrowserRouter>
);
