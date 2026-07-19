import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
function UserTableHeader({ onSort }) {
    return (_jsx("thead", { className: "bg-gray-100", children: _jsxs("tr", { children: [_jsx("th", { className: "px-4 py-3 text-left", children: "Avatar" }), _jsx("th", { className: "cursor-pointer px-4 py-3 text-left", onClick: () => onSort?.("firstName"), children: "Name" }), _jsx("th", { className: "px-4 py-3 text-left", children: "Email" }), _jsx("th", { className: "px-4 py-3 text-left", children: "Role" }), _jsx("th", { className: "cursor-pointer px-4 py-3 text-left", onClick: () => onSort?.("age"), children: "Age" }), _jsx("th", { className: "px-4 py-3 text-center", children: "Actions" })] }) }));
}
export default UserTableHeader;
