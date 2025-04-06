export function Button(props){
    return<button className="hover:text-yellow-500 font-myFont2 focus:bg-yellow-300  rounded-lg p-5">{props.name}</button>
}
export function Button1(props){
    return<button className='text-lg rounded-sm px-10 py-5 text-white bg-yellow-500 hover:bg-gray-500 ' type="submit">{props.name}</button>
}
export function Button2(props){
return<button className='border rounded-lg px-3 py-1.5 text-white bg-yellow-300  ' type="submit">{props.name}</button>
}