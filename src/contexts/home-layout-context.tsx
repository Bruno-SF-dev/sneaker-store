'use client';

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react';

interface CartContextType {
  itemsPerRow: number;
  setItemsPerRow: Dispatch<SetStateAction<number>>;
}

const HomeLayoutContext = createContext({} as CartContextType);

export function HomeLayoutProvider({ children }: { children: ReactNode }) {
  const [itemsPerRow, setItemsPerRow] = useState<number>(4);

  return (
    <HomeLayoutContext.Provider value={{ itemsPerRow, setItemsPerRow }}>
      {children}
    </HomeLayoutContext.Provider>
  );
}

export const useHomeLayout = () => useContext(HomeLayoutContext);
