import '../static/BlogItem2.css'
import { Link } from "react-router-dom";

export function BlogItem2({blog, onClick}) {

    const handleButtonClick = (tag, e) => {
    e.stopPropagation();
    e.preventDefault(); 
    console.log("aa")
    onClick(tag);
  };
    return(
        <Link to={`/blog/${blog.id}`} className='blogLink2'>
            <div className='blogItem2'>
                <p className='blogDate2'>{blog.date}</p>
                <h2 className='blogTitle2'>{blog.title}</h2>
                <div className='tagList'>
                    {blog.tags.map((tag)=>(
                        <button className='tag' onClick={(e) => handleButtonClick(tag, e)} key={tag}>#{tag}</button>
                    ))}
                </div>
            </div>
        </Link>
    )
}