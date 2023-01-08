import React from 'react'
import { FaRegTrashAlt } from 'react-icons/fa'

const style = {
    li: `flex justify-between bg-slate-200 p-4 my-2 capitalize`,
    liComplete: `flex justify-between bg-slate-400 p-4 my-2 capitalize`,
    row: `flex items-center `,
    text: `ml-2 cursor-pointer`,
    textComplete: `ml-2 cursor-pointer line-through`,
    button: `cursor-pointer flex items-center`,
    input: ``
}

const ServerList = ({server, toggleActive, deleteServer}: any) => {
  return (
    <li className={server.status ? style.li : style.liComplete}>
        <div className={style.row}>
            <input className={style.input} onChange={() => toggleActive(server)} type="checkbox" checked={server.status ? false : true} />
            <p className={server.status ? style.text : style.textComplete}>{server.name}</p>
            <p className={server.status ? style.text : style.textComplete}>{server.ip}</p>
        </div>
            <button onClick={() => deleteServer(server.id)}>{<FaRegTrashAlt />}</button>
        
    </li>
  )
}

export default ServerList