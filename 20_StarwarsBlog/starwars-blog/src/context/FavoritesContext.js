import React, { createContext, useReducer, useContext } from 'react';

// Action Types
const ADD_FAVORITE = 'ADD_FAVORITE';
const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

// Define the context
const FavoritesContext = createContext();

// Reducer to manipulate the favorites state
const favoritesReducer = (state, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      // Add item to favorites if not already present
      return state.includes(action.id) ? state : [...state, action.id];
    case REMOVE_FAVORITE:
      // Remove item from favorites
      return state.filter(favoriteId => favoriteId !== action.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

// Provider component that wraps your app and makes the favorites array accessible to any child component
export const FavoritesProvider = ({ children }) => {
  const [favorites, dispatch] = useReducer(favoritesReducer, []); // Initialize with an empty array

  // Value that will be supplied to descendants of this provider
  const value = { favorites, dispatch };

  return (
    <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
  );
};

// Hook for components to get the favorites object and re-render when it changes
export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export default FavoritesContext;
