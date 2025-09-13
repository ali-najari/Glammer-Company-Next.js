"use client";

import MainContext from "../context/mainContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MainContext>
      {children}
      <div id="modalRoot" />
    </MainContext>
  );
}
