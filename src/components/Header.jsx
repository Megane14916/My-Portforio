import { Link, useLocation } from "react-router-dom";
import '../static/Header.css'

const navMenu = [
    {
        path: "/about",
        label: "About",
    },{
        path: "/works",
        label: "Works",
    },
    {
        path: "/blog",
        label: "Blog",
    },
];

export function Header() {
    const location = useLocation();
    const nowPath = location.pathname;
    return (
        <div className="header">
            <Link to="/" className="yoanz-link"><h1 className="yoanz">yoanz</h1></Link>
            <nav className="nav">
                {navMenu.map(({ path, label}) => (
                    <div  key={label} className="nav-item">
                        <Link to={path} className={nowPath === path ? "nav-a" : "nav-b"}>
                            {label}
                        </Link>
                    </div>
                ))}
            </nav>
        </div>
    );
}