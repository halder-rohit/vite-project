import { Button2 } from "./Button";

export function Contact({ contactRef }) {
    return <div className="bg-slate-600">
        <div className="space-y-24 pt-20  ">
            <p className="flex justify-center text-4xl text-white" ref={contactRef}>CONTACT US</p>
            <div className="flex justify-center gap-5 " >
                <div className="flex justify-center">
                    <div className="    ">
                        <ul >
                            <li><input className='border rounded-sm border-black px-4 w-96 h-11 py-1.5 mt-5' id="email" placeholder="Your Name*" type="text"></input></li>
                            <li><input className='border rounded-sm border-black px-4 w-full py-1.5 mt-5' id="email" placeholder="Your Email*" type="text"></input></li>
                            <li><input className='border rounded-sm border-black px-4 w-full py-1.5 mt-5' id="email" placeholder="Your Phone*" type="text"></input></li>
                        </ul>
                    </div>
                </div>
                <div >
                    <div>
                        <textarea className='flex border border-black rounded-sm m-5 p-4 size-40 w-96' placeholder="Your Message* "></textarea>
                    </div>
                </div >
            </div>
        </div>
        <div className=" flex justify-center mt-5 mb-20">
            <Button2 name="Send Message" />
        </div>
    </div>
}