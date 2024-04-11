import {useState} from "react";
import {Button} from "./Button.jsx";
import {useNavigate} from "react-router-dom";

export const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        navigate("/");
    }

    return (
        <>
            {showSidebar ? (
                <button className="flex text-4xl text-white items-center cursor-pointer fixed top-6 left-10 z-50"
                        onClick={() => setShowSidebar(!showSidebar)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12"/>
                    </svg>
                </button>
            ) : (
                <svg onClick={() => setShowSidebar(!showSidebar)}
                     className="fixed z-30 items-center cursor-pointer left-10 top-16"
                     fill="#2563EB"
                     viewBox="0 0 100 80"
                     width="40"
                     height="40"
                >
                    <rect width="100" height="10"></rect>
                    <rect y="30" width="100" height="10"></rect>
                    <rect y="60" width="100" height="10"></rect>
                </svg>
            )}
            {showSidebar && (
                <div className="top-0 left-0 fixed bg-blue-950 w-[25vw] h-full p-10 pr-10 text-white z-40 ease-in-out duration-300 translate-x-0">
                    <div className="mt-6">
                        <Button label="Logout" onClick={handleLogout} />
                    </div>
                </div>
            )}
        </>
    )
}