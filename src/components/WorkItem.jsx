import '../static/WorkItem.css'
import { Link } from "react-router-dom";

export function WorkItem({work}) {
    return(
        <Link  to={`/works/${work.id}`} className='workLink'>
        <div className="workItem">
            <img key={work.id} src={work.img} className="workImg" />
            <h2 className='work-title'>{work.title}</h2>
            <p className='work-detail'>{work.detail}</p>
        </div>
        </Link>
    )
}