import React from 'react'
import './Card.css'
function Card({userId, userLogin, avatarUrl,user}) {
  return (
    <div className='container'>
        {/* {props} */}
        {/* {console.log(props)} */}
        {/* {userLogin} */}
        <img src={user.avatar_url} alt='user image' />
        {userLogin}
        {/* {console.log(user)} */}
        {/* console.log({user}) */}
    </div>
  )
}

export default Card