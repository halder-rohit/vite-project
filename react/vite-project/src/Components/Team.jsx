export function Team({teamRef}){
    return <div>
        <div>
                <p className="flex justify-around text" ref={teamRef}>Our Team</p>
                <div className="flex justify-around p-10">
                    <div  className="flex-col justify-items-center ">
                    <img src='/pradhan.jpg' className="h-28 w-30"></img>
                        <p>Abhijit Pradhan</p>
                        <a href="#">linkedin</a>
                    </div>
                    <div  className="flex-col justify-items-center ">
                    <img src='/partho.jpg' className="h-28 w-30"></img>
                        <p>Debaprasad Dey</p>
                        <a href="#">linkedin</a>
                    </div>
                    <div  className="flex-col justify-items-center ">
                    <img src='/ranjit.jpg' className="h-28 w-30"></img>
                        <p>Ranjit Pradhan</p>
                        <a href="#">linkedin</a>
                    </div>
                </div>
            </div>
    </div>
}
