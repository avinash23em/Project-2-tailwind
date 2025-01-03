import { Add } from "./icon/add";
import { Calendar } from "./icon/calendar";
import { Video } from "./icon/video";

export function Home(){
    return <div className="w-full">
<div className=" h-40 bg-black"></div>
<p  className="text-1xl text-center pt-8">Monday 14th October</p>
<p className="text-3xl text-center pr-4 ">Good Morining, Avinash </p>
    <div className="grid grid-cols-10 gap-8 p-8">
    <div className="h-96 rounded-2xl bg-white  md:col-span-3 -translate-y-24 shadow-lg col-span-11 hidden md:block"> 
    <div className="flex flex-col items-center p-8  ">
    <img src="WhatsApp Image 2023-09-28 at 11.09.06.jpeg" class="w-32 h-32 rounded object-cover mb-4  "></img>
    <p class="text-3xl pt-8">Hey avinash</p>
    <p class="text-gray-500 pt-2">a23r2@gmail.com</p>
    <p class="text-gray-500 ">8310370179</p>
    <p  class="text-gray-500 pt-2">Delhi,india</p>
    </div>
    </div>

    <div className="h-96 rounded-2xl bg-green-300  md:col-span-4 sshadow-lg col-span-11"></div>
    <div className="h-96 rounded-2xl bg-white  md:col-span-3 shadow-lg col-span-11">
        <div className="grid grid-cols-3 p-4">
        <div className="col-span-1 p-2"><Calendar/>
        <p className=" mt-2 text-center">Schedule</p></div>
        <div className="col-span-1 pl-2"><Add/>
        <p className="mt-2 text-center">Add</p></div>
        <div className="col-span-2"><Video/>
        <p className=" text-center">See recordings</p></div>
        </div>
        
    </div>
    </div>
    </div>
}