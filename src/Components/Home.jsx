import Profile from '../utilities/avatar.jpg';
import ViewContainer from './layout/view-container';

export default function Home(){
    return(
        <ViewContainer className="view-containers">
            <div className='flex items-center'>
                <img src={Profile} alt="avatar" className="rounded-full h-[250px] w-[250px] transition-all ease-in-out  hover:scale-105" />
                <div className="ml-[70px] flex flex-col">
                    <div className="font-bold text-4xl">Hi, I'm Shristi</div>
                    <div className="grey-text mt-[15px]">A full-stack frontend developer with a strong problem-solving mindset, dedicated to crafting websites that offer great user experiences.</div>
                    <div className="text-lg text-slate-500">21, she/her</div>
                    <button className='mt-[15px]  border p-1 bg-slate-100 rounded border-slate-300 text-slate-700 hover:text-slate-900 hover:border-slate-400 w-[90px]'>Resume</button>
                </div>
            </div>
        </ViewContainer>
    )
}