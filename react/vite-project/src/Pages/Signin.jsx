import { Logo } from "../Components/Icons/logo" 
import { useNavigate } from "react-router-dom"
export function SignIn(){
        const navigate = useNavigate()
        function route(){
          navigate("/login")
        }

    return <div className="flex justify-center w-screen h-screen items-center ">
    <div className="border rounded-lg border-gray-900 p-20 shadow-lg">
      <div className='flex-col flex m-10 '>
        <div className='flex justify-center text-red-600'>
          <Logo />
        </div>
        <label className="block text-sm/6 font-medium text-gray-900 mt-10" >Email address</label>
        <input className='border rounded-sm px-3 py-1.5' id="email" placeholder="Enter your email address" type="text"></input>

        <label className="block text-sm/6 font-medium text-gray-900">Password</label>
        <input className='border rounded-lg px-3 py-1.5' id="password" placeholder="Enter your Password" type="password"></input>

        <div className='m-5 flex justify-center'>
          <button onClick={route}className='border rounded-lg px-3 py-1.5 text-white bg-blue-700 hover:bg-gray-500 ' type="submit">click me</button>
        </div>
      </div>
    </div>
  </div>
}