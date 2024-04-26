import { useRecoilValue } from "recoil";
import { resultAtom } from "../store/atoms/atoms";
export default function Result()
{
    const result=useRecoilValue(resultAtom);
    return <div className="border-[1px] w-full rounded p-6">
        <p className="font-bold">Result:</p>
        <div>
            <p>{result}</p>
        </div>
    </div>
}