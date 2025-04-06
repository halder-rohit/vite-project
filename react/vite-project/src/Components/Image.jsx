import { Linkedin } from "./Icons/Linkedin";
export function Image(props){
    return <div  className="flex-col justify-items-center space-y-14">
    <img src={props.src} className="h-80 w-68 rounded-full border border-solid"></img>
        <p className="font-bold">{props.name}</p>
        <a target="_blank" href={props.link}><Linkedin/></a>
    </div>
}
 export function Image1(props){
    return <div className="flex-col justify-items-center">
    <img src={props.src} className="h-28 w-30"></img>
    <p  className="font-bold" >{props.name}</p>
    <p>{props.description}</p>
    </div>
 }