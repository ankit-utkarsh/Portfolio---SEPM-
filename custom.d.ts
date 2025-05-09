// This file contains custom type declarations to help resolve TypeScript errors

// For modules without their own type declarations
declare module 'next-themes';
declare module 'framer-motion';
declare module 'lucide-react';

// Fix JSX IntrinsicElements if needed
import React from 'react';
declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
} 