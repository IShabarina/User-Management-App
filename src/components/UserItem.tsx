import { Button } from "./Button";

interface IUserItemProps {
    user: IUser;
    onDelete: (id: string) => void;
}

export interface IUser {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
}

export const UserItem = ({ user, onDelete }: IUserItemProps) => {
    const btnDelete = "Удалить";

    return (
        <li className="user-item">
            <p className="user-item-name">{user.firstName}</p>
            <p className="user-item-last-name">{user.lastName}</p>
            <p className="user-item-email">{user.email}</p>
            <Button text={btnDelete} onClick={() => onDelete(user.id)} />
        </li>
    )
}