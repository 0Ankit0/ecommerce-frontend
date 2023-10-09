"use client";

import React, { createContext } from "react";

type contextProviderType = {
  children: React.ReactNode | string;
};

const cards = [
  {
    id: "1",
    img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    title: "Card 1",
    description: "This is card first",
    price: "Rs 200",
  },
  {
    id: "2",
    img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    title: "Card 2",
    description: "This is card second",
    price: "Rs 300",
  },
  {
    id: "3",
    img: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    title: "Card 3",
    description: "This is card three",
    price: "Rs 900",
  },
  {
    id: "4",
    img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    title: "Card 4",
    description: "This is card four",
    price: "Rs 700",
  },
  {
    id: "5",
    img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    title: "Card 5",
    description: "This is card five",
    price: "Rs 1700",
  },
];
export const ProductContext = createContext(cards);
export default function ProductContextProvider({
  children,
}: contextProviderType) {
  return (
    <ProductContext.Provider value={cards}>{children}</ProductContext.Provider>
  );
}
