import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card } from "../../../components/shared";
function DashboardPage() {
    return (_jsxs("div", { children: [_jsx("h1", { className: "mb-6 text-3xl font-bold", children: "Dashboard" }), _jsxs("div", { className: "grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4", children: [_jsx(Card, { title: "Total Users", children: _jsx("p", { className: "text-3xl font-bold", children: "208" }) }), _jsx(Card, { title: "Work Items", children: _jsx("p", { className: "text-3xl font-bold", children: "56" }) }), _jsx(Card, { title: "Completed", children: _jsx("p", { className: "text-3xl font-bold", children: "42" }) }), _jsx(Card, { title: "Pending", children: _jsx("p", { className: "text-3xl font-bold", children: "14" }) })] })] }));
}
export default DashboardPage;
