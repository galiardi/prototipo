import { createContext } from 'react';
import { Tip } from '../../interfaces';

interface ContextProps {
  tips: Tip[];
  [category: string]: Tip[] | { [id: string]: Tip | undefined };
  tipsByIdObj: { [id: string]: Tip | undefined };
}

export const TipsContext = createContext({} as ContextProps);
