import {InputBox} from "../../components/InputBox.jsx";
import {useState} from "react";
import {TopNavBarWithLogout} from "../../components/TopNavBarWithLogout.jsx";
import {BottomNavBar} from "../../components/BottomNavBar.jsx";
import {Button} from "../../components/Button.jsx";
import TagInput from "../../components/TagInput.jsx";

export const CreateNewPurchaseOrder = () => {
    const [poNumber, setPoNumber] = useState(0);
    const [vendor, setVendor] = useState("");
    const [orderDate, setOrderDate] = useState("");
    const [expectedDeliveryDate, setExpectedDeliveryDate] = useState("");
    const [quantity, setQuantity] = useState(0);

    const handleCreatePurchaseOrder = async () => {

    }

    return (
        <div className="flex flex-col min-h-screen">
            <TopNavBarWithLogout />

            <div className="flex-1">
                <div className="flex justify-center">
                    <div className="rounded-lg bg-slate-300 w-96 text-center p-1 h-max px-4 mt-10 mb-10">
                        <InputBox label="PO Number" placeholder="PO Number" type="text" onChange={(e) => {
                            setPoNumber(e.target.value);
                        }}/>
                        <InputBox label="Vendor" placeholder="Vendor Code" type="text" onChange={(e) => {
                            setVendor(e.target.value);
                        }}/>
                        <InputBox label="Order Date" type="date" onChange={(e) => {
                            setOrderDate(e.target.value);
                        }}/>
                        <InputBox label="Expected Delivery Date" type="date" onChange={(e) => {
                            setExpectedDeliveryDate(e.target.value);
                        }}/>

                        <div>
                            <TagInput />
                        </div>

                        <InputBox label="Total Quantity" placeholder="Total Quantity" type="number" onChange={(e) => {
                            setQuantity(e.target.value);
                        }}/>
                        <div className="mt-4">
                            <Button label="Submit" type="submit" onClick={handleCreatePurchaseOrder} />
                        </div>
                    </div>
                </div>
            </div>

            <BottomNavBar />
        </div>
    )
}
