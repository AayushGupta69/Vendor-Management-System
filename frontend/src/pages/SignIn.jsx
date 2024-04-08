import {Heading} from "../components/Heading.jsx";
import {SubHeading} from "../components/SubHeading.jsx";
import {InputBox} from "../components/InputBox.jsx";

export const SignInPage = () => {
    return(
        <div>
            <Heading label="Sign In" />
            <SubHeading label="Enter your credentials to access your account" />
            <InputBox label={"Vendor Code"} placeholder={"VND123"} onChange={() => {}} />
            <InputBox label={"Password"} placeholder={"vendor@12345"} onChange={() => {}} />
        </div>
    )
}
