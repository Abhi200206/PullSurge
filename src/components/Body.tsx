import {  useRecoilState} from "recoil";
import { bodyAtom } from "../store/atoms/atoms";
export default function Body()
{   
    const [body,setBody]=useRecoilState(bodyAtom);
    function change(e:{target:{value:string}})
    {
        setBody(e.target.value)
    };
    return <div className="mt-4">
        <div className="flex justify-evenly mb-2">
            <div><p className="font-black">Body</p></div>
            <div><p className="text-slate-500">Content-Type-application/json</p></div>
        </div>
        <div>
        <textarea onChange={(e)=>change(e)} value={body} className="border-[1px] border-black rounded p-2 w-full h-[300px] md:h-[350px]">
               </textarea>
        </div>
    </div>
}