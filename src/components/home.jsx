export function Home(){
    return <div className="w-full">
<div className=" h-60 bg-black"></div>
    <div className="grid grid-cols-10 gap-8 p-8">
    <div className="h-96 rounded-2xl bg-red-300  md:col-span-2 -translate-y-24 shadow-lg col-span-11 hidden md:block"></div>

    <div className="h-96 rounded-2xl bg-green-300  md:col-span-5 sshadow-lg col-span-11"></div>
    <div className="h-96 rounded-2xl bg-blue-300  md:col-span-3 shadow-lg col-span-11"></div>
    </div>
    </div>
}