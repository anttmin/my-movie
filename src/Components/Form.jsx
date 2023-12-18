import React, { useState } from 'react'

const Form = () => {
  const [name,setName] = useState('');
  const [age,setAge] = useState('');

  const trackName = (e) =>{
    setName(e.target.value)
  }

  const trackAge = (e) =>{
    setAge(e.target.value)
  }

  const showData = (e) =>{
    e.preventDefault();

    const data = {
        name,
        age
    }

  

    console.log(data)
}


  return (
   <form onSubmit={showData}>
   
    <input type='text' placeholder='name' onChange={trackName}/>
    <input type='text' placeholder='age' onChange={trackAge}/>

    <button type='submit'>submit</button>
   </form>
  )
}

export default Form