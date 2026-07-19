import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink, useNavigate } from "react-router-dom";
import { APP_ROUTES } from "../../constants/routes";
import { useAuthorization } from "../../hooks/useAuthorization";
import { useAuthStore } from "../../features/auth/store/auth.store";
function Sidebar() {
    const navigate = useNavigate();
    const { can } = useAuthorization();
    const logout = useAuthStore((state) => state.logout);
    const user = useAuthStore((state) => state.user);
    console.log("Username:", user?.username);
    console.log("Role:", user?.role);
    const accessibleRoutes = APP_ROUTES.filter((route) => can(route.permission));
    const handleLogout = () => {
        logout();
        navigate("/", { replace: true });
    };
    return (_jsxs("aside", { className: "flex h-screen w-64 flex-col bg-slate-900 text-white shadow-lg", children: [_jsxs("div", { className: "border-b border-slate-700 p-5", children: [_jsx("h1", { className: "text-2xl font-bold tracking-wide", children: "WorkHub" }), _jsx("p", { className: "mt-1 text-sm text-slate-400", children: "Operations Portal" })] }), _jsxs("div", { className: "border-b border-slate-700 px-5 py-4", children: [_jsx("p", { className: "text-sm text-slate-400", children: "Welcome" }), _jsxs("h2", { className: "font-semibold", children: [user?.firstName, " ", user?.lastName] }), _jsx("p", { className: "mt-1 text-xs uppercase tracking-wide text-blue-400", children: user?.role })] }), _jsx("nav", { className: "flex-1 overflow-y-auto p-4", children: accessibleRoutes.map((route) => (_jsx(NavLink, { to: route.path, className: ({ isActive }) => `mb-2 block rounded-lg px-4 py-3 font-medium transition-all duration-200 ${isActive
                        ? "bg-blue-600 text-white shadow"
                        : "text-slate-300 hover:bg-slate-800 hover:text-white"}`, children: route.label }, route.path))) }), _jsx("div", { className: "border-t border-slate-700 p-4", children: _jsx("button", { onClick: handleLogout, className: "w-full rounded-lg bg-red-600 px-4 py-2 font-medium transition-colors duration-200 hover:bg-red-700", children: "Logout" }) })] }));
}
export default Sidebar;
