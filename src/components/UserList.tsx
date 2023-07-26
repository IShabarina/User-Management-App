import { IUser, UserItem } from "./UserItem";

interface IUserList {
    users: Array<IUser>,
    onDelete: (id: string) => void;
}

export const UsersList = ({ users, onDelete }: IUserList) => {
    return (
        <ul className="user-list">
            {
                users.map((user) => (
                    <UserItem key={user.id} user={user} onDelete={onDelete} />
                ))
            }
        </ul>
    )
}