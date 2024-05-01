import React from 'react';
import { ThemeProvider } from 'next-themes';

export default function Provider({ children }) {
  return (
    <ThemeProvider attribute='class'>
      {children}
    </ThemeProvider>
  );
}
