import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function EmptyState({ title = "No Data Found", description = "There is nothing to display.", }) {
    return (_jsxs("div", { className: "flex flex-col items-center justify-center rounded-lg border border-dashed bg-white p-10 text-center", children: [_jsx("h2", { className: "text-xl font-semibold", children: title }), _jsx("p", { className: "mt-2 text-gray-500", children: description })] }));
}
export default EmptyState;
