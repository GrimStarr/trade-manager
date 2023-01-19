import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiOutlineDown, AiOutlinePlus } from 'react-icons/ai'
import Image from 'next/image'
import {ChatAlt2Icon, DotsVerticalIcon, PaperClipIcon, PlusCircleIcon, PlusIcon} from '@heroicons/react/outline'
import CardItem from '../components/cartitem'
import BoardData from '../config/board-data.json'
import {DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { setServers } from 'dns'
import { onSnapshot, QuerySnapshot, DocumentData } from 'firebase/firestore'
import { serverCollection } from '../config/controller'
import { NewServerType } from '../types/server'
import ServerCard from '../components/ServerCard'
 

const Positions = () => {

    const [ready, setReady] = useState(false)
    const [boardData, setBoardData] = useState(BoardData)
    const [servers,setServers] = useState<NewServerType[]>([]);
    useEffect(() => {
      if(process.browser){
        setReady(true)
      }
    },[])
    useEffect(() => 
    onSnapshot(serverCollection, (snapshot:
        QuerySnapshot<DocumentData>) => {
        setServers(
            snapshot.docs.map((doc) => {
                return {
                    id: doc.id,
                    ...doc.data(),
                };
            })
    );

    }),[]);

    const onDragEnd = (re:any) => {
      console.log(re)
      let newBoardData = boardData;
      var dragItem =newBoardData[parseInt(re.source.droppableId)].items[re.source.index];
      newBoardData[parseInt(re.source.droppableId)].items.splice(re.source.index,1);
      newBoardData[parseInt(re.destination.droppableId)].items.splice(re.destination.index,0, dragItem);
      setBoardData(newBoardData);
    }

    // useEffect(() => {
    //     axios.get(`http://20.231.125.173:5009/getPos`)
    //         .then( response  => {
    //                 setPositions(response.data)
    //                 console.log(response.data)
    //         })
    //         .catch(err => {
    //             console.log("fuck page positions",err)
    //         })

    // },[])

  

  return (
    <div className='p-10 '>
    
      
      {/* Boarder columns */}
      {ready && (
      <DragDropContext onDragEnd={onDragEnd}>
        <div  className="grid grid-cols-1 lg:grid-cols-4 gap-5 my-5">
        {servers.map((serv,index) => {
                      return <div key={index}>
                       <ServerCard server={serv} />
                     
                      </div>
                    })}
       
  
        {
          BoardData.map((board,index) => {
            return(
              <div key={index}>
              <Droppable  droppableId={board.name}>
                {
                  (provider) => (
                    <div {...provider.droppableProps} ref={provider.innerRef} className=" bg-gray-100 p-3 rounded-md shadow-md flex flex-col relative overflow-hidden">
                    <span className='w-full h-1 bg-gradient-to-r from-pink-700 to-red-200 
                    absolute inset-x-0 top-0'></span>
                    <h4 className="flex justify-between items-center">
                      <span className='text-2xl text-gray-600'>{board.name}</span>
                      <DotsVerticalIcon className='w-5 h-5 text-gray-500'/>
                    </h4>
          
                    {
                      board.items.length > 0  && (
                        board.items.map((item:any,iIndex:any) => {
                          return (<CardItem key={iIndex} data={item} />)
                        })
                      )
                    }

              
                  </div>
                  )
                }
                </Droppable>
                </div>
          
            )
    
          })
        }
        </div>
      </DragDropContext>
      )}
    </div>
  )
}

export default Positions