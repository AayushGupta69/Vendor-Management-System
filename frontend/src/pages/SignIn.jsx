import {Heading} from "../components/Heading.jsx";
import {SubHeading} from "../components/SubHeading.jsx";
import {InputBox} from "../components/InputBox.jsx";
import {Button} from "../components/Button.jsx";
import {BottomWarning} from "../components/BottomWarning.jsx";
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const SignInPage = () => {
    const [vendorCode, setVendorCode] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return (
        <div className="bg-blue-600 h-screen flex flex-col justify-center items-center">
            <div className="flex justify-between">
                <div className="flex flex-col justify-center">
                    <Heading label="Vendor Management System" color="text-white" />
                    <img src="src/assets/Vendor Management System.webp" alt="Vendor Management System GIF" className="mt-20 mx-auto h-40 w-auto mb-10"/>
                </div>
                <div className="pl-28">
                    <div className="rounded-lg bg-white w-80 text-center p-1 h-max px-4">
                        <Heading label="Sign In" color="text-blue-500"/>
                        <SubHeading label="Enter your credentials to sign in"/>
                        <InputBox label="Vendor Code" placeholder="VND123" type="text" onChange={(e) => {
                            setVendorCode(e.target.value);
                        }}/>
                        <InputBox label="Password" placeholder="vendor@12345" type="password" onChange={(e) => {
                            setPassword(e.target.value);
                        }}/>
                        <div className="pt-4">
                            <Button label="Sign In" onClick={async () => {
                                const response = await axios.post("http://localhost:3000/api/vendors/signin", {
                                    vendorCode,
                                    password
                                });
                                localStorage.setItem("token", response.data.token);
                                localStorage.setItem("role", response.data.role);
                                if(response.data.role === "User") {
                                    navigate("/user_dashboard");
                                }
                            }}/>
                        </div>
                        <BottomWarning label={"Dont have an account?"} buttonText={"Sign Up"} to={"/signup"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
