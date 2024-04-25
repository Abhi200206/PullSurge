import { useNavigate } from "react-router-dom";
import Http from "../components/Http";
import Ws from "../components/Ws";
import Setting from "../components/Setting";

export default function Landing({ children }: { children: React.ReactNode }) {
    let navigate = useNavigate();
    function http() {
        navigate("/");
    }
    function ws() {
        navigate("/ws");
    }
    function sett()
    {
        navigate("/setting");
    }
    
    return (
        <div className="h-screen flex flex-col ">
            <div className="flex justify-between mx-2 h-[50px] border-[1px] items-center">
                <div>
                    <p className="font-bold text-[20px] w-[100px] bg-gradient-to-r from-blue-500 to-red-300">PullSurge</p>
                </div>
               <a href="https://github.com/Abhi200206/PullSurge"> <div  className="bg-black  px-2 text-white rounded cursor-pointer">
                    <p>Github </p>
                </div></a>
            </div>
            <div className="flex flex-grow">
                <div className="flex justify-center border-[1px] w-1/12">
                    <div className="my-[10px] flex flex-col gap-4">
                        <Http cb={http}/>
                        <Ws cb={ws} />
                        <Setting cb={sett}/>
                    </div>
                </div>
                <div className="w-11/12">
                    {children}
                </div>
            </div>
        </div>
    );
}
