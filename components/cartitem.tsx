import { ChatAlt2Icon, PaperClipIcon, PlusIcon } from '@heroicons/react/outline'
import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import Image from 'next/image'
import { Draggable } from 'react-beautiful-dnd'

const CardItem = ({data}:any) => {
  return (
   <div>
     <Draggable index={data.id} draggableId={data.id.toString()}>
        {(provided) => (
            <div
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
             className="bg-white rounded-md p-3 mt-3">
            <label className={`bg-gradient-to-r from-blue-500 to-blue-200
            px-2 py-1 rounded text-white text-sm
            ${data.priority === 0 ? 'from-blue-500 to-blue-200' :
             data.priority === 1 ? 'from-green-500 to-green-200' :
             'from-red-500 to-red-200'}
            `}
            >
                {data.priority === 0 ? "Low Priority" : data.priority === 1 ?
                "Medium Priority" : "High Priority"}</label>
            <h5 className='text-md my-3 text-lg leading-6'>
                {data.title}
            </h5>
            <div className='flex justify-between'>
              <div className='flex space-x-4 items-center'>
                <span className="flex space-x-2 items-center">
                <ChatAlt2Icon className='w-4 h-4 text-gray-500' />
                <span>{data.chat}</span>
                </span>
                <span className="flex space-x-2 items-center">
                <PaperClipIcon className='w-4 h-4 text-gray-500' />
                <span>{data.attachment}</span>
                </span>             
                 </div>
        
                 <ul className='flex space-x-3 '>
                    {
                        data.assignees.map((ass:any,id:any) => {
                            return (<li key={id}>
                            <Image 
                            src="https://i.pinimg.com/736x/59/37/5f/59375f2046d3b594d59039e8ffbf485a.jpg"
                            width="36" height="36" objectFit="cover" className="rounded-full" alt={''} />
                          </li>)
                        })
                    }
                    <li>
                    <button className="border border-dashed flex items-center w-9 h-9 
                            border-gray-500 justify-center rounded-full">
                      <PlusIcon className="w-5 h-5 text-gray-500" />
                    </button>
                  </li>
               </ul>
        
            </div>
          </div>        
        )}
    </Draggable>
   </div>
  )
}

export default CardItem