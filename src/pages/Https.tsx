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
    const [status,setSatus]=useState<any>(null);
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
            setSatus(result.status);
            setResult(JSON.stringify(result.data));
            setLoading(false);
            clearTimeout(timeout);
        }
        catch (err:any) {
            console.log(err);
            if(err.response)
            {
                console.log("inside");
                setSatus(err.response.status);
                setResult(JSON.stringify(err.response.data));
            }
            else{
                setSatus(500);
                setResult("timeout , No response from server !");
            }
            setLoading(false);
            clearTimeout(timeout);
            
        }
    }
    return (
        <div className="md:flex">
            <div className="md:flex-1">
                <div className="md:flex md:justify-center mt-4">
                    <div className="md:flex md:gap-2 mx-4">
                        <div><Dropdownmenu /></div>
                        <div >
                            <input onChange={(e) => { setUrl(e.target.value) }} className="border-[1px] p-1 w-full md:w-[400px]" type="text" placeholder="enter url." />
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
            <div className="md:flex-1 overflow-auto">
                {loading ? <Loading /> : <Result status={status} />}
            </div>
        </div>
    );
}
