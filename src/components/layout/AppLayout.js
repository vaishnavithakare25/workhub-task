import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from "react-router-dom";
// import Sidebar from "./Sidebar";
// import Header from "./Header";
// import Sidebar from "./Sidebar";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
function AppLayout() {
    return (_jsxs("div", { className: "flex min-h-screen bg-gray-100", children: [_jsx(Sidebar, {}), _jsxs("div", { className: "flex flex-1 flex-col", children: [_jsx(Header, {}), _jsx("main", { className: "flex-1 p-6", children: _jsx(Outlet, {}) })] })] }));
}
export default AppLayout;
