import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../features/auth/store/auth.store";
import { useAuthorization } from "../../hooks/useAuthorization";
function ProtectedRoute({ children, permission, }) {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    const { can } = useAuthorization();
    if (!isAuthenticated) {
        return _jsx(Navigate, { to: "/", replace: true });
    }
    if (permission && !can(permission)) {
        return _jsx(Navigate, { to: "/forbidden", replace: true });
    }
    return _jsx(_Fragment, { children: children });
}
export default ProtectedRoute;
