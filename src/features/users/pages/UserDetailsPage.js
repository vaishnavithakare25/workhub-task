import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useParams } from "react-router-dom";
// import {Card} from "../../../components/common/index"
import { Card, BackButton } from "../../../components/shared";
import { useUserDetail } from "../hooks/useUserDetail";
function UserDetailsPage() {
    const { userId } = useParams();
    const id = Number(userId);
    const { data: user, isLoading, isError, } = useUserDetail(id);
    if (isLoading) {
        return _jsx("p", { children: "Loading..." });
    }
    if (isError || !user) {
        return _jsx("p", { children: "User not found." });
    }
    return (_jsxs("div", { children: [_jsx(BackButton, {}), _jsx(Card, { title: "User Details", children: _jsxs("div", { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("strong", { children: "Name:" }), " ", user.fullName] }), _jsxs("div", { children: [_jsx("strong", { children: "Email:" }), " ", user.email] }), _jsxs("div", { children: [_jsx("strong", { children: "Role:" }), " ", user.role] }), _jsxs("div", { children: [_jsx("strong", { children: "Age:" }), " ", user.age] })] }) })] }));
}
export default UserDetailsPage;
