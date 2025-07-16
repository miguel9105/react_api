import React, { useState } from 'react'

export const UserCard = ({user}) => {
    // declaracion de hookcon su nombre, llamado , estado inicial
      const [isContacted, setIsContacted] = useState(false)
    // definimos los campos que vamos afectar del arreglo users
      const {id,firstname,email,image, phone, role}= user
    // evento para desatar el hook 
      const handleClink=()=>{

        setIsContacted(!isContacted);
      }
      // console.log(`targetas de ${firstname} fue eliminada`)

return (
    <div className='card'>
      <img className='image' src={image} alt={firstname} />
        <h2 className='name'>{firstname}</h2>
        <p>{phone}</p>
        <p className=''>{email}</p>
        <p className=''>{role}</p>
        <button id={id} onClick={()=> handleClink()}>
            {
                isContacted ? 'Contatado' : 'Contactar'
            }
            </button>
    </div>
        
    
  )
  }
  


export default UserCard