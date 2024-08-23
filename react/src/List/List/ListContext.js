import { createContext, useContext } from 'react';

// Create a context for the List component
const ListContext = createContext();

// Custom hook to use the List context
const useListContext = () => {
  const context = useContext(ListContext);
  if (!context) {
    throw new Error('useListContext must be used within a ListProvider');
  }
  return context;
};

export { ListContext, useListContext };

