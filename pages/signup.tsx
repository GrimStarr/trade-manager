import React, {useState} from 'react'
import { FaUser,FaLock } from 'react-icons/fa'
import { useAuth } from '../context/AuthContext'

const SignUp = () => {
//     const {user,signup} = useAuth()
//     const [data, setData] = useState({
//         email: '',
//         password: '',
//     })


// const handleSignup = async (e: any) =>{
//     e.preventDefault()

//     try {
//         await signup(data.email,data.password)
//     } catch (err) {
//         console.log(err)
//     } 

//     console.log(data)
// }

return(
//     <div className='bg-gradient-to-r from-green-300 via-yellow-50 to-green-300 block h-screen items-center justify-center p-4 md:flex'>
//     {/** login card */}
//     <div className='bg-cover bg-image flex flex-col items-center max-w-screen-lg overflow-hidden rounded-lg shadow-lg text-gray-600 w-full md:flex-row'>
//       {/** logo */}
//       <div className='backdrop-blur-sm backdrop-filter flex flex-col items-center justify-center p-4 text-white 2-full md:w-1/2'>
//         <h1 className='font-medium text-3xl'>Grinding</h1>
//         <p className='italic text-lg'>Lez get some money</p>
//       </div>

//       {/**form */}
//       <div className='bg-white flex flex-col items-center p-4 space-y-8 w-full md:w-1/2'>
//         {/**welcome */}
//         <div className='flex flex-col items-center'>
//           <h1 className='font-medium text-green-400 text-xl'>Welcome back</h1>
//           <p>Login to earn</p>
//         </div>

//         {/**inputs */}
//         <form className='flex flex-col items-center space-y-4' onSubmit={handleSignup}>
//           <div className='relative'>
//             <span className='absolute flex inset-y-0 items-center pl-4 text-gray-400'><FaUser /></span>
//             <input className='border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring2 focus:ring-green-300'
//               onChange={(e: any) => 
//                 setData({...data,
//                 email: e.target.value,})} value={data.email} required placeholder="Username..." type="text" />
//           </div>
//           <div className='relative'>
//             <span className='absolute flex inset-y-0 items-center pl-4 text-gray-400'><FaLock /></span>
//             <input className='border border-gray-300 outline-none placeholder-gray-400 pl-9 pr-4 py-1 rounded-md transition focus:ring2 focus:ring-green-300' 
//               onChange={(e: any) => 
//                 setData({...data,
//                 password: e.target.value,})} value={data.password} required placeholder="Password..." type="Password" />
//           </div>
//           <button className='bg-green-400 font-medium inline-flex items-center px-3 py-1 rounded-md shadow-md text-white transition hover:bg-green-500' type='submit'>
//             <FaUser className="mr-2" />
//             Login now
//           </button>
//         </form>
//       </div>
//     </div>
//   </div>
<div>
    there is only 1 user
</div>
)

}

export default SignUp