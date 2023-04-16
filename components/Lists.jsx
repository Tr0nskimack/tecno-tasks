import React from 'react'



const Lists = ({children, nombre, handleDrop, id}) => {
  

  function handleDragOver(event) {
    event.preventDefault()
    console.log(event)

  }
    return (
    <div data-list={id} onDragOver={handleDragOver} onDrop={handleDrop} className='p-4 bg-slate-400 rounded-md flex-1 '>
      <h2 className='text-gray-900 font-bold mb-4 '>{nombre}</h2>
      <div className='flex flex-col gap-4'>
        {children}

      </div>
    </div>
  )
}

export default Lists
