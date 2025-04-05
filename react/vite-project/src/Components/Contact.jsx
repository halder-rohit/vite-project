export function Contact({ contactRef }) {
    return <div>
        <div >
            <p className="flex justify-around text" ref={contactRef}>Contact</p>
            <input className='border rounded-sm px-3 py-1.5' id="email" placeholder="Your Name*" type="text"></input>
            <input className='border rounded-sm px-3 py-1.5' id="email" placeholder="YourEmail*" type="text"></input>
            <input className='border rounded-sm px-3 py-1.5' id="email" placeholder="Your Phone*" type="text"></input>
        </div>
        <div>
            <textarea className='border rounded-sm px-3 py-1.5' name="Your Message*"></textarea>
        </div>
        <div>
            <button className='border rounded-lg px-3 py-1.5 text-white bg-yellow-300  ' type="submit">Send me</button>
        </div>
    </div>
}