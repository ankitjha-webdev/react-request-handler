import { getUsers } from "../components/users";

const Users = async () => {
    const usersResponse = await getUsers({ limit: 10, page: 1 })
    if (usersResponse.code === "error") {
        return <div> {usersResponse.error.message} </div>
    }

    return <>
        {usersResponse.data.map((user) => (
            <div key={user.id}>
                {user.name}
            </div>
        ))}
    </>
// there are lot to know!!
}

export default Users;
