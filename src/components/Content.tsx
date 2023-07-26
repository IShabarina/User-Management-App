import { NewUserFrom } from "./NewUserForm"
import { IUser } from "./UserItem"
import { UsersList } from "./UserList"

interface IContent {
    users: Array<IUser>,
    onAdd: (obj: IUser) => void,
    onDelete: (id: string) => void,
}

export const Content = ({ users, onAdd, onDelete }: IContent) => {
    return (
        <main className="content">
            <section className="form-section">
                <NewUserFrom onAdd={onAdd} />
            </section>

            <section className="list-section">
                <UsersList users={users} onDelete={onDelete} />
            </section>
        </main>
    )
}