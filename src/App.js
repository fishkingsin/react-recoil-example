import { RecoilRoot } from "recoil";
import CreateUser from "./CreateUser";
import UsersList from "./UserList";

function App() {
  return (
    <RecoilRoot>
      <CreateUser />
      <UsersList />
    </RecoilRoot>
  );
}

export default App;
