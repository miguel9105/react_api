import React, { useState, useEffect } from 'react'
import './section.css';
import {UserCard} from '../UserCard/UserCard';

import userImg from '../../assets/vegetal.png'
import userImg2 from '../../assets/ensalada.png'
import userImg3 from '../../assets/verduras.png'


const users =[
  {
    id:1,
    name:'maguie boo',
    description:'Frontend dev',
    image: userImg
  },
  {
    id:2,
    name:'maguie boo2',
    description:'Frontend dev',
    image: userImg2
  },
  {
    id:3,
    name:'maguie boo3',
    description:'Frontend dev',
    image: userImg3
  }
]
export const Sectionn = () => {

  const [ count, setCount]= useState(0)

  

  useEffect(()=>{

    fetch('https://dummyjson.com/users')
    .then(res=>res.json())
    .then(data=>console.log(data.users))

  },[count])
    
  
  return (
      <section>
        {
          users.map((user)=>{
            return(
             <UserCard key={user.id} user={user}/>
            )
          })
        }
      </section>
      )
    }

  

