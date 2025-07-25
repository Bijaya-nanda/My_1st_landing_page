import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// ✅ Inject Meta Pixel
const pixelScript = document.createElement('script');
pixelScript.innerHTML = `
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '2723131534561547');
  fbq('track', 'PageView');
`;
document.head.appendChild(pixelScript);

// ✅ Optional: noscript fallback (for non-JS browsers)
const noscript = document.createElement('noscript');
noscript.innerHTML = '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=2723131534561547&ev=PageView&noscript=1"/>';
document.body.appendChild(noscript);

// ✅ Mount the React app
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
