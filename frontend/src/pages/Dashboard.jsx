import {Sidebar} from "../components/Sidebar.jsx";
import {Heading} from "../components/Heading.jsx";

export const UserDashboard = () => {
    return(
        <div className="flex flex-col min-h-screen">
            <div className="bg-blue-950 text-white py-2 px-4 text-center">
                Vendor Management System
            </div>

            <div className="flex-1">
                <Sidebar/>
                <div className="text-center">
                    <Heading label="Welcome!" color="text-blue-600"/>
                </div>
            </div>

            <div className="bg-blue-950 text-white py-2 px-4 text-center">
                © 2024 Vendor Management System. All rights reserved.
            </div>
        </div>
    )
}
