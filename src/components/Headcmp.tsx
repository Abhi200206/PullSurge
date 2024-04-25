
import { useRecoilState } from "recoil";
import { headersAtom } from "../store/atoms/atoms";
export default function Headcmp({id}:{id:number}) {
    const [head,setHeadersAtom]=useRecoilState(headersAtom(id));
    function setvalues(e:{target:{value:string,name:string}})
    {
        setHeadersAtom((prev)=>{
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        });

    }
    return <div className="flex gap-2 my-1">
        <div><input value={head.key} onChange={(e)=>setvalues(e)} className="border-black border-[1px]" type="text" name="key" /> </div>
        <div><input value={head.value} onChange={(e)=>setvalues(e)} className="border-black border-[1px]" type="text" name="value" /></div>
    </div>
}