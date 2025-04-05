import { useRef } from 'react'
import { SignIn } from '../Pages/Signin'
export function Header({productRef, teamRef, contactRef}){

const click=() => {productRef.current.scrollIntoView ({behavior:"smooth"})}
const lick=() => {teamRef.current.scrollIntoView ({behavior:"smooth"})}
const cick=() => {contactRef.current.scrollIntoView ({behavior:"smooth"})}
    return<div>
<div className="bg-green-700 bg-[url(image/photo.jpeg)]">
    <div className="sticky w-screen bg-green-700">
        <nav className=" flex justify-center">
            <div className="flex justify-between  w-5/6 py-8  text-white">
                <a href="/" className="text-amber-400">
                    <p className="font-myFont text-3xl">Unifisher farming</p>
                </a>
                {/* <HeaderComponent productRef={productRef}/> */}
                <ul className="flex gap-5">
                    <li> <button onClick={click} className="hover:text-yellow-500 font-myFont2 ">PRODUCTS</button></li>
                    <li> <a className="hover:text-yellow-500 font-myFont2">ABOUT US</a></li>
                    <li> <button onClick={lick}className="hover:text-yellow-500 font-myFont2" >TEAM</button></li>
                    <li> <button onClick={cick}className="hover:text-yellow-500 font-myFont2">CONTACT</button></li>
                    <a href="./signin" className="hover:text-yellow-500 font-myFont2" >SIGN IN</a>
                </ul>
            </div>
        </nav>
    </div>
    <div className="flex justify-center pt-40 pb-20 text-center">
        <div className="flex-col text-white">
            <p className="text-4xl mb-6 font-serif italic">Welcome To Unifisher Farming!</p>
            <p className="text-7xl mb-12 font-bold">IT'S NICE TO MEET YOU</p>
            <div>
                <button className='text-lg rounded-sm px-10 py-5 text-white bg-yellow-500 hover:bg-gray-500 ' type="submit">TELL ME MORE</button>
            </div>
        </div>
    </div>
</div>
</div>
}
