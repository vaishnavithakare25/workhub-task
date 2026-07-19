import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import { useParams } from "react-router-dom";
import UserForm from "../components/UserForm";
import { useUserDetail } from "../hooks/useUserDetail";
import { useNavigate, useParams } from "react-router-dom";
import { useUpdateUser } from "../hooks/useUpdateUser";
import { BackButton } from "../../../components/shared";
function EditUserPage() {
    const { userId } = useParams();
    const navigate = useNavigate();
    const id = Number(userId);
    const { data: user, isLoading } = useUserDetail(id);
    const updateUser = useUpdateUser();
    if (isLoading) {
        return _jsx("p", { children: "Loading..." });
    }
    if (!user) {
        return _jsx("p", { children: "User not found." });
    }
    const handleSubmit = async (data) => {
        const updatedUser = {
            ...user,
            firstName: data.firstName,
            lastName: data.lastName,
            fullName: `${data.firstName} ${data.lastName}`,
            email: data.email,
            role: data.role,
        };
        await updateUser.mutateAsync(updatedUser);
        navigate("/users");
    };
    return (_jsxs("div", { children: [_jsx(BackButton, {}), _jsx(UserForm, { mode: "edit", defaultValues: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    role: user.role,
                }, onSubmit: handleSubmit })] }));
}
export default EditUserPage;
