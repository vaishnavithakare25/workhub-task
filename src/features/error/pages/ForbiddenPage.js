import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function ForbiddenPage() {
    return (_jsx("div", { className: "flex h-screen items-center justify-center", children: _jsxs("div", { className: "text-center", children: [_jsx("h1", { className: "text-5xl font-bold", children: "403" }), _jsx("p", { className: "mt-4 text-gray-600", children: "You don't have permission to access this page." })] }) }));
}
export default ForbiddenPage;
