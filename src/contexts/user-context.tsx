import { createContext } from "react";

export const UsersContext = createContext({
    user: '',
    setUser: (user:string)=>{}
  });
  