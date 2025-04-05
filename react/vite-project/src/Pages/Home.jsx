import { Header } from "../Components/Header"
import { Product } from "../Components/Product"
import { Team } from '../Components/Team'
import { Contact } from '../Components/Contact'
import { useRef } from "react"
export function Home() {
    const productRef = useRef(null);
    const teamRef = useRef(null);
    const contactRef = useRef(null);
    return (
        <>
            <Header productRef={productRef} teamRef={teamRef} contactRef={contactRef}/>
            {/* product */}
            <Product productRef={productRef}/>  
            {/* About */}
            
            {/* Team */}
            <Team teamRef={teamRef}/>  
            {/* COntact */}
            <Contact  contactRef={contactRef}/> 
        </> 
    ) 
}