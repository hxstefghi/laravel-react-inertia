import Navbar from "../Components/Navbar";

export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                {children}
            </main>
        </div>
    );
}
