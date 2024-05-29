import Headcmp from "./Headcmp";
import { useRecoilState } from "recoil";
import { arrAtom } from "../store/atoms/atoms";
export default function Header() {
    const [arr, setArr] = useRecoilState(arrAtom);
    let key:number=1;
    return <div>
        <p className="font-black text-[20px] ">Headers</p>
        <div>
            <div className="flex gap-[180px] my-2">
                <div><p className="font-bold">Key</p></div>
                <div><p className="font-bold">Value</p></div>
            </div>
            {arr.map((x) => {
                return <div key={key++}>
                    <Headcmp id={x} />
                </div>
            })}
            <p className="text-red-500">{}</p>
        </div>
        <div className="p-1 rounded border-[1px] cursor-pointer w-[35px] bg-blue-400 " onClick={() => {
            setArr((prev) => [...prev, prev.length+1]);
        }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </div>
    </div>
}