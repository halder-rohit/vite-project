import { Image1 } from "./Image";

export function Product({productRef}) {
    return <div>
        <div className="space-y-24 pt-20" >
            <p className="flex justify-center text-4xl" ref={productRef}>Products</p>
             <div className="flex justify-around">
                <Image1 src='/Mushroom.jpg' name="Oyster Mushroom" description="Available"/>
                <Image1 src='/2.jpg'  name="Paddy Straw Mushroom" description="Available"/>
                <Image1 src='/3.jpeg'  name="Button Mushroom" description="Available"/>            
            </div>
        </div>
    </div>
}