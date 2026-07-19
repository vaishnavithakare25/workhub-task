import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useUsers } from "../hooks/useUsers";
import { useSearchParams } from "react-router-dom";
import UserTable from "../components/UserTable";
import UserToolbar from "../components/UserToolbar";
import Pagination from "../../../components/shared/Pagination/Pagination";
import { ErrorState, Skeleton, EmptyState } from "../../../components/shared";
function UsersPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get("search") ?? "";
    const role = searchParams.get("role") ?? "";
    const sortBy = searchParams.get("sortBy") ?? "firstName";
    const order = searchParams.get("order") ?? "asc";
    const page = Number(searchParams.get("page") ?? "1");
    const pageSize = Number(searchParams.get("pageSize") ?? "10");
    const params = {
        limit: pageSize,
        skip: (page - 1) * pageSize,
        sortBy,
        order,
    };
    const { data, isLoading, error } = useUsers(params);
    const filteredUsers = data?.users.filter((user) => {
        const matchesSearch = user.firstName
            .toLowerCase()
            .includes(search.toLowerCase()) ||
            user.lastName
                .toLowerCase()
                .includes(search.toLowerCase()) ||
            user.email
                .toLowerCase()
                .includes(search.toLowerCase());
        const matchesRole = role === "" || user.role === role;
        return matchesSearch && matchesRole;
    }) ?? [];
    const sortedUsers = [...filteredUsers].sort((a, b) => {
        const first = a[sortBy];
        const second = b[sortBy];
        if (typeof first === "string" &&
            typeof second === "string") {
            return order === "asc"
                ? first.localeCompare(second)
                : second.localeCompare(first);
        }
        if (typeof first === "number" &&
            typeof second === "number") {
            return order === "asc"
                ? first - second
                : second - first;
        }
        return 0;
    });
    if (isLoading) {
        return (_jsx("div", { className: "space-y-4", children: Array.from({ length: 8 }).map((_, index) => (_jsx(Skeleton, { className: "h-16 w-full" }, index))) }));
    }
    if (error) {
        return (_jsx(ErrorState, { title: "Failed to Load Users", description: "Unable to fetch users. Please try again." }));
    }
    const totalPages = data
        ? Math.ceil(data.total / pageSize)
        : 1;
    return (_jsxs("div", { children: [_jsx("h1", { className: "mb-6 text-3xl font-bold", children: "Users" }), _jsx(UserToolbar, { search: search, role: role, sortBy: sortBy, order: order, onSearchChange: (value) => setSearchParams({
                    page: "1",
                    pageSize: String(pageSize),
                    search: value,
                    role,
                    sortBy,
                    order,
                }), onRoleChange: (value) => setSearchParams({
                    page: "1",
                    pageSize: String(pageSize),
                    search,
                    role: value,
                    sortBy,
                    order,
                }), onSortByChange: (value) => setSearchParams({
                    page: "1",
                    pageSize: String(pageSize),
                    search,
                    role,
                    sortBy: value,
                    order,
                }), onOrderChange: (value) => setSearchParams({
                    page: "1",
                    pageSize: String(pageSize),
                    search,
                    role,
                    sortBy,
                    order: value,
                }) }), sortedUsers.length === 0 ? (_jsx(EmptyState, { title: "No Users Found", description: "Try changing your search or filter." })) : (_jsx(UserTable, { users: sortedUsers })), _jsx("div", { className: "mt-6 flex items-center gap-3", children: _jsx(Pagination, { page: page, totalPages: totalPages, onPrevious: () => setSearchParams({
                        page: String(Math.max(page - 1, 1)),
                        pageSize: String(pageSize),
                    }), onNext: () => setSearchParams({
                        page: String(page + 1),
                        pageSize: String(pageSize),
                    }) }) })] }));
}
export default UsersPage;
