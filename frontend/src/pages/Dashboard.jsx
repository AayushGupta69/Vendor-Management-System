import {Sidebar} from "../components/Sidebar.jsx";
import {Heading} from "../components/Heading.jsx";
import {Card} from "../components/Card.jsx";
import {BottomNavBar} from "../components/BottomNavBar.jsx";
import {TopNavBarWithLogout} from "../components/TopNavBarWithLogout.jsx";

export const UserDashboard = () => {
    return(
        <div className="flex flex-col min-h-screen">
            <TopNavBarWithLogout />

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

            <BottomNavBar />
        </div>
    )
}
