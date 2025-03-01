"use client";

import React, { createContext, useContext, useState } from "react";

const CounterContext = createContext<{ count: number; increment: () => void }>({
  count: 0,
  increment: () => {},
});

export function useCounter() {
  return useContext(CounterContext);
}

export function CounterProvider({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);

  return (
    <CounterContext.Provider value={{ count, increment }}>
      {children}
    </CounterContext.Provider>
  );
}
