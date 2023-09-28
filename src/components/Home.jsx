let Profile = require('../utilities/avatar.jpg');

export default function Home(){
    return(
        <div className="flex w-full  justify-center my-[80px] ">
            <div className=" w-3/4 px-4 py-4">
                <div className='flex'>
                    <img src={Profile} alt="avatar" className="rounded-full h-[250px] w-[250px] transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-[1.1]" />
                    <div className="ml-[50px] flex flex-col">
                        <div className="font-bold text-2xl">Hi, I'm Shristi</div>
                        <div className="text-lg mt-[15px] text-slate-500">A fullstack frontend developer having a problem solving mindset focused on building websites with good user experience.</div>
                        <div className="text-lg text-slate-500">21, she/her</div>
                        <button className=' mt-[50px]  border p-1 bg-slate-100 rounded border-slate-300 text-slate-700 hover:text-slate-800 hover:scale-[1.03] w-[90px]'>Resume</button>
                    </div>
                </div>
            </div>
        </div>
    )
}