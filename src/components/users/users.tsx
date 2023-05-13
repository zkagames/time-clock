import { useContext } from "react";
import { API } from "../../server/server";
import { UsersSelect } from "./users.style";
import { UsersContext } from "../../contexts/user-context";

export const Users = ()=>{
    const users = API.getUsers();
    const {user, setUser } = useContext(UsersContext);
    return <UsersSelect onChange={e=>setUser(e.target.value)} defaultValue={user}>
        {users.map((u)=>
            <option key={u}>{u}</option>
        )}
    </UsersSelect>  
}