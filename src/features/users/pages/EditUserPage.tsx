// import { useParams } from "react-router-dom";
import UserForm from "../components/UserForm";
import { useUserDetail } from "../hooks/useUserDetail";
import { useNavigate, useParams } from "react-router-dom";
// import { UserFormData } from "../schemas/user.schema";
import { UserFormData } from "../schemas/user.schema";
import { UserModel } from "../model/user.model";
import { useUpdateUser } from "../hooks/useUpdateUser";
import { BackButton, Skeleton } from "../../../components/shared";


function EditUserPage() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const id = Number(userId);

  const { data: user, isLoading } = useUserDetail(id);
   const updateUser = useUpdateUser();

 if (isLoading) {
    return (
      <Skeleton className="h-64 w-full" />
    );
  }

  if (!user) {
    return <p>User not found.</p>;
  }

 const handleSubmit = async (data: UserFormData) => {
    const updatedUser: UserModel = {
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

  return (
    <div>
        <BackButton />
    <UserForm
      mode="edit"
      defaultValues={{
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
      }}
      onSubmit={handleSubmit}
    />
    </div>
  );
}

export default EditUserPage;