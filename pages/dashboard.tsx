import { DocumentData, onSnapshot, QuerySnapshot } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { json } from 'stream/consumers'
import { serverCollection } from '../config/controller'
import { useAuth } from '../context/AuthContext'
import { NewServerType } from '../types/server'
import axios from 'axios'
 
const Dashboard = () => {
    const router = useRouter()
    const [servers,setServers] = useState<NewServerType[]>([])
    const [data,setData] = useState({
        symbol:'XAUUSD',
        type:'',
        order:false,
        price:'',
        sl:0,
        tp1:'',
        tp2:'',
        tp3:'',


    })
    const {user, logout} = useAuth()

    // load servers

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

    //post to server
    const fetchToServer = async (value:any) =>{
        
        const res = await fetch(`http://${value.ip}:5009/buy`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (!res.ok) {
            // This will activate the closest `error.js` Error Boundary
            throw new Error('Failed to fetch data');
          }
        
          return res.json();

        // axios.post(`https://${value.ip}:5009/buy`,data)
        //     .then( response  => {
        //         if(response.data.API === 'Respoinse Positive'){
        //             alert("Амжилттай ;)");
        //             setData({
        //                 symbol:'XAUUSD',
        //                 type:'',
        //                 order:false,
        //                 price:'',
        //                 sl:0,
        //                 tp1:'',
        //                 tp2:'',
        //                 tp3:'',
        //             })
        //         }
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })

    }

    

    const sendOrder = async (e: any) => {
        e.preventDefault(e);

        servers.map((server) => (
            fetchToServer(server)
        ));
        
   
    }

    return (
        <div className='bg-gradient-to-r from-[#9f7AEA] to-[#FEE2FE] block h-screen items-center justify-center p-4 md:flex'>
            <div className="container mx-auto" >
                <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
                    
                    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-4 bg-no-repeat bg-center bg-cover bg-picture">
                        <h1 className="text-white font-medium text-3xl "onClick={() => {router.push('/servers')}} >Homey</h1>
                        <div>
                    <p className='text-white italic text-lg'>Lez print some dollar<span onClick={() => {logout()}}>. </span></p>
                    </div>
                    </div>

                    <div className="w-full lg:w-1/2 py-2 px-12">
                        <form onSubmit={sendOrder}>
                            <div className='mt-5'>
                                <input onChange={(e: any) => setData({...data, price: e.target.value,})} value={data.price} type="decimal"  inputMode='decimal' placeholder="Price"  className='border border-gray-400 py-1 px-2  rounded-md w-full'/>    
                            </div>    
                            <div className='mt-5'>
                                <input onChange={(e: any) => setData({...data, sl: e.target.value,})}  type="decimal"  inputMode='decimal' placeholder="Stop Loss"  className='border border-gray-400 py-1 px-2  rounded-md w-full'/>    
                            </div>    
                            <div className="mt-5">
                                <input onChange={(e: any) => setData({...data, tp1: e.target.value,})}  value={data.tp1} type="decimal" inputMode='decimal' placeholder="Take Profit 1" className='border border-gray-400 py-1 px-2 rounded-md w-full'/> 
                            </div>
                            <div className="mt-5">
                                <input onChange={(e: any) => setData({...data, tp2: e.target.value,})} value={data.tp2} type="decimal" inputMode='decimal' placeholder="Take Profit 2" className='border border-gray-400 py-1 px-2 rounded-md w-full'/> 
                            </div>
                            <div className="mt-5">
                                <input onChange={(e: any) => setData({...data, tp3: e.target.value,})} value={data.tp3} type="decimal" inputMode='decimal' placeholder="Take Profit 3" className='border border-gray-400 py-1 px-2 rounded-md w-full'/> 
                            </div>

                            <div className="mt-5" >
                                
                                <input type="checkbox" onChange={(e: any) => setData({...data, order: !data.order})}  checked={data.order} className='border border-gray-400'/> 
                                <span className='font-medium '> Market Order</span>
                            </div>
                            <div className='mt-5 grid grid-cols-2 gap-1.5'>
                                <button onClick={() => setData({...data, type:'BUY'})} className="w-full bg-green-500 py-3 text-center text-white font-medium rounded-md shadow-md transition hover:bg-green-600">Buy</button> 
                                <button onClick={() => setData({...data, type:'SELL'})} className="w-full bg-red-600 py-3 text-center text-white font-medium rounded-md shadow-md transition hover:bg-red-700">Sell</button>    
                            </div>  
                            <div className="mt-5">
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Dashboard