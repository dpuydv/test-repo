import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react';
import Card from './Card';

function Users() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.github.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .then(() => setLoading(false))
        .catch((err) => console.log("error message : ", err));
    }, []);

    console.log(users)

  return (
    <section>
        {loading && <div>Loading...</div>}
        <div style={{display:"flex", width:"100%", gap:4, flexWrap:"wrap"} } >
        {
            users.map((user) => (<Card key={user.id} userId={user.id} userLogin={user.login} avatarUrl={user.avatar_url} user={user} />))
        }
        </div>
        
    </section>
  )
}

export default Users