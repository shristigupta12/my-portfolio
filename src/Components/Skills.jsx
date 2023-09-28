import ViewContainer from "./layout/view-container"
import { SkillData } from "../utilities/skill-data"

export default function Skills(){
    return(
        <ViewContainer className="view-containers flex-col">
            <div className="item-heading">skills.</div>
            <div className="flex flex-col mt-5">
                {SkillData.map(skills=>(
                    <div key={skills.id}>
                        <div className="grey-text decoration-1">{skills.category}</div>
                        <div className="flex pt-[30px] pl-[10px] pb-[60px]  align-middle gap-12">
                            {skills.items.map(skill=>(
                                <i key={skill} className={` text-7xl hover:scale-105 transition-all ease-in-out ${skill}`}></i>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </ViewContainer>
    )
}