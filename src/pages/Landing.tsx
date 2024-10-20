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
            <div className="flex justify-between mx-2 h-[50px] border-[1px] items-center bg-slate-50 sticky top-0 py-2">
                <div>
                    <p className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-400">PullSurge</p>
                </div>
               <a href="https://github.com/Abhi200206/PullSurge"> <div  className="bg-black  px-2 text-white rounded cursor-pointer">
                    <p>Github </p>
                </div></a>
            </div>
            <div className="md:flex md:flex-grow">
                <div className=" md:flex md:justify-center border-[1px] md:w-1/12">
                    <div className="flex justify-center my-2 gap-4 mx-2 md:my-[10px] md:flex md:justify-start md:flex-col md:gap-6">
                        <Http cb={http}/>
                        <Ws cb={ws} />
                        <Setting cb={sett}/>
                    </div>
                </div>
                <div className="md:w-11/12">
                    {children}
                </div>
            </div>
        </div>
    );
}
