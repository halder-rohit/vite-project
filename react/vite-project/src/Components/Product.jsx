import { Image, Image1 } from "./Image";

export function Product({productRef}) {
    return <div>
        <div className="space-y-24 pt-20" >
            <p className="flex justify-center text-4xl" ref={productRef}>Products</p>
             <div className="flex justify-around">
                {/*<div className="flex-col justify-items-center">
                    <img src='/Mushroom.jpg' className="h-28 w-30"></img>
                    <p>Oyster Mushroom</p>
                    <p>Available</p>
                </div>
                <div className="flex-col justify-items-center">
                    <img src='/2.jpg' className="h-28 w-30"></img>
                    <p>Paddy Straw Mushroom</p>
                    <p>Available</p>
                </div>
                <div className="flex-col justify-items-center ">
                    <img src='/3.jpeg' className="h-28 w-30"></img>
                    <p>Button Mushroom</p>
                    <p>Available</p>
                </div> */}
                <Image1 src='/Mushroom.jpg' name="Oyster Mushroom" description="Available"/>
                <Image1 src='/2.jpg'  name="Paddy Straw Mushroom" description="Available"/>
                <Image1 src='/3.jpeg'  name="Button Mushroom" description="Available"/>            
            </div>
        </div>
    </div>
}