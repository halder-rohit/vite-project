import { Button2 } from "./Button";

export function Contact({ contactRef }) {
    return <div className="bg-[url(/image.jpg)] py-20">
        <div className="space-y-28 ">
            <p className="flex justify-center text-4xl font-bold font-myFont2 text-white" ref={contactRef}>CONTACT US</p>
            <div className="flex justify-center">
                <div className="w-5/6 flex justify-center space-x-5" >
                    <div className="w-1/2 space-y-5">
                        <input className='border rounded-sm border-black px-5 w-full  py-5 ' placeholder="Your Name*" type="text"></input>
                        <input className='border rounded-sm border-black px-5 w-full py-5 ' placeholder="Your Email*" type="text"></input>
                        <input className='border rounded-sm border-black px-5 w-full py-5 ' placeholder="Your Phone*" type="text"></input>
                    </div>
                    <div className="w-1/2 ">
                        <textarea className='border border-black rounded-sm  p-5 h-full w-full' placeholder="Your Message* "></textarea>
                    </div>
                </div>
            </div>
        </div>
        <div className=" flex justify-center mt-5 mb-20">
            <Button2 name="Send Message" />
        </div>
    </div>
}