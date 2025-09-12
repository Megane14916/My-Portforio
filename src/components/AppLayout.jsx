import { Header } from "./Header";
import { Footer } from "./Footer";
import { ScrollRestoration } from "react-router-dom";

export function AppLayout({ children }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
            <ScrollRestoration />
        </div>
    );
}