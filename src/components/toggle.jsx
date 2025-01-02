export function Toggle(){
    return <div className="h-screen bg-white dark:bg-red-800">
        <button onClick={()=>{
            document.querySelector("html").classList.toggle("dark");
        }}> toggle theme</button>
        <div className="text-2xl dark:text-blue-200 text-yellow-200">Wake UP!!</div>
    </div>
}