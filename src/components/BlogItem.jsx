import { Link } from "react-router-dom";
import '../static/BlogItem.css'

export function BlogItem({blog}) {
    return(
        <Link className="BlogItemLink"  to={`/blog/${blog.id}`}>
        <div className="BlogItem">
            <h2 className="blog-title">{blog.title}</h2>
            <p className="blog-date">{blog.date}</p>
        </div>
        </Link>
    );
}