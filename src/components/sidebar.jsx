import { Bars } from "./icon/bars";

export function Sidebar({open,setopen}){
    if(!open){
        return <div className="fixed top-0 left-0">
<div className="cursor-pointer hover:bg-slate-200" onClick={()=>{setopen(!open)}}>
    <Bars/>
    </div>
    </div>

    }
return <div className="w-96 h-screen bg-red-300">
<div>
<div className="cursor-pointer hover:bg-slate-200" onClick={()=>{setopen(!open)}}>
    <Bars/>
    </div>
    </div>
</div>
    
}