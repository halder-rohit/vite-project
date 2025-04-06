import { Image1 } from "./Image";

export function Product({productRef}) {
    return <div className="pt-20" ref={productRef}>
        <div className="space-y-24 "   >
            <p className="flex justify-center text-4xl pt-10 font-bold  font-myFont2">PRODUCTS</p>
             <div className="flex justify-around">
                <Image1 src='/Mushroom.jpg' name="Oyster Mushroom" description="Available"/>
                <Image1 src='/2.jpg'  name="Paddy Straw Mushroom" description="Available"/>
                <Image1 src='/3.jpeg'  name="Button Mushroom" description="Available"/>            
            </div>
        </div>
    </div>
}