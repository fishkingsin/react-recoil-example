import { useRecoilValue } from "recoil";
import usersState from './usersState';

function UsersList() {
    const users = useRecoilValue(usersState);

    return (
        <ul>

            {users.map((user) => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}

export default UsersList