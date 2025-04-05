import { Linkedin } from "./Icons/Linkedin";
export function Image(props){
    return <div  className="flex-col justify-items-center space-y-14">
    <img src={props.src} className="h-52 w-48 rounded-full"></img>
        <p className="font-bold">{props.name}</p>
        <a target="_blank" href={props.link}><Linkedin/></a>
    </div>
}
