import { jsx as _jsx } from "react/jsx-runtime";
import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";
import { useCreateUser } from "../hooks/useCreateUser";
function CreateUserPage() {
    const navigate = useNavigate();
    const createUser = useCreateUser();
    const handleSubmit = async (data) => {
        console.log("Submitted:", data);
        const newUser = {
            id: 0,
            firstName: data.firstName,
            lastName: data.lastName,
            fullName: `${data.firstName} ${data.lastName}`,
            email: data.email,
            username: data.email,
            age: 0,
            gender: "",
            image: "",
            role: data.role,
        };
        await createUser.mutateAsync(newUser);
        navigate("/users");
    };
    return (_jsx(UserForm, { mode: "create", onSubmit: handleSubmit }));
}
export default CreateUserPage;
