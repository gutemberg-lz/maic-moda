"use client"
import { ReactNode, createContext, useState } from "react";

type OpenSideBarContextType = {
  open: boolean;
  setOpen: (open: boolean) => void;
};
export const OpenSideBarContext = createContext<OpenSideBarContextType | null>(null);
type Props = {
  children: ReactNode;
};
export const OpenSideBarProvider = ({ children }: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <OpenSideBarContext.Provider value={{ open, setOpen }}>
      {children}
    </OpenSideBarContext.Provider>
  );
};
