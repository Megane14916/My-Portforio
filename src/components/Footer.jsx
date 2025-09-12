import '../static/Footer.css'
import { Link } from "react-router-dom";
import { Twitter } from 'lucide-react';
import { Github } from 'lucide-react';

export function Footer() {
    return (
        <div className='Footer'>
            <div className='Footer2'>
                <h1 className='FooterTitle'>yoanz</h1>
                <div className='sns'>
                    <Link to="https://x.com/Axxc6HQp2S93271" target="_blank"><Twitter className='icon' /></Link>
                    <Link to="https://github.com/Megane14916" target="_blank"><Github className='icon' /></Link>
                </div>
            </div>
            <p className='copyright'>© 2025 yoanz</p>
        </div>
    );
}