import { useRecoilValue } from "recoil";
import { resultAtom } from "../store/atoms/atoms";
export default function Result({status}:{status:number})
{
    const result=useRecoilValue(resultAtom);
    return <div className="border-[1px] w-full rounded p-6 overflow-auto">
        <div className="flex justify-between border-[1px] p-2 mb-2">
           <div> <p className="font-bold">Result:</p></div>
           <div>
                <div className="flex gap-2 items-center">
                    <div><p className="text-slate-500 text-sm font-bold">Status:</p></div>
                    <div><p className={(status==200)?"text-green-600":(status<500)?"text-orange-600":"text-red-600"}>{status}</p></div>
                </div>
           </div>
        </div>
        <div>
            <p>{result}</p>
        </div>
    </div>
}