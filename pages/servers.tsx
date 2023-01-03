import { addDoc, collection, deleteDoc, doc, DocumentData, onSnapshot, query, QuerySnapshot, updateDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db, serverCollection } from '../config/controller'
import { NewServerType } from '../types/server'
import {AiOutlinePlus} from 'react-icons/ai'
import ServerList from '../components/serverList'
import { useRouter } from 'next/router'
import Link from 'next/link'

const style = {
    bg: `bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0] block h-screen items-center justify-center p-4 md:flex`,
    container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
    heading: `text-3xl font-bold text-center text-gray-800 p-2`,
    form: `flex justify-between gap-1.5`,
    input: `border p-2 w-full text-xl`,
    button: `border p-4 bg-purple-500 text-slate-100`
}

const servers = () => {
    const Router = useRouter()
    const [servers,setServers] = useState<NewServerType[]>([])
    const [data, setData] = useState({
        name:'',
        ip:'',
        status:true,
    })

    //Create server
    const createServer = async (e: any) => {
        e.preventDefault(e);
        if(data.ip === '' && data.name === ''){
            alert('Хоосон байна сугаа.')
            return
        }
        await addDoc(collection(db,'servers'),{
            name: data.name,
            ip: data.ip,
            status: true
        })
        setData({
            name:'',
            ip:'',
            status:true,
        })
    }

    //Read server
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

    //Update server
    const toggleActive = async (server: { id: string; status: any }) => {
        await updateDoc(doc(db,'servers',server.id),{
            status: !server.status
        })
    }

    //Delete server
    const deleteServer = async (id: string) => {
        await deleteDoc(doc(db,'servers',id))
    }


  return (
    <div className={style.bg}>
        <div className={style.container}>
            <h3 className={style.heading} > <Link href='/'>Servers</Link> </h3>
            <form onSubmit={createServer} className={style.form}>
                <input onChange={(e: any) => setData({...data, name: e.target.value,})} value={data.name} type='text' inputMode='text' className={style.input} placeholder='Name'/>
                <input onChange={(e: any) => setData({...data, ip: e.target.value,})} value={data.ip} type='text' inputMode='decimal' className={style.input} placeholder='IP Address'/>
                <button className={style.button}><AiOutlinePlus size={30} /></button>
            </form>
            <ul>
                {servers.map((server, index) => (
                    <ServerList key={index} server={server} toggleActive={toggleActive} deleteServer={deleteServer} />
                ))}
                
            </ul>
        </div>
    </div>
  )
}

export default servers

// const [servers, setServers] = useState<NewServerType[]>([])
// useEffect(() => 
// onSnapshot(serverCollection, (snapshot:
//     QuerySnapshot<DocumentData>) => {
//     setServers(
//         snapshot.docs.map((doc) => {
//             return {
//                 id: doc.id,
//                 ...doc.data(),
//             };
//         })
//   );

// }),
// []
// );