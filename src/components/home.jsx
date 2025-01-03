export function Home(){
    return <div className="w-full">
<div className=" h-60 bg-black"></div>
    <div className="grid grid-cols-10 gap-8 p-8">
    <div className="h-96 rounded-2xl bg-red-300  col-span-2 -translate-y-24 shadow-lg"></div>

    <div className="h-96 rounded-2xl bg-green-300  col-span-5 sshadow-lg"></div>
    <div className="h-96 rounded-2xl bg-blue-300  col-span-3 shadow-lg"></div>
    </div>
    </div>
}