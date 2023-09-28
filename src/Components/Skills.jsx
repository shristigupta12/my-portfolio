import ViewContainer from "./layout/view-container"
import { SkillData } from "../utilities/skill-data"

export default function Skills(){
    return(
        <ViewContainer className="view-containers flex-col">
            <div className="item-heading">skills.</div>
            <div className="flex flex-col mt-5">
                {SkillData.map(skills=>(
                    <div>
                        <div className="grey-text decoration-1">{skills.category}</div>
                        <div className="flex pt-[30px] pl-[10px] pb-[60px]  align-middle gap-[120px]">
                            {skills.items.map(skill=>(
                                <i className={` scale-[3] hover:scale-[4] transition-all ease-in-out ${skill.item}`}></i>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </ViewContainer>
    )
}