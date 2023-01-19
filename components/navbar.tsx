import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState } from 'react'
import { useAuth } from '../context/AuthContext'


function MobileNav({open, setOpen}:any) {
  const {user, logout} = useAuth()
  const router = useRouter();
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out filter  `}>
           
            <div className="flex flex-col justify-center items-center mt-28 ">
                <Link onClick={() => {setOpen(!open)}} className={`text-2xl font-bold my-4 hover:text-red-300 ${router.pathname == "/" ? "text-red-500" : ""}  `} href="/" >
                    Home
                </Link>
                <Link onClick={() => {setOpen(!open)}} className={`text-2xl font-bold my-4 hover:text-red-300 ${router.pathname == "/positions" ? "text-red-500" : ""} `} href="/positions" >
                  Positions
                </Link>
                <Link onClick={() => {setOpen(!open)}} className={`text-2xl font-bold my-4 hover:text-red-300 ${router.pathname == "/servers" ? "text-red-500" : ""} `} href="/servers" >
                Servers
                </Link>
                 <Link onClick={() => {setOpen(!open),logout()}} className="text-2xl font-bold my-4 hover:text-red-300" href="#" >
                Logout 
               </Link>
            </div>  
        </div>
    )
}

export default function Navbar() {
  

    const [open, setOpen] = useState(false)
    return (
        <nav>
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="fixed right-7 -top-2.5 ">
                <div className="group z-50 relative w-6 h-6 mt-10 cursor-pointer flex-col justify-between items-center flex" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5" : ""}`} />
                </div>
            </div>
        </nav>
    )
}