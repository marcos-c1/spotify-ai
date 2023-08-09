import { createContext } from "react";

export const LoginContext = createContext({ clientID: process.env.REACT_APP_CLIENT_ID, code: null });