export default function Settings() {
    return <div >
        <div className="flex justify-center ">
            <div className="flex gap-2 items-center h-[200px] ">
                <p className="font-bold">Version :</p>
                <p className="text-slate-500">V-1.0</p>    
            </div>
            
        </div>
        <div className="flex justify-center items-center"> 
            <p className="pr-2">Note:</p>
        <p className="text-slate-800 font-bold text-lg my-2">To run localhost urls, clone the project on github and use it locally.</p>
        </div>
    </div>
}