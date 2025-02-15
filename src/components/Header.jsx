// importiamo la sidebar all interno dell header
import Navbar from "./Navbar";

export default function Header() {
    return (
        <header className="header">
            <div>
                <img className="logo" src="./src/assets/img/dc-logo.png" alt="" />
            </div>
            <Navbar />

        </header>
    );
};