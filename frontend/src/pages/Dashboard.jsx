import {Sidebar} from "../components/Sidebar.jsx";
import {Heading} from "../components/Heading.jsx";

export const UserDashboard = () => {
    return(
        <div className="flex flex-col min-h-screen">
            <div className="bg-blue-950 text-white py-2 px-4 text-center text-xl">
                <h2>Vendor Management System</h2>
            </div>

            <div className="flex-1">
                <Sidebar/>
                <div className="text-center">
                    <Heading label="Welcome!" color="text-blue-600"/>
                </div>
            </div>

            <div className="bg-blue-950 text-white py-2 px-4 text-center text-xl">
                <h2>© 2024 Vendor Management System. All rights reserved.</h2>
            </div>
        </div>
    )
}
