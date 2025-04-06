import { Image } from "./Image";

export function Team({teamRef}){
    return <div>
        <div className="space-y-24 pt-20 bg-slate-50 " >
                <p className="flex justify-around text text-4xl" ref={teamRef}>Our Team</p>
                <div className="flex justify-around p-10">
                    <Image src="/pradhan.jpg" name="Abhijit Pradhan" link="https://www.linkedin.com/feed/"/>
                    <Image src="/partho.jpg" name="Debaprasad Dey" link="https://www.linkedin.com/feed/"/>
                    <Image src="/ranjit.jpg" name="Ranjit Pradhan" link="https://www.linkedin.com/feed/"/>
                </div>
            </div>
    </div>
}
