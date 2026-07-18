import { useUsers } from "../hooks/useUsers";
import { useSearchParams } from "react-router-dom";
import UserTable from "../components/UserTable"
import UserToolbar from "../components/UserToolbar";
import Pagination from "../../../components/shared/Pagination/Pagination";

function UsersPage() {
const [searchParams, setSearchParams] = useSearchParams();

const page = Number(searchParams.get("page") ?? "1");

const pageSize = Number(searchParams.get("pageSize") ?? "10");
  const params = {
  limit: pageSize,
  skip: (page - 1) * pageSize,
};
  const { data, isLoading, error } = useUsers(params);

  if (isLoading) {
    return <h2>Loading users...</h2>;
  }

  if (error) {
    return <h2>Something went wrong.</h2>;
  }

  const totalPages = data
  ? Math.ceil(data.total / pageSize)
  : 1;

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">
        Users
      </h1>

      <UserToolbar
    search=""
    role=""
    sortBy="firstName"
    order="asc"
    onSearchChange={() => {}}
    onRoleChange={() => {}}
    onSortByChange={() => {}}
    onOrderChange={() => {}}
/>


        <UserTable users={data?.users ?? []} />

        <div className="mt-6 flex items-center gap-3">
      <Pagination
  page={page}
  totalPages={totalPages}
  onPrevious={() =>
    setSearchParams({
      page: String(Math.max(page - 1, 1)),
      pageSize: String(pageSize),
    })
  }
  onNext={() =>
    setSearchParams({
      page: String(page + 1),
      pageSize: String(pageSize),
    })
  }
/>
       </div>

    </div>
  );
}

export default UsersPage;