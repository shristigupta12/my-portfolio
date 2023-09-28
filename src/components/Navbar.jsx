export default function Navbar(){
    return(
        <div className=" flex justify-end w-full">
            <div className=" relative fixed shadow w-3/4 right-0 py-8 px-9 mt-9 mx-9 text-lg">
                <ul className="flex gap-3 justify-center text-slate-500 font-[400]">
                    <li className="cursor-pointer hover:text-slate-900">home</li>
                    <li className="cursor-pointer hover:text-slate-900">about</li>
                    <li className="cursor-pointer hover:text-slate-900">skills</li>
                    <li className="cursor-pointer hover:text-slate-900">projects</li>
                    <li className="cursor-pointer hover:text-slate-900">contacts</li>
                </ul>
            </div>
        </div>
    )
}