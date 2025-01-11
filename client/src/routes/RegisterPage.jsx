import { SignUp } from "@clerk/clerk-react";

const RegisterPage = () => {
    return (
        <div className="">
            <div className="flex items-center justify-center h-[calc(100vh-80px)]">
                <SignUp signInUrl="/login" />
            </div>
        </div>
    );
};

export default RegisterPage;
