import { Outlet, NavLink } from "react-router-dom";
import {TopLinks, MainPage, TopTabs} from '../style/style'
import { PAGES } from "../utils/consts";
import { useContext } from "react";
import { Users } from "./users/users";
import { UsersContext } from "../contexts/user-context";

export const Layout=()=> {
  const {user}= useContext(UsersContext);
  
  return (
      <MainPage>  
            <TopTabs>
              <TopLinks>
              <img src={`images/${user}.png`} title={`User: ${user}`}/>
                {PAGES.map(page=>{
                  const {path = '/', display} = page;
                  return <NavLink key={display} to={path}>{display}</NavLink> }
                  )}
              </TopLinks>
            </TopTabs>        
        <Outlet />
      </MainPage>
    );
  }