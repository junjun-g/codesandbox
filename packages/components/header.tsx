import React, { FC } from "react";

export const Header: FC<{ children: React.ReactNode }> = ({ children }) => (
  <h1 color="green">{children}</h1>
);
