import { methodValues } from "../types/type"
import { useSetRecoilState } from "recoil";
import { methodAtom } from "../store/atoms/atoms";
export default function Dropdown({  setBool }: { setBool: React.Dispatch<React.SetStateAction<boolean>> }) {
    const setMethod=useSetRecoilState(methodAtom);
    return <div className="flex flex-col gap-2 rounded p-1 bg-slate-100 absolute top-[100px] z-2">
        <p onClick={() => {
            setMethod(methodValues.post);
            setBool(false);
        }} className="hover:bg-slate-200 rounded px-2 cursor-pointer">{methodValues.post} </p>
        <p onClick={() => {
            setMethod(methodValues.delete);
            setBool(false);
        }} className="hover:bg-slate-200 rounded px-2 cursor-pointer">{methodValues.delete} </p>
        <p onClick={() => {
            setMethod(methodValues.put);
            setBool(false);
        }} className="hover:bg-slate-200 rounded px-2 cursor-pointer">{methodValues.put} </p>
        <p onClick={() => {
            setMethod(methodValues.get);
            setBool(false);
        }} className="hover:bg-slate-200 rounded px-2 cursor-pointer">{methodValues.get} </p>
    </div>
}