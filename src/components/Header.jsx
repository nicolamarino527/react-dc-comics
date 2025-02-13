// importiamo la sidebar all interno dell header
import Sidebar from "./Sidebar";

export default function Header() {
    return (
        <header className="header">
            <h1>Logo</h1>
            <Sidebar />
        </header>
    );
};