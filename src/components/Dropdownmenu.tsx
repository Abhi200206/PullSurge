import { useState } from "react"
import Dropdown from "./Dropdown";
import { methodAtom } from "../store/atoms/atoms";
import { useRecoilValue } from "recoil";
export default function Dropdownmenu() {
    const [bool, setBool] = useState<boolean>(false);
    const method=useRecoilValue(methodAtom);
    return <div>
        <div onClick={() => {
            setBool((e) => !e);
        }} className="cursor-pointer px-3 flex gap-1 py-1 rounded border-[1px] bg-slate-300">
            <div  >{method}</div>
            <div>{bool ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="pt-1 w-5 h-5">
                <path fill-rule="evenodd" d="M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z" clip-rule="evenodd" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 pt-1">
                <path fill-rule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>
            }
            </div>
        </div>
        {bool && <Dropdown setBool={setBool}  />}
    </div>
}