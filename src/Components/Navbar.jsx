import ViewContainer from "./layout/view-container"

export default function Navbar(){
    return(
        <ViewContainer className="border-b border-slate-200" >
            <div className=" flex text-lg py-[30px]">
                <ul className="flex gap-3 text-slate-500 font-400 ml-auto">
                    <li className="nav-item">home</li>
                    <li className="nav-item">skills</li>
                    <li className="nav-item">projects</li>
                    <li className="nav-item">contacts</li>
                </ul>
            </div>
        </ViewContainer>
    )
}