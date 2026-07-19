import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import UserTableHeader from "./UserTableHeader";
import UserTableRow from "./UserTableRow";
function UserTable({ users, }) {
    return (_jsx("div", { className: "overflow-x-auto rounded-lg border bg-white shadow", children: _jsxs("table", { className: "min-w-full", children: [_jsx(UserTableHeader, {}), _jsx("tbody", { children: users.map((user) => (_jsx(UserTableRow, { user: user }, user.id))) })] }) }));
}
export default UserTable;
