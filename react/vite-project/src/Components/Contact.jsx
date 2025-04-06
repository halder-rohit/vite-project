import { Button2 } from "./Button";

export function Contact({ contactRef }) {
    return <div>
        <div className="pt-20">
            <p className="flex justify-around text" ref={contactRef}>Contact</p>
            <div className="flex justify-center gap-5 " >
                <div className="flex justify-center">
                    <ul className="">
                        <li><input className='border rounded-sm px-3 py-1.5' id="email" placeholder="Your Name*" type="text"></input></li>
                        <li><input className='border rounded-sm px-3 py-1.5' id="email" placeholder="YourEmail*" type="text"></input></li>
                        <li><input className='border rounded-sm px-3 py-1.5' id="email" placeholder="Your Phone*" type="text"></input></li>
                        <li></li>
                    </ul>
                </div>
                 <div className="">
                    <div>
                       <textarea className='flex  border rounded-sm px-3 py-1.5' name="Your Message*"></textarea>
                    </div>
                </div >
            </div>
            <div className="flex justify-around">
                <Button2 name="Send " />
            </div>
        </div>
    </div>
}