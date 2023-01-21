import { useEffect, useState } from 'react';

export const useZohoChat = () => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    window.addEventListener('zohoReady', () => setReady(true));
    return () => {
      window.removeEventListener('zohoReady', () => setReady(false));
    };
  }, []);
  return {
    ready,
    click: () => {
      const button = document.getElementById('zsiq_float');
      button!.click();
    },
  };
};
