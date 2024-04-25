import { useState } from "react"
import Body from "./Body";
import Header from "./Header";

export default function Basics() {
    const [bool, setBool] = useState<boolean>(false);
    return <div>
        <div className="border-[1px] py-1 px rounded mt-4">
            <div className="flex gap-1">
                <div onClick={() => {
                    setBool(false);
                }} className={bool ? "border-black rounded px-1 border-[1px] cursor-pointer" : "bg-black text-white rounded px-1 border-[1px] cursor-pointer"}><p>Headers</p></div>
                <div onClick={() => {
                    setBool(true);
                }} className={bool ? "border-black rounded px-1 border-[1px] cursor-pointer bg-black text-white " : "border-black rounded px-1 border-[1px] cursor-pointer"}><p> Body</p></div>
            </div>
        </div>
        {bool? <Body/>:<Header/>}
    </div>
}