
import Students from './Components/Students'
import Form from './Components/Form'

const App = () => {

  const students = [
    {
      name : 'aung aung',
      age : 13,
      gender : 'boy'

    },
    {
      name : 'U aung',
      age : 53,
      gender : 'Men'

    },
    {
      name : 'myo aung',
      age : 23,
      gender : 'adult'

    },

  ]

  const addNewmember = (menInfo) =>{
    console.log(menInfo)
  }
  return (
    <>


      <Students name={students[0].name} age={students[0].age} gender={students[0].gender}/>
      <Students name={students[1].name} age={students[1].age} gender={students[1].gender}/>
      <Students name={students[2].name} age={students[2].age} gender={students[2].gender}/>

      <Form addNewmember={addNewmember} />

    </>
  )
}

export default App