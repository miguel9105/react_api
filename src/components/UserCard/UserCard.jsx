import React, { useState } from 'react'

export const UserCard = ({user}) => {
    // declaracion de hookcon su nombre, llamado , estado inicial
      const [isContacted, setIsContacted] = useState(false)
    // definimos los campos que vamos afectar del arreglo users
      const {id,name,description,image}= user
    // evento para desatar el hook 
      const handleClink=()=>{

        setIsContacted(!isContacted);
      }
      console.log(`targetas de ${name} fue eliminada`)

return (
    <div className='card'>
      <img className='image' src={image} alt={name} />
        <h2 className='name'>{name}</h2>
        <p className=''>{description}</p>
        <button id={id} onClick={()=> handleClink()}>
            {
                isContacted ? 'Contatado' : 'Contactar'
            }
            </button>
    </div>
        
    
  )
  }
  


export default UserCard