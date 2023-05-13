import { Routes, Route} from "react-router-dom";
import { Layout } from './components/layout';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { PAGES } from "./utils/consts";
import { ReactNode, useMemo, useState } from "react";
import { API } from "./server/server";
import { UsersContext } from "./contexts/user-context";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()

export const App =()=> {
  
  const [user, setUser] = useState(API.getFirstUser());   
  const userValue = useMemo(
      () => ({ user, setUser }), 
      [user]
  );

  return (
    <QueryClientProvider client={queryClient}>
    <UsersContext.Provider value={userValue}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Routes>
          <Route path="/" element={<Layout />}>
            {PAGES.map(page=>{
                  const {path, display, render} = page;
                  const pathProp = path ? {path} : {index: true};
                  return <Route key={display} {...pathProp} element={render() as ReactNode} />
            })}  
          </Route>
        </Routes>
      </LocalizationProvider>
    </UsersContext.Provider>
    </QueryClientProvider>
  );
}
