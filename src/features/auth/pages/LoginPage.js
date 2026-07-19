import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "../../../components/shared";
import { loginSchema } from "../validation/login.schema";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";
import { useAuthStore } from "../store/auth.store";
function LoginPage() {
    const navigate = useNavigate();
    const loginMutation = useLogin();
    const loginStore = useAuthStore((state) => state.login);
    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: zodResolver(loginSchema),
    });
    const onSubmit = (data) => {
        loginMutation.mutate(data, {
            onSuccess: (response) => {
                loginStore(response);
                navigate("/dashboard");
            },
            onError: (error) => {
                console.error(error);
                alert("Invalid username or password");
            },
        });
    };
    return (_jsx("div", { className: "flex min-h-screen items-center justify-center bg-gray-400 px-4", children: _jsxs("div", { className: "w-full max-w-md rounded-xl bg-white p-8 ", children: [_jsx("h1", { className: "mb-2 text-center text-3xl font-bold", children: "WorkHub Portal" }), _jsxs("form", { onSubmit: handleSubmit(onSubmit), children: [_jsx(Input, { label: "Username", placeholder: "Enter username", ...register("username"), error: errors.username?.message }), _jsx(Input, { label: "Password", type: "password", placeholder: "Enter password", ...register("password"), error: errors.password?.message }), _jsx(Button, { type: "submit", isLoading: loginMutation.isPending, children: "Login" })] })] }) }));
}
export default LoginPage;
