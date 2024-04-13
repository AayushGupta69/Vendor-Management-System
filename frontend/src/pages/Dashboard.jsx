import {Sidebar} from "../components/Sidebar.jsx";
import {Heading} from "../components/Heading.jsx";
import {Button} from "../components/Button.jsx";
import {useNavigate} from "react-router-dom";
import {Card} from "../components/Card.jsx";

export const UserDashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        navigate("/");
    }

    return(
        <div className="flex flex-col min-h-screen">
            <div className="bg-blue-950 text-white py-2 px-4 text-center text-xl">
                <div className="grid grid-cols-10">
                    <div className="col-span-9 ml-36 mt-2">
                        <h2>Vendor Management System</h2>
                    </div>
                    <div className="col-span-1 ml-5">
                        <Button label="Logout" onClick={handleLogout}/>
                    </div>
                </div>
            </div>

            <div className="flex-1">
                <Sidebar/>
                <div className="text-center">
                    <Heading label="Welcome!" color="text-blue-600"/>
                </div>
                <div className="flex ml-44 mt-10 mr-32 justify-around">
                    <Card label="Create New Purchase Order" to="/create_purchase_order"/>
                    <Card label="Update Existing Purchase Order" to="/update_purchase_order"/>
                    <Card label="View All Purchase Orders" to="/view_all_purchase_order"/>
                    <Card label="View Specific Purchase Order" to="/view_purchase_order"/>
                    <Card label="Delete Purchase Order" to="/delete_purchase_order"/>
                </div>
            </div>

            <div className="bg-blue-950 text-white py-2 px-4 text-center text-xl">
                <h2>© 2024 Vendor Management System. All rights reserved.</h2>
            </div>
        </div>
    )
}
