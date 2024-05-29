
import { useRecoilState } from "recoil";
import { headersAtom } from "../store/atoms/atoms";
export default function Headcmp({ id }: { id: number }) {
    let warning = "";
    const [head, setHeadersAtom] = useRecoilState(headersAtom(id));
    if (head.key == "") {
        warning = "* key cant be empty !";
    }
    function setvalues(e: { target: { value: string, name: string } }) {
        setHeadersAtom((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        });

    }
    return <div>
        <div className="flex gap-1 md:gap-2 my-1">
            <div><input value={head.key} onChange={(e) => setvalues(e)} className="border-black w-full border-[1px]" type="text" name="key" /> </div>
            <div><input value={head.value} onChange={(e) => setvalues(e)} className="border-black w-full border-[1px]" type="text" name="value" /></div>
        </div>
        <div>
            <p className="text-red-500 text-[12px] my-1 ">{warning}</p>
        </div>
    </div>
}