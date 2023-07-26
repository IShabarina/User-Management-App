import { useLocalStorageState } from './hooks/useLocalStorageState';
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { IUser } from './components/UserItem';


function App() {
  const [users, setUsers] = useLocalStorageState('users', []);

  const handleAddUser = (newUser: IUser) => {
    setUsers([...users, newUser]);
  }

  const handleDeleteUser = (userId: string) => {
    const updatedUsers = [...users];
    const changedUsersList = updatedUsers.filter((user) => user.id !== userId);
    setUsers(changedUsersList);
  }

  return (
    <Layout>
      <Header />
      <Content
        users={users}
        onAdd={handleAddUser}
        onDelete={handleDeleteUser} />
    </Layout>
  );
}

export default App;
