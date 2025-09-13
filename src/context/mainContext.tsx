"use client";

import { createContext, useEffect, useState, ReactNode } from "react";
import IUser from "@/types/IUser";

interface IProps {
  children: ReactNode;
}

interface IState {
  user: IUser | null;
}

interface IContextOutProps {
  user: IUser | null;
  dispatch: (key: string, value: any) => void;
  isAuthenticated: () => boolean;
  logout: () => void;
}

export const Context = createContext<IContextOutProps>({} as IContextOutProps);

const MainContext = ({ children }: IProps) => {
  const [state, setState] = useState<IState>({ user: null });

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setState({ user: JSON.parse(savedUser) });
    }
  }, []);

  const dispatch = (key: string, value: any) => {
    setState({ ...state, [key]: value });
  };

  const isAuthenticated = () => {
    return !!state.user?.email;
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setState({ user: null });
  };

  return (
    <Context.Provider
      value={{
        ...state,
        dispatch,
        isAuthenticated,
        logout,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default MainContext;
