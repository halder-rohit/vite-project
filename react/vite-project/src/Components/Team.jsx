import { Image } from "./Image";

export function Team({teamRef}){
    return <div>
        <div>
                <p className="flex justify-around text" ref={teamRef}>Our Team</p>
                <div className="flex justify-around p-10">
                    <Image src="/pradhan.jpg" name="Abhijit Pradhan" link="https://www.linkedin.com/feed/"/>
                    <Image src="/partho.jpg" name="Debaprasad Dey" link="https://www.linkedin.com/feed/"/>
                    <Image src="/ranjit.jpg" name="Ranjit Pradhan" link="https://www.linkedin.com/feed/"/>
                </div>
            </div>
    </div>
}
