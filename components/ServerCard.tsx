import { ChatAlt2Icon, DotsVerticalIcon, PaperClipIcon, PlusIcon } from '@heroicons/react/outline'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useSWR from 'swr'
import {io} from 'socket.io-client'


const ServerCard = ({server}:any) => {
    const [positions, setPositions] = useState([])
    

    // -- socket

    // useEffect(() => {
    //   const socket = io(`http://${server.ip}:5009`,{transports:['websocket']})
    //   socket.on("posbitch",(data:any)=>{
    //     console.log("something",data)
    //     setPositions(data)
    //   })
    // },[])


    // -- useSWT

    const fetcher = async () => {
      const response = await fetch(`http://${server.ip}:5009/getPos`)
      const data = await response.json()
        return data
      
    }

    const {data,error}:any = useSWR(`http://${server.ip}:5009/getPos`,fetcher,{refreshInterval:1})

    if(error) return <div>"fuck you"</div>
    if(!data) return <div>'Loading'</div>


    // -- axios

    //    useEffect(() => {
    //     axios.get(`http://${server.ip}:5009/getPos`)
    //         .then( response  => {
    //                 setPositions(response.data)
    //                 console.log(response.data)
    //         })
    //         .catch(err => {
    //             console.log("fuck page positions",err)
    //         })

    // },[])


  return (
    <div  className="-z-50 bg-gray-100 p-3 rounded-md shadow-md flex flex-col relative overflow-hidden">
    <span className='w-full h-1 bg-gradient-to-r from-pink-700 to-red-200 
    absolute inset-x-0 top-0'></span>
    <h4 className="flex justify-between items-center">
      <span className='text-2xl text-gray-600'>{server.name}</span>
      <DotsVerticalIcon className='w-5 h-5 text-gray-500'/>
    </h4>
    
    {data.positions.map((pos :any,index:any) => {
        return <div className='bg-white rounded-md p-3 mt-3'>
               <div className='flex justify-between'>
              <div className='flex space-x-4 items-center'>
                <span className="flex space-x-2 items-center">
                    <h5 className='text-md text-lg leading-6'>
                    {pos.symbol}
                    </h5>  
                </span>
                <span className="flex space-x-2 items-center">
                <label className={`bg-gradient-to-r from-blue-600 to-blue-400
            px-2 py-1 rounded text-white text-sm
            ${pos.type === 0 ? 'from-blue-600 to-blue-400' :
             'from-red-600 to-red-400'}
            `}
            >
                {pos.volume}</label>
                </span>             
                 </div>
                 <h5 className={`text-md font-bold  text-lg leading-6 ${pos.profit > 0 ? 'text-blue-600' : 'text-red-600'} `}>
                   {parseFloat(pos.profit).toFixed(2)}
                    </h5>  
               
        
         
        
            </div>
  
        </div>
    })}

  
</div>
  )
}

export default ServerCard