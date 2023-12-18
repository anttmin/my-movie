import React, { useState } from 'react'

function Students(props) {

   



    const [name,setName] = useState(props.name)
    const [age,setAge] = useState(props.age)
    const [gender,setGender] = useState(props.gender)

   

   

  return (
    
   <>
    <ul>
        <li>Name:{name}</li>
        <li>Age:{age}</li>
        <li>Gender:{gender}</li>
       
    </ul>
   </>
  )
}

export default Students