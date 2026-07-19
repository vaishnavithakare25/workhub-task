import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../../features/auth/pages/LoginPage";
import DashboardPage from "../../features/dashboard/pages/DashboardPage";
import UsersPage from "../../features/users/pages/UsersPage";
import WorkItemsPage from "../../features/work-items/pages/WorkItemsPage";
import ProfilePage from "../../features/profile/pages/ProfilePage";
import SettingsPage from "../../features/settings/pages/SettingsPage";
import ProtectedRoute from "./ProtectedRoute";
// import AppLayout from "../../layouts/AppLayout";
import AppLayout from "../../components/layout/AppLayout";
import ForbiddenPage from "../../features/error/pages/ForbiddenPage";
import { PERMISSIONS } from "../../constants/permissions";
import EditUserPage from "../../features/users/pages/EditUserPage";
import CreateUserPage from "../../features/users/pages/CreateUserPage";
import UserDetailsPage from "../../features/users/pages/UserDetailsPage";
function AppRoutes() {
    return (_jsx(BrowserRouter, { children: _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(LoginPage, {}) }), _jsxs(Route, { element: _jsx(ProtectedRoute, { children: _jsx(AppLayout, {}) }), children: [_jsx(Route, { path: "/dashboard", element: _jsx(ProtectedRoute, { permission: PERMISSIONS.DASHBOARD_VIEW, children: _jsx(DashboardPage, {}) }) }), _jsx(Route, { path: "/users", element: _jsx(ProtectedRoute, { permission: PERMISSIONS.USERS_VIEW, children: _jsx(UsersPage, {}) }) }), _jsx(Route, { path: "/users/new", element: _jsx(ProtectedRoute, { permission: PERMISSIONS.USERS_CREATE, children: _jsx(CreateUserPage, {}) }) }), _jsx(Route, { path: "/users/:userId", element: _jsx(ProtectedRoute, { permission: PERMISSIONS.USERS_VIEW, children: _jsx(UserDetailsPage, {}) }) }), _jsx(Route, { path: "/users/:userId/edit", element: _jsx(ProtectedRoute, { permission: PERMISSIONS.USERS_EDIT, children: _jsx(EditUserPage, {}) }) }), _jsx(Route, { path: "/work-items", element: _jsx(ProtectedRoute, { permission: PERMISSIONS.WORKITEMS_VIEW, children: _jsx(WorkItemsPage, {}) }) }), _jsx(Route, { path: "/profile", element: _jsx(ProtectedRoute, { permission: PERMISSIONS.PROFILE_VIEW, children: _jsx(ProfilePage, {}) }) }), _jsx(Route, { path: "/settings", element: _jsx(ProtectedRoute, { permission: PERMISSIONS.SETTINGS_VIEW, children: _jsx(SettingsPage, {}) }) }), _jsx(Route, { path: "/forbidden", element: _jsx(ForbiddenPage, {}) })] })] }) }));
}
export default AppRoutes;
