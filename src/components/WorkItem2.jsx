import { Link } from "react-router-dom";
import '../static/WorkItem2.css'

export function WorkItem2({work}) {
    
    return(
        <Link to={`/works/${work.id}`} className="workLink2">
        <div className="workItem2">
            <img src={work.img} className="workImg2"></img>
            <div className="workItemText">
                <h2 className="workTitle2">{work.title}</h2>
                <p className="workText2">{work.detail}</p>
            </div>
        </div>
        </Link>
    );
    
}