import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import { useAuthStore } from "../features/auth/store/auth.store";
import { useAuthStore } from "../../features/auth/store/auth.store";
function Header() {
    const user = useAuthStore((state) => state.user);
    return (_jsxs("header", { className: "flex h-16 items-center justify-between border-b bg-white px-6", children: [_jsx("h2", { className: "text-xl font-semibold", children: "WorkHub Operations Portal" }), _jsxs("div", { className: "font-medium", children: ["Welcome, ", user?.firstName] })] }));
}
export default Header;
