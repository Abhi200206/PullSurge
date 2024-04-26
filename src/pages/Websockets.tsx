import { useState } from "react"

export default function Websockets() {
    const [url, setUrl] = useState<string>("");
    const [socket, setSocket] = useState<WebSocket | null>(null);
    const [message, setMesaage] = useState<string>("");
    const [msg,setMsg] = useState<string>("");
    const [connectionStatus, setConnectionStatus] = useState<string>("Disconnected");
    function enter(e: { target: { value: string } }) {
        setUrl(e.target.value);
    }
    function clearall()
    {
        setMesaage("");
        setMsg("");
        setUrl("");
    }
    function disconnect() {
        if (socket) {
            socket.close();
            setConnectionStatus("Disconnected");
            clearall();
        }
    }
    function sendMessage() {
        if (socket && msg) {
            socket.send(msg);
            setMsg("");
        }
    }
    async function connect() {
        const newSocket = new WebSocket(url);
        newSocket.onopen = () => {
            console.log('Connection established');
            setConnectionStatus("connected");
            newSocket.send('Hello Server!');
        }
        newSocket.onmessage = (message) => {
            console.log('Message received:', message.data);
            setMesaage(message.data);
        }
        newSocket.onclose = () => {
            alert("connection closed!!")
        }
        setSocket(newSocket);
    }

    return <div className="md:flex  md:justify-center mx-2 md:items-center">
        <div>
            <p className="font-bold">Web sockets</p>
            <br />
            <div className="md:flex md:gap-4">
                <input value={url} onChange={(e) => enter(e)} className="border-black border-[1px] w-full md:w-[350px] p-1 " type="text" placeholder="enter url" />
                <div onClick={connect} className="rounded border-[1px] my-2 md:my-0 bg-black px-2 cursor-pointer text-white text-center "><p>connect</p></div>
                <div className="rounded border-[1px] bg-black px-2 my-2 md:my-0 cursor-pointer text-white text-center " onClick={disconnect}>Disconnect</div>
            </div>
            <div className="flex gap-2 mt-2 mb-6">
                <p className="text-slate-500">Connection Satus: </p>
                <p className={connectionStatus == "connected" ? "text-green-500" : "text-red-500"}>{connectionStatus}</p>
            </div>
            <div className="md:flex md:gap-4">
                <div className="border-[1px] p-2 ">
                    <p>Message Body</p>
                    <div>
                        <div ><input value={msg} onChange={(e) => setMsg(e.target.value)} type="text" className="border-black m-1 border-[1px] w-full md:w-[350px] p-1 " name="" id="" /></div>
                        <div className="cursor-pointer bg-black text-white text-center" onClick={sendMessage}><p>send</p></div>
                    </div>
                </div>
                <div className="border-[1px] w-full md:w-[500px] p-2 ">
                    <p className="font-bold">Message Received From server:</p>
                    <p>{message}</p>
                </div>
            </div>
        </div>
    </div>
}