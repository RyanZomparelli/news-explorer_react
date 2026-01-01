import { createContext } from "react";

// The default context value is for, 1. just to explicitly define the shape of the context object,
// and 2. be fallback values in case the provider misses somthing but these are the bare
// minimum fields anyway. The default is not neccessary as the provider will pass the neccessary values.
// I set a default anyway.
const CurrentUserContext = createContext({
  currentUser: null,
  isLoggedIn: false,
});

export default CurrentUserContext;
