
// Added import to provide access to the React namespace for type definitions
import React from 'react';

export interface Benefit {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TechnicalDetail {
  feature: string;
  benefit: string;
}

export interface HouseImage {
  url: string;
  caption: string;
}

export interface DocumentInfo {
  name: string;
  type: 'PDF' | '360' | 'LINK' | 'IMAGE';
  url: string;
}

export interface LocationHighlight {
  label: string;
  time: string;
  icon: React.ReactNode;
}
