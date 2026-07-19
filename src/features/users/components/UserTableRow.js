import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import UserRoleBadge from "./UserRoleBagde";
import UserActions from "./UserActions";
function UserTableRow({ user, }) {
    return (_jsxs("tr", { className: "border-t hover:bg-gray-50", children: [_jsx("td", { className: "px-4 py-3", children: _jsx("img", { src: user.image ||
                        "https://ui-avatars.com/api/?name=" +
                            encodeURIComponent(user.fullName), alt: user.fullName }) }), _jsx("td", { className: "px-4 py-3", children: user.fullName }), _jsx("td", { className: "px-4 py-3", children: user.email }), _jsx("td", { className: "px-4 py-3", children: _jsx(UserRoleBadge, { role: user.role }) }), _jsx("td", { className: "px-4 py-3", children: user.age }), _jsx("td", { className: "px-4 py-3 text-center", children: _jsx(UserActions, { userId: user.id }) })] }));
}
export default UserTableRow;
