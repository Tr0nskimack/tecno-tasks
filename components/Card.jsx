
import React from 'react'
import { RiEdit2Line, RiMessage3Line } from "react-icons/ri";


const Card = ({text, nombre, id, image, setDragged, list}) => {
    function handleDragStart  (event) {
        debugger
        setDragged({ 
            data: {
            text, image, id, nombre

        },
        list: event.target.closest('[data-list]').dataset.list
        })
        /* console.log(id) */
    }
  return (
    <div draggable onDragStart={handleDragStart}  className='bg-slate-100 text-slate-900 rounded-md p-3 flex flex-col gap-4 hover:cursor-move transition-all'>
        <div className="flex justify-between">
            <div className='flex justify-center items-center gap-2'>
                <img className='w-12 h-12 rounded-full' src={image} alt="" />
                <p className='font-semibold'>{nombre}</p>
            </div>
            <RiMessage3Line className="text-2xl"/>
        </div>
        <div className="flex justify-between ">
                <p className='font-semibold'>{text}</p>
                <RiEdit2Line className="text-2xl"/>
        </div>
        <div className="flex flex-col">
            <p className='font-semibold'>{id}</p>

        </div>
    </div>
  )
}

export default Card
