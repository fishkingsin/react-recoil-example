import { useState } from 'react';
import { useRecoilState } from "recoil";
import usersState from './usersState';
function CreateUser() {
    const [, setUsers] = useRecoilState(usersState);
    const [name, setName] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        setUsers((users) => [...users, {
            id: generateNewId(),
            name
        }])
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <input type="submit" value="submit" />
        </form>
    );
}

function generateNewId() {
    return "" + Math.random() * 1000
}
export default CreateUser