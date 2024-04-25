import Basics from "../components/Basic";
import Dropdownmenu from "../components/Dropdownmenu";
import { useSetRecoilState } from "recoil";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { urlAtom, bodyAtom, methodAtom, resultAtom, headselector } from "../store/atoms/atoms";
import Result from "../components/Result";
import { useState } from "react";
import Loading from "../components/Loading";
export default function Https() {
    const setUrl = useSetRecoilState(urlAtom);
    let method = useRecoilValue(methodAtom);
    let url = useRecoilValue(urlAtom);
    let data = useRecoilValue(bodyAtom);
    const headers = useRecoilValue(headselector);
    const setResult = useSetRecoilState(resultAtom);
    const [loading, setLoading] = useState<boolean>(false);
    async function Axios() {
        setLoading(true);
        let timeout=setTimeout(() => {
            setResult("Timeout ,No response From server...");
            setLoading(false);
        }, 30000);
        try {
            let result = await axios({
                method: method,
                url: url,
                data: data,
                headers: {
                    ...headers,
                    'Content-Type': 'application/json'
                }
            });
            setResult(JSON.stringify(result.data));
            setLoading(false);
            clearTimeout(timeout);
        }
        catch (err) {
            setResult(JSON.stringify(err));
            setLoading(false);
            clearTimeout(timeout);

        }
    }
    return (
        <div className="flex">
            <div className="flex-1">
                <div className="flex justify-center mt-4">
                    <div className="flex gap-2">
                        <div><Dropdownmenu /></div>
                        <div className="bg-red-500">
                            <input onChange={(e) => { setUrl(e.target.value) }} className="border-[1px] p-1 w-[400px]" type="text" placeholder="enter url." />
                        </div>
                        <div onClick={Axios} className="rounded px-4 py-1 bg-black text-center text-white cursor-pointer">
                            <p>Send</p>
                        </div>
                    </div>
                </div>
                <div className="my-1 ml-4">
                    <Basics />
                </div>
            </div>
            <div className="flex-1">
                {loading ? <Loading /> : <Result />}
            </div>
        </div>
    );
}
