import { useRef } from 'react'
import { SignIn } from '../Pages/Signin'
import { Button1 } from './Button'
export function Header({ productRef, teamRef, contactRef }) {

    const productScroll = () => { productRef.current.scrollIntoView({behavior: "smooth"} ) }
    const teamScroll = () => { teamRef.current.scrollIntoView({ behavior: "smooth" }) }
    const contactScroll = () => { contactRef.current.scrollIntoView({ behavior: "smooth" }) }
    return <div>
        <div className="bg-[url(image/photo.jpeg)]">
            <div className="fixed w-screen bg-green-700">
                <nav className=" flex justify-center">
                    <div className="flex justify-between  w-5/6 py-8  text-white">
                        <a href="/" className="text-amber-400">
                            <p className="font-myFont text-3xl">Unifisher farming</p>
                        </a>
                        {/* <HeaderComponent productRef={productRef}/>  */}
                        <ul className="flex gap-3">
                            <li> <a onClick={productScroll} className="hover:not-active:bg-yellow-500 font-myFont2 focus:bg-yellow-300  rounded-lg p-5">PRODUCT</a></li>
                            <li> <a className="hover:not-active:bg-yellow-500 font-myFont2 focus:bg-yellow-300  rounded-lg p-5">ABOUT</a></li>
                            <li> <a className="hover:not-active:bg-yellow-500 font-myFont2 focus:bg-yellow-300  rounded-lg p-5" >TEAM</a></li>
                            <li> <a className="hover:not-active:bg-yellow-500 font-myFont2 focus:bg-yellow-300  rounded-lg p-5">CONTACT US</a></li>
                            <li> <a target="_blank" href="./signin" name="SIGN IN" > </a></li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div className="flex justify-center pt-40 pb-20 text-center">
                <div className="flex-col text-white">
                    <p className="text-4xl mb-6 font-serif italic">Welcome To Unifisher Farming!</p>
                    <p className="text-7xl mb-12 font-bold">IT'S NICE TO MEET YOU</p>
                    <div>
                        <Button1 name="TELL ME MORE" />
                    </div>
                </div>
            </div>
        </div>
    </div>
}
