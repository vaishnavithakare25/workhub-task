import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { Button, Card, Input, Select } from "../../../components/common";
import { Card, Button, Input, Select } from "../../../components/shared";
import { userSchema, } from "../schemas/user.schema";
function UserForm({ mode, defaultValues, onSubmit, }) {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting }, } = useForm({
        resolver: zodResolver(userSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            role: "user",
            ...defaultValues,
        },
    });
    useEffect(() => {
        if (defaultValues) {
            reset({
                firstName: defaultValues.firstName ?? "",
                lastName: defaultValues.lastName ?? "",
                email: defaultValues.email ?? "",
                role: defaultValues.role ?? "user",
            });
        }
    }, [defaultValues, reset]);
    return (_jsx(Card, { title: mode === "create"
            ? "Create User"
            : "Edit User", children: _jsxs("form", { onSubmit: handleSubmit(onSubmit), className: "space-y-2", children: [_jsx(Input, { id: "firstName", label: "First Name", ...register("firstName"), error: errors.firstName?.message }), _jsx(Input, { id: "lastName", label: "Last Name", ...register("lastName"), error: errors.lastName?.message }), _jsx(Input, { id: "email", type: "email", label: "Email", ...register("email"), error: errors.email?.message }), _jsx(Select, { id: "role", label: "Role", ...register("role"), options: [
                        {
                            label: "Administrator",
                            value: "admin",
                        },
                        {
                            label: "Manager",
                            value: "moderator",
                        },
                        {
                            label: "Contributor",
                            value: "user",
                        },
                    ], error: errors.role?.message }), _jsx(Button, { type: "submit", isLoading: isSubmitting, className: "w-full", children: mode === "create"
                        ? "Create User"
                        : "Update User" })] }) }));
}
export default UserForm;
