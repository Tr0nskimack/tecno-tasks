import { useEffect, useState } from "react"
import Card from "../../components/Card"
import Header from "../../components/Header"
import Lists from "../../components/Lists"


const  tareaList = [
  {
      text: "Al integrarse, trabajára corrido sin descanso, actualmente de vacaciones",
      nombre: "Jesus Hernandez",
      image: "https://pps.whatsapp.net/v/t61.24694-24/339617978_876233616815312_8100294183600090409_n.jpg?ccb=11-4&oh=01_AdQUVyAl7gJr9BuBLT7SD29Eb8socd4KhvJVmbKhUjSxHQ&oe=64491D25",
      id: 'tareaList-task-1'
      
      
    },
    {
      text: " Quedara asignado a solo lecheria ",
      nombre: "Frank Gil",
      image: "https://pps.whatsapp.net/v/t61.24694-24/317718050_235086395512972_5590840811067221132_n.jpg?ccb=11-4&oh=01_AdQvvlpZTa5uFBoBpF5ZH9o35-jF2Ebo7rv2n12Ou4WpjQ&oe=64494459",
      id: 'tareaList-task-2'
      
      
    },
    
  ]
  const  enProceso = [
    {
      text: " enProceso Implementar inicio de sesion",
      nombre: "Angel Cedeño",
      image: "https://pps.whatsapp.net/v/t61.24694-24/328714928_1273795563569329_6313409699528907431_n.jpg?ccb=11-4&oh=01_AdQvC08ncpHhyY5zzvBITK1tfVAZzREYD7TlD6788YfIOQ&oe=64492BA3",
      id: 'enProceso-task-1'
      
      
    },
    {
      text: " enProceso Implementar inicio de sesion",
      nombre: "Jefferson Mariño",
      image: "https://pps.whatsapp.net/v/t61.24694-24/300105315_586923056270307_3383213460242976027_n.jpg?ccb=11-4&oh=01_AdStBXARclCKk5Ee3K1m9R5UhC1OmWEuwWx3c6qj9hCgiw&oe=644945FC",
      id: 'enProceso-task-2'
      
      
    },
    
  ]
  const  realizado = [
    {
      text: "realizado Implementar inicio de sesion",
      nombre: "Angel Cedeño",
      image: "https://pps.whatsapp.net/v/t61.24694-24/328714928_1273795563569329_6313409699528907431_n.jpg?ccb=11-4&oh=01_AdQvC08ncpHhyY5zzvBITK1tfVAZzREYD7TlD6788YfIOQ&oe=64492BA3",
      id: 'realizado-task-3'

  
  },

]


const index = () => {
const [dragged, setDragged] = useState(null)

  const [listOflist, setlistOfList] = useState({
    tareaList,
    enProceso,
    realizado
  })

  /* useEffect(() =>{
    setTimeout(() =>{
      const listOflistClone = structuredClone(listOflist)
      listOflistClone.enProceso.push({
        text: "Que paso como estas",
        id: crypto.randomUUID()
      })
    },5000)
  }, []) */
  
  function handleDrop(event) {
    event.preventDefault()
    const list = event.currentTarget.dataset.list
    const listOflistClone = structuredClone(listOflist)
    const newList = listOflistClone[dragged.list].filter(item => item.id !== dragged.data.id)
    listOflistClone[dragged.list] = newList
    listOflistClone[list].push(dragged.data)
    setlistOfList(listOflistClone)
     /* console.log(event) */
  }
  
  
  return (
    <>
    <Header/>
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-500">Asignaciones</h1>
      <main className="flex gap-4 justify-between ">

        <Lists
        nombre="Tareas" 
        handleDrop = {handleDrop}
        id="tareaList"
        >
          
          {
            listOflist.tareaList.map((item, index) => (
              <Card setDragged={setDragged} {...item} key={item.id}/>

            ))
          }
        </Lists>
        <Lists
        nombre="En Proceso" 
        handleDrop = {handleDrop}
        id="enProceso"
        >
          
          {
            listOflist.enProceso.map((item, index) => (
              <Card setDragged={setDragged} {...item} key={item.id}/>

            ))
          }
        </Lists>
        <Lists
        nombre="Terminadas" 
        handleDrop = {handleDrop}
        id="realizado"
        >
          
          {
            listOflist.realizado.map((item, index) => (
              <Card setDragged={setDragged} {...item} key={item.id}/>

            ))
          }
        </Lists>
      </main>
    </div>
    </>
  )
}

export default index
