import React, { useState, useEffect } from 'react'
import './section.css';
import {UserCard} from '../UserCard/UserCard';


export const Sectionn = () => {

  const [ count, setCount]= useState(0)
  const [users, setUsers]= useState([])

  
  useEffect(()=>{

    fetch('https://dummyjson.com/users')
    .then(res=>res.json())
    .then(data=>{console.log(data.users),setUsers(data.users)})
    /* getting carts of user with id 6 */


  },[count])
    // const handleClick = () =>{
    //   setCount(count +1)
    // }
  
  return (
    <div>
      <h2>{count}</h2>
      <button></button>

      <section>
        {
          users.map((user)=>{
            return(
             <UserCard key={user.id} user={user}/>
            )
          })
        }
      </section>
    </div>
      
      )
    }

  

