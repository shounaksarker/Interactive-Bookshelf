'use client'
import React from 'react'
import { createContext, useState } from 'react';

export const BookshelfContext = createContext();

export const BookshelfProvider = ({children}) => {
    const [shelf, setShelf] = useState([]);
  return (
    <BookshelfContext.Provider value={{shelf, setShelf}}>
      {children}
    </BookshelfContext.Provider>
  )
}
