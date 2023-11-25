import { getUsers } from "../components/users";
import { showToast } from "../utils/toast";

const Users = async () => {
    const usersResponse = await getUsers({ limit: 10, page: 1 })
    if (usersResponse.code === "error") {
        showToast(usersResponse.error.message, "error", { theme: "light" })
        return <div> {usersResponse.error.message} </div>
    }

    return <>
        {usersResponse.data.map((user) => (
            <div key={user.id}>
                {user.name}
            </div>
        ))}
    </>
// There are lot to do!!!
}

export default Users;
