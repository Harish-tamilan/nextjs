import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function index(props) {
    const [users, setUsers] = useState();

    useEffect(async()=>{
        console.log('hostname : ', window.location.hostname);
        const host = window.location.host;
        let url;
        if(host.includes('http')){
            url = `${host}/api/users`;
        }else{
            url = `http://${host}/api/users`;
        }
        console.log('url : ', url);
        const response = await axios.get(url);
        console.log('response of fetchUsers : ', response);
        if(response && response.status == 200){
            setUsers(response.data.data)
        }
    },[]);

    return (
        <>
            Users page
            {users && <ul>
                {users.map((user)=><li>
                    <span>id : {user.id}</span>
                    <span>name : {user.name}</span>
                </li>)}
                </ul>}
        </>
    );
}

export default index;