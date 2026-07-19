import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { useAuthorization } from "../../../hooks/useAuthorization";
import { PERMISSIONS } from "../../../constants/permissions";
import { useDeleteUser } from "../hooks/useDeleteUser";
function UserActions({ userId }) {
    const { can } = useAuthorization();
    const deleteUser = useDeleteUser();
    const handleDelete = async () => {
        const confirmed = window.confirm("Are you sure you want to delete this user?");
        if (!confirmed) {
            return;
        }
        await deleteUser.mutateAsync(userId);
        alert("User deleted successfully.");
    };
    return (_jsxs("div", { className: "flex items-center justify-center gap-2", children: [can(PERMISSIONS.USERS_VIEW) && (_jsx(Link, { to: `/users/${userId}`, className: "rounded bg-blue-500 px-3 py-1 text-sm text-white", children: "View" })), can(PERMISSIONS.USERS_EDIT) && (_jsx(Link, { to: `/users/${userId}/edit`, className: "rounded bg-yellow-500 px-3 py-1 text-sm text-white", children: "Edit" })), can(PERMISSIONS.USERS_DELETE) && (_jsx("button", { onClick: handleDelete, disabled: deleteUser.isPending, className: "rounded bg-red-500 px-3 py-1 text-sm text-white hover:bg-red-600 disabled:opacity-50", children: deleteUser.isPending ? "Deleting..." : "Delete" }))] }));
}
export default UserActions;
